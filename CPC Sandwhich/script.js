// colors in hue, saturation and lightness
// the idea is to add one span for each color making up the sandwich
const colors = [
  {
    h: 36,
    s: 92,
    l: 71,
  },
  {
    h: 6,
    s: 100,
    l: 68,
  },
  {
    h: 88,
    s: 50,
    l: 60,
  },
  {
    h: 46,
    s: 93,
    l: 67,
  },
  {
    h: 1,
    s: 66,
    l: 45,
  },
  {
    h: 36,
    s: 92,
    l: 71,
  },
];

// function generating a series of values of the text-shadow property of the span elements
// include multiple shadows with increasing y offset to detail a cohesive layer of a certain color
const textShadow = (spread, color) => Array(spread).fill('').map((item, index) => `
  0rem ${index / spread}rem ${color}
`).join(',');


const heading = document.querySelector('h1');
// include in span elements using the hsl colors defined earlier
// ! separate the span elements vertically and include a shadow with a darker variation of the color
heading.innerHTML += colors.map(({ h, s, l }, index) => {
  const color = `hsl(${h}, ${s}%, ${l}%)`;
  const shadow = `hsl(${h}, ${s - 10}%, ${l - 10}%)`;

  return `
  <span
    style="
      color: ${color};
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(${index}rem);
      z-index: ${-(index + 1)};
      text-shadow: ${textShadow(20, shadow)};">
      ${heading.textContent}
  </span>
  `;
}).join('');
