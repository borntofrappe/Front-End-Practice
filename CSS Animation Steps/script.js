const threshold = 0.9;
const svg = document.querySelector('svg');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');

const { textContent: heading } = h1;
const { textContent: paragraph } = p;

// ! animationiteration is registered once for each SVG element being animatedsvg.addEventListener("animationiteration", (e) => {
svg.addEventListener('animationiteration', e => {
  e.stopPropagation();
  console.log('iteration');
  if (Math.random() > threshold) {
    svg.classList.add('translated');
    h1.textContent = 'Data saved.';
    p.textContent = 'Click anywhere to save again.';
  }
});

window.addEventListener('click', () => {
  if (svg.classList.contains('translated')) {
    svg.classList.remove('translated');
    h1.textContent = heading;
    p.textContent = paragraph;
  }
});
