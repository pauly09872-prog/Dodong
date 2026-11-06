(() => {
  'use strict';

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const smoothstep = (min, max, value) => {
    const amount = clamp((value - min) / (max - min), 0, 1);
    return amount * amount * (3 - 2 * amount);
  };

  function createFlowField({ container, canvas, density = 1 } = {}) {
    if (!container || !canvas) return { destroy() {} };

    const context = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!context) return { destroy() {} };

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const coarsePointer = window.matchMedia('(pointer: coarse)');
    const lowPower = (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)
      || (navigator.deviceMemory && navigator.deviceMemory <= 4);
    const listenerOptions = { passive: true };
    let width = 0;
    let height = 0;
    let dpr = 1;
    let lines = [];
    let elapsed = 0;
    let previousFrame = 0;
    let frameId = 0;
    let isVisible = true;
    let destroyed = false;
    let drag = null;
    let dragX = 0;
    let dragY = 0;
    let paused = document.body.classList.contains('motion-paused');
    let pointerTarget = { x: 0, y: 0, active: 0 };
    let pointerCurrent = { x: 0, y: 0, active: 0 };
    const ripples = [];

    function makeGradient(variant) {
      const gradient = context.createLinearGradient(0, 0, width || 1, 0);
      const palettes = [
        ['rgba(88,190,209,0)', 'rgba(108,203,210,.3)', 'rgba(182,205,139,.56)', 'rgba(222,195,145,.26)', 'rgba(102,198,207,0)'],
        ['rgba(110,204,215,0)', 'rgba(118,213,208,.3)', 'rgba(210,215,144,.56)', 'rgba(191,217,134,.34)', 'rgba(118,198,206,0)'],
        ['rgba(105,174,204,0)', 'rgba(121,195,214,.25)', 'rgba(199,185,138,.48)', 'rgba(190,217,155,.3)', 'rgba(117,192,212,0)']
      ];
      const palette = palettes[variant % palettes.length];
      [0, 0.2, 0.48, 0.76, 1].forEach((stop, index) => gradient.addColorStop(stop, palette[index]));
      return gradient;
    }

    function rebuildLines() {
      if (!width || !height) return;
      const mobile = width < 680 || coarsePointer.matches;
      let count = width < 520 ? 31 : width < 900 ? 43 : 58;
      if (mobile) count = Math.round(count * 0.72);
      if (lowPower) count = Math.round(count * 0.78);
      count = Math.max(18, Math.round(count * density));

      let seed = 941;
      const random = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      const gradients = [makeGradient(0), makeGradient(1), makeGradient(2)];
      lines = Array.from({ length: count }, (_, index) => {
        const position = index / Math.max(1, count - 1);
        const depth = 0.2 + random() * 0.8;
        return {
          position,
          depth,
          phase: random() * Math.PI * 2,
          speed: 0.18 + random() * 0.23 + depth * 0.12,
          amplitude: (5 + random() * 11) * (0.6 + depth * 0.58),
          slope: (random() - 0.5) * height * 0.13,
          spacing: (random() - 0.5) * height * 0.018,
          width: 0.55 + depth * 0.54,
          alpha: 0.32 + depth * 0.36,
          glow: random() > 0.77,
          gradient: gradients[Math.floor(random() * gradients.length)]
        };
      });
    }

    function resize() {
      const bounds = container.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      dpr = Math.min(window.devicePixelRatio || 1, coarsePointer.matches ? 1.35 : 1.65);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      rebuildLines();
      draw(0);
    }

    function localPoint(event) {
      const bounds = canvas.getBoundingClientRect();
      return {
        x: clamp(event.clientX - bounds.left, 0, width),
        y: clamp(event.clientY - bounds.top, 0, height)
      };
    }

    function isBackdropTarget(target) {
      if (!(target instanceof Element)) return false;
      if (target.closest('a, button, input, textarea, select, summary, [role="button"]')) return false;
      return target === container
        || target.classList.contains('hero-layout')
        || Boolean(target.closest('.ink-wash, .hero-grain, .universe-grid, .portrait-rim, .portrait-light-sweep, .portrait-bottom-fade'));
    }

    function addRipple(point, strength = 1) {
      if (reduceMotion.matches) return;
      ripples.push({ x: point.x, y: point.y, born: elapsed, strength });
      if (ripples.length > 4) ripples.shift();
    }

    function onPointerLeave() {
      if (!drag) pointerTarget.active = 0;
    }

    function onPointerDown(event) {
      if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0) || !isBackdropTarget(event.target)) return;
      const point = localPoint(event);
      pointerTarget = { ...point, active: 1 };
      addRipple(point, event.pointerType === 'touch' ? 0.72 : 1);

      // Touch stays native so the page can scroll normally. Mouse and pen drags
      // add a small directional impulse without capturing or cancelling input.
      if (event.pointerType !== 'touch') drag = { pointerId: event.pointerId, x: point.x, y: point.y };
      syncAnimation();
    }

    function onPointerMove(event) {
      if (!container.contains(event.target) && (!drag || drag.pointerId !== event.pointerId)) return;
      const point = localPoint(event);
      pointerTarget = { ...point, active: 1 };

      if (drag && drag.pointerId === event.pointerId) {
        const moveX = point.x - drag.x;
        const moveY = point.y - drag.y;
        dragX = clamp(dragX + moveX * 0.16, -15, 15);
        dragY = clamp(dragY + moveY * 0.16, -15, 15);
        drag.x = point.x;
        drag.y = point.y;
      }
    }

    function onPointerUp(event) {
      if (drag && drag.pointerId === event.pointerId) drag = null;
    }

    function onVisibilityChange() {
      syncAnimation();
    }

    function draw(deltaSeconds) {
      if (!width || !height || destroyed) return;
      context.clearRect(0, 0, width, height);
      pointerCurrent.x += (pointerTarget.x - pointerCurrent.x) * 0.09;
      pointerCurrent.y += (pointerTarget.y - pointerCurrent.y) * 0.09;
      pointerCurrent.active += (pointerTarget.active - pointerCurrent.active) * 0.08;

      const seconds = elapsed;
      const mobile = width < 680 || coarsePointer.matches;
      const samples = mobile ? 42 : 68;
      const cursorRadiusX = Math.max(100, Math.min(width * 0.21, 245));
      const cursorRadiusY = Math.max(80, Math.min(height * 0.22, 190));
      dragX *= Math.pow(0.945, deltaSeconds * 60);
      dragY *= Math.pow(0.945, deltaSeconds * 60);

      for (let rippleIndex = ripples.length - 1; rippleIndex >= 0; rippleIndex--) {
        if (seconds - ripples[rippleIndex].born > 1.7) ripples.splice(rippleIndex, 1);
      }

      const parallaxX = (pointerCurrent.x / width - 0.5) * pointerCurrent.active;
      const parallaxY = (pointerCurrent.y / height - 0.5) * pointerCurrent.active;
      context.lineCap = 'round';
      context.lineJoin = 'round';
      context.globalCompositeOperation = 'lighter';

      lines.forEach((line, index) => {
        const band = 0.12 + line.position * 0.75;
        const centerY = height * band + line.spacing + Math.sin(line.phase + seconds * 0.21) * height * 0.018;
        const parallaxDepth = 0.25 + line.depth * 0.75;
        context.beginPath();

        for (let sample = 0; sample <= samples; sample++) {
          const progress = sample / samples;
          let x = progress * width + parallaxX * 16 * parallaxDepth;
          const phase = line.phase + seconds * line.speed;
          const longWave = Math.sin(progress * 5.2 + phase) * line.amplitude;
          const secondaryWave = Math.sin(progress * 10.4 - phase * 0.64 + line.position * 3.2) * line.amplitude * 0.31;
          const diagonal = (progress - 0.5) * line.slope;
          let y = centerY + longWave + secondaryWave + diagonal + parallaxY * 13 * parallaxDepth;
          const dx = x - pointerCurrent.x;
          const dy = y - pointerCurrent.y;
          const cursorInfluence = pointerCurrent.active * Math.exp(
            -((dx * dx) / (cursorRadiusX * cursorRadiusX) + (dy * dy) / (cursorRadiusY * cursorRadiusY)) * 1.35
          );

          if (cursorInfluence > 0.002) {
            const magneticBend = Math.sin(dx * 0.014 + phase * 0.8) * 20 * cursorInfluence * parallaxDepth;
            const repulsion = Math.sign(dy || 1) * cursorInfluence * 4.2 * parallaxDepth;
            y += magneticBend + repulsion;
            x -= dx * cursorInfluence * 0.035 * parallaxDepth;
          }

          if (dragX || dragY) {
            const dragInfluence = Math.exp(
              -((dx * dx) / (cursorRadiusX * cursorRadiusX * 1.6) + (dy * dy) / (cursorRadiusY * cursorRadiusY * 1.6))
            );
            y += (dragY * 0.72 + dragX * 0.24) * dragInfluence * parallaxDepth;
            x += dragX * 0.18 * dragInfluence * parallaxDepth;
          }

          for (const ripple of ripples) {
            const age = seconds - ripple.born;
            const radius = age * (285 + line.depth * 85);
            const distance = Math.hypot(x - ripple.x, y - ripple.y);
            const envelope = 1 - smoothstep(0.95, 1.7, age);
            const ring = Math.exp(-Math.pow((distance - radius) / 66, 2)) * envelope * ripple.strength;
            y += Math.sin((distance - radius) * 0.035) * 15 * ring * parallaxDepth;
          }

          if (sample === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        }

        context.strokeStyle = line.gradient;
        context.lineWidth = line.width;
        context.globalAlpha = line.alpha * (0.72 + pointerCurrent.active * 0.34);
        context.shadowColor = line.depth > 0.72 ? 'rgba(202,218,142,.28)' : 'rgba(91,196,211,.24)';
        context.shadowBlur = line.glow ? 6 : 1.5;
        context.stroke();
      });

      context.globalAlpha = 1;
      context.shadowBlur = 0;
      context.globalCompositeOperation = 'source-over';
    }

    function shouldAnimate() {
      return !destroyed && !paused && !reduceMotion.matches && isVisible && !document.hidden;
    }

    function animate(timestamp) {
      frameId = 0;
      if (!shouldAnimate()) return;
      const deltaSeconds = previousFrame ? Math.min((timestamp - previousFrame) / 1000, 0.05) : 0;
      previousFrame = timestamp;
      elapsed += deltaSeconds;
      draw(deltaSeconds);
      frameId = window.requestAnimationFrame(animate);
    }

    function syncAnimation() {
      if (shouldAnimate()) {
        if (!frameId) {
          previousFrame = 0;
          frameId = window.requestAnimationFrame(animate);
        }
      } else {
        if (frameId) window.cancelAnimationFrame(frameId);
        frameId = 0;
        previousFrame = 0;
        draw(0);
      }
    }

    function onMotionClassChange() {
      paused = document.body.classList.contains('motion-paused');
      syncAnimation();
    }

    function onMediaChange() {
      resize();
      syncAnimation();
    }

    container.addEventListener('pointerleave', onPointerLeave, listenerOptions);
    container.addEventListener('pointerdown', onPointerDown, listenerOptions);
    window.addEventListener('pointermove', onPointerMove, listenerOptions);
    window.addEventListener('pointerup', onPointerUp, listenerOptions);
    window.addEventListener('pointercancel', onPointerUp, listenerOptions);
    document.addEventListener('visibilitychange', onVisibilityChange, listenerOptions);
    reduceMotion.addEventListener?.('change', onMediaChange);
    coarsePointer.addEventListener?.('change', onMediaChange);

    const resizeObserver = 'ResizeObserver' in window ? new ResizeObserver(resize) : null;
    if (resizeObserver) resizeObserver.observe(container);
    else window.addEventListener('resize', resize, listenerOptions);

    const visibilityObserver = 'IntersectionObserver' in window ? new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      syncAnimation();
    }) : null;
    if (visibilityObserver) visibilityObserver.observe(container);

    const motionObserver = new MutationObserver(onMotionClassChange);
    motionObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    resize();
    syncAnimation();

    return {
      destroy() {
        if (destroyed) return;
        destroyed = true;
        if (frameId) window.cancelAnimationFrame(frameId);
        resizeObserver?.disconnect();
        visibilityObserver?.disconnect();
        motionObserver.disconnect();
        container.removeEventListener('pointerleave', onPointerLeave, listenerOptions);
        container.removeEventListener('pointerdown', onPointerDown, listenerOptions);
        window.removeEventListener('pointermove', onPointerMove, listenerOptions);
        window.removeEventListener('pointerup', onPointerUp, listenerOptions);
        window.removeEventListener('pointercancel', onPointerUp, listenerOptions);
        document.removeEventListener('visibilitychange', onVisibilityChange, listenerOptions);
        reduceMotion.removeEventListener?.('change', onMediaChange);
        coarsePointer.removeEventListener?.('change', onMediaChange);
        window.removeEventListener('resize', resize, listenerOptions);
      }
    };
  }

  const mountedFields = [];
  window.PortfolioFlowField = { mount: createFlowField };
  document.querySelectorAll('[data-flow-field-canvas]').forEach(canvas => {
    const container = canvas.closest('[data-flow-field]') || canvas.parentElement;
    if (container) mountedFields.push(createFlowField({ container, canvas }));
  });
  window.addEventListener('pagehide', () => mountedFields.forEach(field => field.destroy()), { once: true });
})();
