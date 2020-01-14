// identify the path and at every iteration update its `d` attribute alongside the `--d` custom property
const path = document.querySelector('path');

// utility functions to set up a spike with a semi random height/length
const randomBetween = (min, max) => Math.round(Math.random() * (max - min) + min);
const randomSpike = (spike = 1) => {
  const x = randomBetween(2, 5) * spike;
  const y = randomBetween(10, 30) * spike;

  return `${x} -${y} ${x*2} ${y*2} ${x} -${y}`;
};

path.addEventListener('animationiteration', () => {
  const spikes = randomBetween(3, 5);
  const d = `M 0 0 h 75 ${Array(spikes).fill().map(() => `l ${randomSpike()} h 30`).join('')} H 300`;

  path.setAttribute('d', d);
  // ! the custom property expects the value surrounded by quotes
  document.body.style.setProperty('--d', `"${d}"`);
})