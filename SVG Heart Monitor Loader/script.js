// identify the path and at every iteration update its `d` attribute alongside the `--d` custom property
const path = document.querySelector('path');

path.addEventListener('animationiteration', () => {
  const d = 'M 0 0 h 100 l 10 -20 20 40 10 -20 h 200';
  path.setAttribute('d', d);
  // ! the custom property expects the value surrounded by quotes
  document.body.style.setProperty('--d', `"${d}"`);
})