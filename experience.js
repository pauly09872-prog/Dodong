const certificates = [
  { id: 'cert-1', title: 'Introduction to SQL', issuer: 'Simplilearn / SkillUp', date: '2026-05-17', category: 'SQL', src: 'images/cert-1.jpg', alt: 'Introduction to SQL certificate awarded to Paul Angelo M. Hernandez by Simplilearn SkillUp.' },
  { id: 'cert-2', title: 'SQL Projects', issuer: 'Simplilearn / SkillUp', date: '2026-05-21', category: 'SQL', src: 'images/cert-2.jpg', alt: 'SQL Projects certificate awarded to Paul Angelo M. Hernandez by Simplilearn SkillUp.' },
  { id: 'cert-3', title: 'SQL for Data Science', issuer: 'Simplilearn / SkillUp', date: '2026-05-22', category: 'SQL', src: 'images/cert-3.jpg', alt: 'SQL for Data Science certificate awarded to Paul Angelo M. Hernandez by Simplilearn SkillUp.' },
  { id: 'cert-4', title: 'SQL for Data Analysis', issuer: 'Simplilearn / SkillUp', date: '2026-05-22', category: 'SQL', src: 'images/cert-4.jpg', alt: 'SQL for Data Analysis certificate awarded to Paul Angelo M. Hernandez by Simplilearn SkillUp.' },
  { id: 'cert-5', title: 'SQL Query Optimization for Beginners', issuer: 'Simplilearn / SkillUp', date: '2026-05-22', category: 'SQL', src: 'images/cert-5.jpg', alt: 'SQL Query Optimization for Beginners certificate awarded to Paul Angelo M. Hernandez by Simplilearn SkillUp.' },
  { id: 'cert-6', title: 'JavaScript for Beginners', issuer: 'Simplilearn / SkillUp', date: '2026-03-16', category: 'JavaScript', src: 'images/cert-6.jpg', alt: 'JavaScript for Beginners certificate awarded to Paul Angelo M. Hernandez by Simplilearn SkillUp.' },
  { id: 'cert-14', title: 'Python for Data Analysis', issuer: 'Simplilearn / SkillUp', date: '2026-04-08', category: 'Python', src: 'images/cert-14.jpg', alt: 'Python for Data Analysis certificate awarded to Paul Angelo M. Hernandez by Simplilearn SkillUp.' },
  { id: 'cert-9', title: 'Data Analytics Essentials', issuer: 'Cisco Networking Academy', date: '2026-03-24', category: 'Data Analytics', src: 'images/cert-9.jpg', alt: 'Data Analytics Essentials certificate awarded to Paul Hernandez by Cisco Networking Academy.' },
  { id: 'cert-11', title: 'JavaScript Essentials 1', issuer: 'Cisco Networking Academy', date: '2026-04-20', category: 'JavaScript', src: 'images/cert-11.jpg', alt: 'JavaScript Essentials 1 Statement of Achievement awarded by Cisco Networking Academy and OpenEDG JavaScript Institute.' },
  { id: 'cert-13', title: 'Networking Devices and Initial Configuration', issuer: 'Cisco Networking Academy', date: '2025-11-30', category: 'Networking', src: 'images/cert-13.jpg', alt: 'Networking Devices and Initial Configuration certificate awarded by Cisco Networking Academy.' },
  { id: 'cert-10', title: 'Data Analysis Using Python — Intermediate', issuer: 'IBM Skills Network', date: '2026-04-26', category: 'Python', src: 'images/cert-10.jpg', alt: 'Data Analysis Using Python certificate awarded to Paul Angelo Hernandez by IBM.' },
  { id: 'ibm-badge', title: 'Data Analysis Using Python — badge', issuer: 'IBM Skills Network', date: '', category: 'Python', src: 'images/data-analysis-using-python.png', alt: 'IBM Skills Network Data Analysis Using Python badge artwork.' },
  { id: 'tesda-java', title: 'Programming (Java) NC III — Certificate of Training', issuer: 'TESDA', date: '', category: 'Java', src: 'images/TESDA Java Programming Certificate.png', alt: 'TESDA Programming Java NC III Certificate of Training.' }
];

const technologies = [
  { id: 'java', name: 'Java', group: 'Programming Languages', mark: 'J', icon: 'java.svg', color: 'ed8b00', description: 'Object-oriented programming included in my TESDA Programming (Java) NC III training.', certificates: ['tesda-java'] },
  { id: 'python', name: 'Python', group: 'Programming Languages', mark: 'Py', icon: 'python.svg', color: '3776ab', description: 'A programming language explored through data analysis coursework.', certificates: ['cert-14', 'cert-10', 'ibm-badge'] },
  { id: 'javascript', name: 'JavaScript', group: 'Programming Languages', mark: 'JS', icon: 'javascript.svg', color: 'f7df1e', description: 'Web programming fundamentals and JavaScript courses from Simplilearn and Cisco Networking Academy.', certificates: ['cert-6', 'cert-11'] },
  { id: 'php', name: 'PHP', group: 'Programming Languages', mark: 'PHP', icon: 'php.svg', color: '777bb4', description: 'A programming language in my broader technology interests. No related certificate is listed here.', certificates: [] },
  { id: 'cplusplus', name: 'C++', group: 'Programming Languages', mark: 'C++', icon: 'cplusplus.svg', color: '00599c', description: 'A programming language in my broader technology interests. No related certificate is listed here.', certificates: [] },
  { id: 'html5', name: 'HTML5', group: 'Programming Languages', mark: '5', icon: 'html5.svg', color: 'e34f26', description: 'The markup technology used to structure this portfolio and its accessible content.', certificates: [] },
  { id: 'css3', name: 'CSS3', group: 'Programming Languages', mark: '3', icon: 'css3.svg', color: '1572b6', description: 'The styling technology used to shape this responsive portfolio experience.', certificates: [] },
  { id: 'laravel', name: 'Laravel', group: 'Frameworks', mark: 'L', icon: 'laravel.svg', color: 'ff2d20', description: 'A PHP framework in my broader technology interests. No related certificate is listed here.', certificates: [] },
  { id: 'laragon', name: 'Laragon', group: 'Development Tools', mark: 'L', icon: 'laragon.svg', color: '31a9dd', description: 'A local development environment tool in my technology interests.', certificates: [] },
  { id: 'vscode', name: 'Visual Studio Code', group: 'Development Tools', mark: 'VS', icon: 'vscode.svg', color: '007acc', description: 'A code editor in my development toolkit.', certificates: [] },
  { id: 'android-studio', name: 'Android Studio', group: 'Development Tools', mark: 'AS', icon: 'androidstudio.svg', color: '3ddc84', description: 'An application development tool in my technology interests.', certificates: [] },
  { id: 'git', name: 'Git', group: 'Development Tools', mark: 'Git', icon: 'git.svg', color: 'f05032', description: 'Version control technology in my development toolkit.', certificates: [] },
  { id: 'github', name: 'GitHub', group: 'Development Tools', mark: 'GH', icon: 'github.svg', color: 'ffffff', description: 'A platform for hosting and sharing code. A personal profile link has not been provided.', certificates: [] },
  { id: 'postman', name: 'Postman', group: 'Development Tools', mark: 'P', icon: 'postman.svg', color: 'ff6c37', description: 'An API development and testing tool in my development toolkit.', certificates: [] },
  { id: 'sql', name: 'SQL', group: 'Databases', mark: 'DB', description: 'Database querying, projects, data science, data analysis, and query optimization coursework.', certificates: ['cert-1', 'cert-2', 'cert-3', 'cert-4', 'cert-5'] },
  { id: 'mysql', name: 'MySQL', group: 'Databases', mark: 'SQL', icon: 'mysql.svg', color: '4479a1', description: 'A relational database technology connected to my SQL learning and coursework.', certificates: ['cert-1', 'cert-2', 'cert-3', 'cert-4', 'cert-5'] },
  { id: 'workbench', name: 'MySQL Workbench', group: 'Databases', mark: 'WB', icon: 'workbench.svg', color: '75c9dc', description: 'A visual database design and management tool related to my SQL learning.', certificates: [] },
  { id: 'python-data-analysis', name: 'Python for Data Analysis', group: 'Data Analytics', mark: 'Py', icon: 'python.svg', color: '3776ab', description: 'Python data analysis coursework from Simplilearn and IBM Skills Network.', certificates: ['cert-14', 'cert-10', 'ibm-badge'] },
  { id: 'tableau', name: 'Tableau', group: 'Data Analytics', mark: 'T', icon: 'tableau.svg', color: '4e79a7', description: 'A data visualization and analytics tool in my technology interests. No related Tableau certificate is listed.', certificates: [] },
  { id: 'excel', name: 'Microsoft Excel', group: 'Data Analytics', mark: 'X', icon: 'excel.svg', color: '21a366', description: 'A spreadsheet and data organization tool in my technology interests. No related Excel certificate is listed.', certificates: [] },
  { id: 'powerbi', name: 'Power BI', group: 'Data Analytics', mark: 'BI', icon: 'powerbi.svg', color: 'f2c811', description: 'A business intelligence and data visualization tool in my technology interests. No related Power BI certificate is listed.', certificates: [] },
  { id: 'data-analytics', name: 'Data Analytics', group: 'Data Analytics', mark: 'DA', icon: 'data-analytics.svg', color: '38c6d5', description: 'Data analysis and analytics learning represented by Cisco Networking Academy and IBM Skills Network credentials.', certificates: ['cert-9', 'cert-10', 'ibm-badge'] },
  { id: 'jupyter', name: 'Jupyter Notebook', group: 'Data Analytics', mark: 'J', icon: 'jupyter.svg', color: 'f37626', description: 'An interactive notebook environment relevant to Python data analysis.', certificates: ['cert-14', 'cert-10', 'ibm-badge'] },
  { id: 'networking', name: 'Networking', group: 'Networking', mark: 'NET', icon: 'networking.svg', color: '49c9e2', description: 'Networking devices and initial configuration coursework from Cisco Networking Academy.', certificates: ['cert-13'] }
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const reduceMotionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const certificateById = id => certificates.find(certificate => certificate.id === id);
const dateText = value => value ? new Intl.DateTimeFormat('en', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`)) : 'Date not shown';

function technologyMark(technology) {
  const mark = document.createElement('span');
  mark.className = 'tech-mark';
  mark.textContent = technology.mark;
  if (technology.id === 'sql') {
    mark.textContent = '';
    mark.classList.add('database-mark');
    const database = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    database.setAttribute('viewBox', '0 0 24 24');
    database.setAttribute('aria-hidden', 'true');
    const cylinder = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    cylinder.setAttribute('d', 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3');
    database.append(cylinder);
    mark.append(database);
  }
  if (technology.icon) {
    const image = document.createElement('img');
    image.src = `images/tech/${technology.icon}`;
    image.alt = '';
    image.loading = 'lazy';
    image.decoding = 'async';
    image.addEventListener('error', () => image.remove(), { once: true });
    mark.append(image);
  }
  return mark;
}

function technologyButton(technology, compact = false) {
  const button = document.createElement('button');
  button.className = compact ? 'hero-tech-button tech-button' : 'tech-button';
  button.type = 'button';
  button.dataset.technology = technology.id;
  button.style.setProperty('--tech-color', technology.color ? `#${technology.color}` : '#54d8e6');
  if (compact) {
    const iconIndex = Math.max(0, heroTechnologies.indexOf(technology.id));
    const spinDurations = [9.2, 10.4, 11.2, 9.8, 12, 10.8];
    const spinDelays = [0, -1.2, -2.8, -0.7, -3.6, -2.1];
    const floatDurations = [5.4, 6.1, 5.8, 6.5, 5.6, 6.3];
    button.style.setProperty('--spin-duration', `${spinDurations[iconIndex % spinDurations.length]}s`);
    button.style.setProperty('--spin-delay', `${spinDelays[iconIndex % spinDelays.length]}s`);
    button.style.setProperty('--float-duration', `${floatDurations[iconIndex % floatDurations.length]}s`);
    button.style.setProperty('--float-delay', `${-iconIndex * 0.72}s`);
    button.style.setProperty('--rock-delay', `${-iconIndex * 0.58}s`);
  } else {
    button.style.animationDelay = `-${(technologies.indexOf(technology) % 7) * 0.45}s`;
  }
  button.setAttribute('aria-label', technology.name);
  button.title = technology.name;
  const mark = technologyMark(technology);
  const label = document.createElement('span');
  label.className = 'tech-label';
  label.textContent = technology.name;
  if (compact) {
    const frontFace = document.createElement('span');
    frontFace.className = 'hero-tech-face hero-tech-face-front';
    frontFace.append(mark, label);
    const backFace = document.createElement('span');
    backFace.className = 'hero-tech-face hero-tech-face-back';
    backFace.append(technologyMark(technology), label.cloneNode(true));
    const badge = document.createElement('span');
    badge.className = 'hero-tech-badge';
    badge.append(frontFace, backFace);
    const rotator = document.createElement('span');
    rotator.className = 'hero-tech-rotator';
    rotator.append(badge);
    const floater = document.createElement('span');
    floater.className = 'hero-tech-floater';
    floater.append(rotator);
    button.append(floater);

    let playbackRateFrame = 0;
    const setRotationRate = targetRate => {
      if (reduceMotionPreference.matches) return;
      const spin = rotator.getAnimations().find(animation => animation.animationName === 'hero-tech-spin');
      if (!spin) return;
      if (playbackRateFrame) window.cancelAnimationFrame(playbackRateFrame);
      const approachTarget = () => {
        const difference = targetRate - spin.playbackRate;
        if (Math.abs(difference) < 0.012) {
          spin.playbackRate = targetRate;
          playbackRateFrame = 0;
          return;
        }
        spin.playbackRate += difference * 0.1;
        playbackRateFrame = window.requestAnimationFrame(approachTarget);
      };
      playbackRateFrame = window.requestAnimationFrame(approachTarget);
    };
    button.addEventListener('pointerenter', () => setRotationRate(0.18));
    button.addEventListener('focus', () => setRotationRate(0.18));
    button.addEventListener('pointerleave', () => {
      if (document.activeElement !== button) setRotationRate(1);
    });
    button.addEventListener('blur', () => {
      if (!button.matches(':hover')) setRotationRate(1);
    });
  } else {
    button.append(mark, label);
  }
  button.addEventListener('click', () => showTechnology(technology));
  button.addEventListener('pointerenter', () => updateTechnologyPanel(technology));
  button.addEventListener('focus', () => updateTechnologyPanel(technology));
  button.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch' || reduceMotionPreference.matches) return;
    const bounds = button.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    button.style.setProperty('--tilt-x', `${-y * 6}deg`);
    button.style.setProperty('--tilt-y', `${x * 7}deg`);
    if (!compact) {
      button.style.setProperty('--magnet-x', `${x * 2}px`);
      button.style.setProperty('--magnet-y', `${y * 2}px`);
    }
  });
  button.addEventListener('pointerleave', () => {
    button.style.setProperty('--tilt-x', '0deg');
    button.style.setProperty('--tilt-y', '0deg');
    if (!compact) {
      button.style.setProperty('--magnet-x', '0px');
      button.style.setProperty('--magnet-y', '0px');
    }
  });
  return button;
}

const heroTechnologies = ['python', 'javascript', 'html5', 'laravel', 'mysql', 'vscode'];
const heroTechField = $('#hero-tech-field');
heroTechnologies.forEach(id => {
  const technology = technologies.find(item => item.id === id);
  if (technology) heroTechField.append(technologyButton(technology, true));
});

const universeStage = $('.universe-stage');
let pointerFrame = 0;
const portraitComposition = $('#portrait-composition');
universeStage.addEventListener('pointermove', event => {
  if (event.pointerType === 'touch' || pointerFrame || reduceMotionPreference.matches) return;
  pointerFrame = window.requestAnimationFrame(() => {
    const bounds = universeStage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    const portraitBounds = portraitComposition.getBoundingClientRect();
    const portraitX = Math.max(-0.5, Math.min(0.5, (event.clientX - portraitBounds.left) / portraitBounds.width - 0.5));
    const portraitY = Math.max(-0.5, Math.min(0.5, (event.clientY - portraitBounds.top) / portraitBounds.height - 0.5));
    universeStage.style.setProperty('--scene-x', `${x * 9}px`);
    universeStage.style.setProperty('--scene-y', `${y * 7}px`);
    universeStage.style.setProperty('--laptop-rx', `${-y * 7}deg`);
    universeStage.style.setProperty('--laptop-ry', `${x * 9}deg`);
    portraitComposition.style.setProperty('--portrait-x', `${portraitX * 7}px`);
    portraitComposition.style.setProperty('--portrait-y', `${portraitY * 5}px`);
    portraitComposition.style.setProperty('--portrait-rx', `${-portraitY * 1.4}deg`);
    portraitComposition.style.setProperty('--portrait-ry', `${portraitX * 1.8}deg`);
    heroTechField.style.setProperty('--field-x', `${x * 3}px`);
    heroTechField.style.setProperty('--field-y', `${y * 2}px`);
    heroTechField.style.setProperty('--field-rx', `${-y * 0.8}deg`);
    heroTechField.style.setProperty('--field-ry', `${x * 1.1}deg`);
    pointerFrame = 0;
  });
});
universeStage.addEventListener('pointerleave', () => {
  universeStage.style.setProperty('--scene-x', '0px');
  universeStage.style.setProperty('--scene-y', '0px');
  universeStage.style.setProperty('--laptop-rx', '0deg');
  universeStage.style.setProperty('--laptop-ry', '0deg');
  portraitComposition.style.setProperty('--portrait-x', '0px');
  portraitComposition.style.setProperty('--portrait-y', '0px');
  portraitComposition.style.setProperty('--portrait-rx', '0deg');
  portraitComposition.style.setProperty('--portrait-ry', '0deg');
  heroTechField.style.setProperty('--field-x', '0px');
  heroTechField.style.setProperty('--field-y', '0px');
  heroTechField.style.setProperty('--field-rx', '0deg');
  heroTechField.style.setProperty('--field-ry', '0deg');
});

const orbitButtons = $$('.hero-tech-button', heroTechField);
const compactOrbitQuery = window.matchMedia('(max-width: 520px)');
const tabletOrbitQuery = window.matchMedia('(max-width: 800px)');
const orbitPeriod = 25000;
let orbitPhase = Math.PI / 6;
let orbitFrame = 0;
let previousOrbitFrame = 0;
let orbitVisible = !('IntersectionObserver' in window);
let orbitGeometry = { centerX: 0, centerY: 0, radiusX: 0, radiusY: 0 };

function measureTechnologyOrbit() {
  const width = heroTechField.clientWidth;
  const height = heroTechField.clientHeight;
  if (!width || !height) return;

  const badgeSize = Number.parseFloat(getComputedStyle(heroTechField).getPropertyValue('--badge-size')) || 76;
  const compact = compactOrbitQuery.matches;
  const tablet = tabletOrbitQuery.matches;
  const centerX = width * 0.5;
  const centerY = height * 0.51;
  const horizontalClearance = compact ? 3 : 8;
  const safeTop = compact ? 16 : tablet ? 24 : 80;
  const safeBottom = compact ? 26 : tablet ? 56 : 80;
  const radiusX = Math.max(0, Math.min(width * (compact ? 0.43 : 0.46), centerX - badgeSize / 2 - horizontalClearance, width - centerX - badgeSize / 2 - horizontalClearance));
  const radiusY = Math.max(0, Math.min(height * (compact ? 0.36 : 0.37), centerY - badgeSize / 2 - safeTop, height - centerY - badgeSize / 2 - safeBottom));

  orbitGeometry = { centerX, centerY, radiusX, radiusY };
  renderTechnologyOrbit(orbitPhase);
}

function renderTechnologyOrbit(phase) {
  const { radiusX, radiusY } = orbitGeometry;
  const depthRange = compactOrbitQuery.matches ? 34 : 56;

  orbitButtons.forEach((button, index) => {
    const angle = phase + index * (Math.PI * 2 / orbitButtons.length);
    const cosine = Math.cos(angle);
    const sine = Math.sin(angle);
    const depthOffset = (sine * 0.82 + cosine * 0.18) * depthRange;
    const depth = (depthOffset / depthRange + 1) / 2;
    const x = cosine * radiusX;
    const y = sine * radiusY;
    const scale = 0.94 + depth * 0.1;

    button.style.setProperty('--orbit-x', `${x.toFixed(2)}px`);
    button.style.setProperty('--orbit-y', `${y.toFixed(2)}px`);
    button.style.setProperty('--orbit-z', `${depthOffset.toFixed(2)}px`);
    button.style.setProperty('--orbit-scale', scale.toFixed(3));
    button.style.setProperty('--orbit-brightness', (0.97 + depth * 0.06).toFixed(3));
    button.style.setProperty('--orbit-shadow-alpha', (0.28 + depth * 0.14).toFixed(3));
    button.style.setProperty('--orbit-order', String(10 + Math.round(depth * 10)));
  });
}

function orbitCanRun() {
  return orbitVisible && !document.hidden && !reduceMotionPreference.matches &&
    !document.body.classList.contains('motion-paused') &&
    !document.documentElement.classList.contains('motion-paused');
}

function animateTechnologyOrbit(now) {
  orbitFrame = 0;
  if (!orbitCanRun()) return;

  if (previousOrbitFrame) {
    const delta = Math.min(now - previousOrbitFrame, 80);
    orbitPhase = (orbitPhase + delta * Math.PI * 2 / orbitPeriod) % (Math.PI * 2);
  }
  previousOrbitFrame = now;
  renderTechnologyOrbit(orbitPhase);
  orbitFrame = window.requestAnimationFrame(animateTechnologyOrbit);
}

function stopTechnologyOrbit() {
  if (orbitFrame) window.cancelAnimationFrame(orbitFrame);
  orbitFrame = 0;
  previousOrbitFrame = 0;
}

function syncTechnologyOrbit() {
  const canRun = orbitCanRun();
  heroTechField.classList.toggle('is-orbit-paused', !canRun);

  if (reduceMotionPreference.matches) {
    stopTechnologyOrbit();
    orbitPhase = 0;
    renderTechnologyOrbit(orbitPhase);
    return;
  }

  if (!canRun) {
    stopTechnologyOrbit();
    return;
  }

  if (!orbitFrame) orbitFrame = window.requestAnimationFrame(animateTechnologyOrbit);
}

const orbitResizeObserver = 'ResizeObserver' in window ? new ResizeObserver(measureTechnologyOrbit) : null;
orbitResizeObserver?.observe(heroTechField);
window.addEventListener('resize', measureTechnologyOrbit, { passive: true });

const orbitVisibilityObserver = 'IntersectionObserver' in window ? new IntersectionObserver(([entry]) => {
  orbitVisible = entry.isIntersecting;
  syncTechnologyOrbit();
}, { rootMargin: '120px' }) : null;
orbitVisibilityObserver?.observe(universeStage);

const orbitMotionObserver = new MutationObserver(syncTechnologyOrbit);
orbitMotionObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
orbitMotionObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
document.addEventListener('visibilitychange', syncTechnologyOrbit);
reduceMotionPreference.addEventListener?.('change', syncTechnologyOrbit);

measureTechnologyOrbit();
renderTechnologyOrbit(orbitPhase);
syncTechnologyOrbit();

function disposeTechnologyOrbit() {
  orbitResizeObserver?.disconnect();
  orbitVisibilityObserver?.disconnect();
  orbitMotionObserver.disconnect();
  document.removeEventListener('visibilitychange', syncTechnologyOrbit);
  reduceMotionPreference.removeEventListener?.('change', syncTechnologyOrbit);
  window.removeEventListener('resize', measureTechnologyOrbit);
  window.removeEventListener('pageshow', onTechnologyPageShow);
  window.removeEventListener('pagehide', onTechnologyPageHide);
}

function onTechnologyPageShow() {
  measureTechnologyOrbit();
  syncTechnologyOrbit();
}

function onTechnologyPageHide(event) {
  stopTechnologyOrbit();
  if (!event.persisted) disposeTechnologyOrbit();
}

window.addEventListener('pageshow', onTechnologyPageShow);
window.addEventListener('pagehide', onTechnologyPageHide);

const technologyFilters = ['All Technologies', 'Programming Languages', 'Frameworks', 'Databases', 'Development Tools', 'Data Analytics', 'Networking'];
const filters = $('#tech-filters');
const toolGrid = $('#technology-grid');
const filterButtons = new Map();
let activeTechnologyFilter = 'All Technologies';
let selectedTechnology = null;
let certificateIndex = 0;
let visibleCertificates = certificates;

technologyFilters.forEach(filter => {
  const button = document.createElement('button');
  button.className = 'tech-filter';
  button.type = 'button';
  button.textContent = filter;
  button.dataset.filter = filter;
  button.setAttribute('aria-pressed', String(filter === activeTechnologyFilter));
  button.addEventListener('click', () => {
    activeTechnologyFilter = filter;
    filterButtons.forEach((element, value) => element.setAttribute('aria-pressed', String(value === filter)));
    renderTechnologies();
  });
  filters.append(button);
  filterButtons.set(filter, button);
});

function renderTechnologies() {
  const matching = technologies.filter(item => activeTechnologyFilter === 'All Technologies' || item.group === activeTechnologyFilter);
  toolGrid.replaceChildren(...matching.map(item => technologyButton(item)));
  toolGrid.dataset.filter = activeTechnologyFilter;
  if (selectedTechnology && !matching.some(item => item.id === selectedTechnology.id)) {
    selectedTechnology = null;
    $$('.tech-button.is-selected').forEach(button => button.classList.remove('is-selected'));
    $('#detail-name').textContent = 'A toolkit in progress';
    $('#detail-description').textContent = 'Explore the technologies represented in my learning journey.';
    $('#detail-mark').textContent = '✳';
    $('#detail-links').replaceChildren();
  }
}

function certificateLink(certificate) {
  const button = document.createElement('button');
  button.className = 'related-certificate';
  button.type = 'button';
  button.textContent = certificate.title;
  button.addEventListener('click', () => openCertificate(certificate.id));
  return button;
}

function showTechnology(technology) {
  updateTechnologyPanel(technology);
  const dialog = $('#technology-dialog');
  $('#technology-category').textContent = technology.group;
  $('#technology-title').textContent = technology.name;
  $('#technology-description').textContent = technology.description;
  const related = $('#technology-related');
  related.replaceChildren();
  if (technology.certificates.length) {
    technology.certificates.map(certificateById).filter(Boolean).forEach(certificate => {
      const card = document.createElement('button');
      card.className = 'technology-related-card';
      card.type = 'button';
      const image = document.createElement('img');
      image.src = certificate.src;
      image.alt = '';
      image.loading = 'lazy';
      const title = document.createElement('span');
      title.textContent = certificate.title;
      const issuer = document.createElement('small');
      issuer.textContent = certificate.issuer;
      card.append(image, title, issuer);
      card.addEventListener('click', () => openCertificate(certificate.id));
      related.append(card);
    });
  } else {
    const note = document.createElement('p');
    note.className = 'no-related';
    note.textContent = 'No related certificate is listed. See the technology description for context.';
    related.append(note);
  }
  if (!dialog.open) dialog.showModal();
}

function updateTechnologyPanel(technology) {
  selectedTechnology = technology;
  $$('.tech-button.is-selected').forEach(button => button.classList.remove('is-selected'));
  $$(`[data-technology="${technology.id}"]`).forEach(button => button.classList.add('is-selected'));
  $('#detail-name').textContent = technology.name;
  $('#detail-description').textContent = technology.description;
  $('#detail-mark').replaceChildren(technologyMark(technology));
  const links = $('#detail-links');
  links.replaceChildren();
  technology.certificates.map(certificateById).filter(Boolean).forEach(certificate => links.append(certificateLink(certificate)));
  if (!technology.certificates.length) {
    const note = document.createElement('span');
    note.className = 'no-related';
    note.textContent = 'No related certificate is listed.';
    links.append(note);
  }
}

const certificateDialog = $('#certificate-dialog');
function openCertificate(id) {
  const index = certificates.findIndex(certificate => certificate.id === id);
  if (index < 0) return;
  certificateIndex = index;
  if ($('#technology-dialog').open) $('#technology-dialog').close();
  updateCertificateDialog();
  certificateDialog.showModal();
}

function updateCertificateDialog() {
  const certificate = certificates[certificateIndex];
  $('#viewer-category').textContent = `${certificate.issuer} · ${certificate.category}`;
  $('#viewer-title').textContent = certificate.title;
  $('#viewer-details').textContent = certificate.date ? `Completed ${dateText(certificate.date)}` : 'Completion date not shown on the supplied image';
  const image = $('#viewer-image');
  image.src = certificate.src;
  image.alt = certificate.alt;
  image.classList.remove('is-zoomed');
  $('#viewer-zoom').setAttribute('aria-pressed', 'false');
  $('#viewer-zoom').textContent = 'Zoom +';
  $('#viewer-position').textContent = `${certificateIndex + 1} / ${certificates.length}`;
  $('#viewer-prev').disabled = certificateIndex === 0;
  $('#viewer-next').disabled = certificateIndex === certificates.length - 1;
}

function renderCertificates() {
  const search = $('#certificate-search').value.trim().toLowerCase();
  const selectedIssuer = $('#filter-list').dataset.issuer || 'All';
  visibleCertificates = certificates.filter(certificate =>
    (selectedIssuer === 'All' || certificate.issuer === selectedIssuer) &&
    `${certificate.title} ${certificate.issuer} ${certificate.category}`.toLowerCase().includes(search)
  );
  const grid = $('#certificate-grid');
  grid.replaceChildren();
  const groups = new Map();
  visibleCertificates.forEach(certificate => {
    if (!groups.has(certificate.issuer)) groups.set(certificate.issuer, []);
    groups.get(certificate.issuer).push(certificate);
  });
  groups.forEach((items, issuer) => {
    const group = document.createElement('section');
    group.className = 'certificate-group';
    const heading = document.createElement('h3');
    heading.textContent = issuer;
    const cards = document.createElement('div');
    cards.className = 'certificate-group-grid';
    items.forEach(certificate => {
      const card = document.createElement('button');
      card.className = 'certificate-card';
      card.type = 'button';
      card.setAttribute('aria-label', `View ${certificate.title}, issued by ${certificate.issuer}`);
      const imageWrap = document.createElement('span');
      imageWrap.className = 'certificate-image';
      const image = document.createElement('img');
      image.src = certificate.src;
      image.alt = certificate.alt;
      image.loading = 'lazy';
      image.decoding = 'async';
      imageWrap.append(image);
      const meta = document.createElement('span');
      meta.className = 'certificate-card-meta';
      const category = document.createElement('span');
      category.textContent = certificate.category;
      const date = document.createElement(certificate.date ? 'time' : 'span');
      if (certificate.date) date.dateTime = certificate.date;
      date.textContent = certificate.date ? new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${certificate.date}T00:00:00Z`)) : 'Date not shown';
      meta.append(category, date);
      const title = document.createElement('span');
      title.className = 'certificate-title';
      title.textContent = certificate.title;
      const issuerText = document.createElement('span');
      issuerText.className = 'issuer';
      issuerText.textContent = certificate.issuer;
      const viewLabel = document.createElement('span');
      viewLabel.className = 'certificate-view-label';
      viewLabel.textContent = 'View Certificate ↗';
      card.append(imageWrap, meta, title, issuerText, viewLabel);
      card.addEventListener('click', () => openCertificate(certificate.id));
      card.addEventListener('pointermove', event => {
        if (event.pointerType === 'touch' || reduceMotionPreference.matches) return;
        const bounds = card.getBoundingClientRect();
        card.style.setProperty('--card-tilt-x', `${((event.clientY - bounds.top) / bounds.height - 0.5) * -9}deg`);
        card.style.setProperty('--card-tilt-y', `${((event.clientX - bounds.left) / bounds.width - 0.5) * 11}deg`);
      });
      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--card-tilt-x', '0deg');
        card.style.setProperty('--card-tilt-y', '0deg');
      });
      cards.append(card);
    });
    group.append(heading, cards);
    grid.append(group);
  });
  $('#result-count').textContent = `${visibleCertificates.length} certificate${visibleCertificates.length === 1 ? '' : 's'} shown`;
  $('#empty-state').hidden = visibleCertificates.length > 0;
  $('#show-more').hidden = true;
  $('#clear-filters').hidden = $('#filter-list').dataset.issuer === 'All' && !search;
}

const issuerFilters = ['All', ...new Set(certificates.map(certificate => certificate.issuer))];
issuerFilters.forEach(issuer => {
  const button = document.createElement('button');
  button.className = 'filter-button';
  button.type = 'button';
  button.dataset.issuer = issuer;
  button.setAttribute('aria-pressed', String(issuer === 'All'));
  button.textContent = issuer === 'All' ? 'All certificates' : issuer;
  button.addEventListener('click', () => {
    $('#filter-list').dataset.issuer = issuer;
    $$('.filter-button', $('#filter-list')).forEach(item => item.setAttribute('aria-pressed', String(item.dataset.issuer === issuer)));
    renderCertificates();
  });
  $('#filter-list').append(button);
});
$('#filter-list').dataset.issuer = 'All';
$('#certificate-search').addEventListener('input', renderCertificates);
$('#clear-filters').addEventListener('click', () => {
  $('#certificate-search').value = '';
  $('#filter-list').dataset.issuer = 'All';
  $$('.filter-button', $('#filter-list')).forEach(button => button.setAttribute('aria-pressed', String(button.dataset.issuer === 'All')));
  renderCertificates();
});
$('#viewer-close').addEventListener('click', () => certificateDialog.close());
$('#viewer-prev').addEventListener('click', () => { if (certificateIndex > 0) { certificateIndex--; updateCertificateDialog(); } });
$('#viewer-next').addEventListener('click', () => { if (certificateIndex < certificates.length - 1) { certificateIndex++; updateCertificateDialog(); } });
$('#viewer-zoom').addEventListener('click', () => {
  const image = $('#viewer-image');
  const zoomed = image.classList.toggle('is-zoomed');
  $('#viewer-zoom').setAttribute('aria-pressed', String(zoomed));
  $('#viewer-zoom').textContent = zoomed ? 'Zoom −' : 'Zoom +';
});
$('#viewer-image-wrap').addEventListener('click', event => {
  if (event.target === $('#viewer-image')) $('#viewer-zoom').click();
});
$('#technology-close').addEventListener('click', () => $('#technology-dialog').close());
[$('#certificate-dialog'), $('#technology-dialog')].forEach(dialog => {
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
});
document.addEventListener('keydown', event => {
  if (!certificateDialog.open) return;
  if (event.key === 'ArrowLeft' && certificateIndex > 0) { certificateIndex--; updateCertificateDialog(); }
  if (event.key === 'ArrowRight' && certificateIndex < certificates.length - 1) { certificateIndex++; updateCertificateDialog(); }
});

renderTechnologies();
renderCertificates();

const menuToggle = $('.menu-toggle');
const mobileNav = $('#mobile-nav');
const floatingNav = $('.floating-nav');
const mobileViewport = window.matchMedia('(max-width: 800px)');
const heroSection = $('#home');
const isHeroVisible = () => {
  const bounds = heroSection.getBoundingClientRect();
  return bounds.bottom > 0 && bounds.top < window.innerHeight;
};
let heroIsVisible = isHeroVisible();
const syncFloatingNav = () => { floatingNav.hidden = mobileViewport.matches && heroIsVisible; };
const heroNavObserver = 'IntersectionObserver' in window ? new IntersectionObserver(([entry]) => {
  heroIsVisible = entry.isIntersecting;
  syncFloatingNav();
}, { threshold: 0 }) : null;
if (heroNavObserver) heroNavObserver.observe($('#home'));
else window.addEventListener('scroll', () => { heroIsVisible = isHeroVisible(); syncFloatingNav(); }, { passive: true });
mobileViewport.addEventListener('change', syncFloatingNav);
syncFloatingNav();
function closeMenu() {
  mobileNav.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  menuToggle.innerHTML = '<svg><use href="#menu"/></svg>';
}
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  mobileNav.hidden = !open;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menuToggle.innerHTML = open ? '<svg><use href="#close"/></svg>' : '<svg><use href="#menu"/></svg>';
});
$$('#mobile-nav a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.matchMedia('(min-width: 801px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

const motionToggle = $('#motion-toggle');
motionToggle.addEventListener('click', () => {
  const paused = document.body.classList.toggle('motion-paused');
  motionToggle.setAttribute('aria-pressed', String(paused));
  motionToggle.setAttribute('aria-label', paused ? 'Resume animations' : 'Pause animations');
  motionToggle.innerHTML = paused ? '<svg><use href="#play"/></svg>' : '<svg><use href="#pause"/></svg>';
});

$$('.share-button').forEach(button => button.addEventListener('click', async () => {
  const shareData = { title: document.title, text: 'Explore my personal technology portfolio.', url: window.location.href };
  try {
    if (navigator.share) await navigator.share(shareData);
    else if (navigator.clipboard) {
      await navigator.clipboard.writeText(shareData.url);
      const toast = $('#toast');
      toast.textContent = 'Portfolio link copied.';
      toast.classList.add('visible');
      window.setTimeout(() => toast.classList.remove('visible'), 2600);
    } else {
      window.prompt('Copy this portfolio link', shareData.url);
    }
  } catch (error) {
    if (error.name !== 'AbortError') {
      const toast = $('#toast');
      toast.textContent = 'Unable to share this link right now.';
      toast.classList.add('visible');
      window.setTimeout(() => toast.classList.remove('visible'), 2600);
    }
  }
}));

const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      entry.target.classList.remove('is-waiting');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 }) : null;
const reduceMotion = reduceMotionPreference.matches;
$$('.reveal').forEach(element => {
  if (revealObserver && !reduceMotion) {
    element.classList.add('is-waiting');
    revealObserver.observe(element);
  }
  else element.classList.add('is-visible');
});

$('#year').textContent = String(new Date().getFullYear());
