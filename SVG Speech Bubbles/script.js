/*
for variability, the speech bubble makes use of
- a set of colors
- a specific shape
- a certain expressions

all chosen from a selected array of options
*/
const palettes = [
  {
    one: '#FFFFFF',
    two: '#E66E44',
    three: '#FFDF5F',
    four: '#FFDA51',
    five: '#FFC209',
    six: '#F79614',
  },
  {
    one: '#F0F0D8',
    two: '#604848',
    three: '#84D70D',
    four: '#789048',
    five: '#C0D860',
  },
  {
    one: '#FBEC31',
    two: '#E80026',
    three: '#000000',
    four: '#FFFFFF',
  },
  {
    one: '#FFFFFF',
    two: '#615145',
    three: '#0CBEFC',
    four: '#6B9997',
    five: '#8AB8A8',
    six: '#9AEDFF',
  },
  {
    one: '#FFFFFF',
    two: '#6E1E62',
    three: '#FFEE02',
    four: '#DE4126',
    five: '#EB9605',
    six: '#F7E6A6',
  },
];
const expressions = [
  'bam',
  'blast',
  'ouch',
  'slam',
  'boom',
  'zap',
  'ouf',
  'ouch',
  'slack',
  'bang',
  'pow',
];

const dAttributes = [
  'm -12.815 -40 12.605 20.777 26.05-13.981-6.9328 20 21.008-3.4952-17.857 14.951 27.941 12.816-31.933 3.301-4.8319 16.893-16.176-12.621-25 21.359 8.8235-26.408-30.882 0.58252 27.731-14.757-21.639-21.553 32.353 4.466z',
  'm-45 0c0 13.807 20.147 25 45 25 6.2132 0 12.132-0.69955 17.516-1.9646 16.712-4.5018 23.765 0.99132 23.765 0.99132-0.16098-0.39469-7.5721-7.4454 0.18258-14.296 2.2771-2.991 3.5363-6.2793 3.5363-9.7311 0-13.807-20.147-25-45-25s-45 11.193-45 25z',
  'm -12.815 -40 c14.132 12.451 20.457 25.764 38.655 6.796-11.702 17.632 0.090944 24.824 21.194 14.132-25.908 12.167-23.684 27.114 2.9654 30.14-19.719 0.73056-35.511-4.2396-36.765 20.194-15.706-12.973-27.732-10.938-41.176 8.738 8.6768-18.36 1.6691-32.337-22.058-25.825 19.069-11.075 24.911-19.087 6.092-36.31 19.322 4.571 29.771 6.2811 31.093-17.864z',
  'm -9.169 30.504c11.76 23.585 21.638-4.1929 21.638-4.1929 24.931 19.392 23.049-11.006 23.049-11.006 31.446-10.698 1.8816-25.682 1.8816-25.682 19.316-23.864-12.23-20.44-12.23-20.44-12.13-19.701-23.52-1.5723-23.52-1.5723s-16.464-14.675-21.638 5.7653c0 0-22.258-3.2404-17.655 14.241 0 0-24.92 7.1607-3.9834 20.351 0 0-11.29 22.013 14.582 18.344 0 0 0.9408 20.44 17.875 4.1929z',
];

// smaller rendering function, for the shape of the speech bubble
// accepting as argument a color, scale and d attribute and returing a path element benefiting from the input values
const shape = (color, scale, d) => `
  <path fill=${color} transform="scale(${scale} ${scale})" d="${d}"/>
`;

/* rendering function for the speech bubble, customized with a specific expression, palette, d attribute
positioned according to the input x and y coordinates
! specify default values in case the function gets called without additional instructions
*/
const speechBubble = ({
  expression = expressions[0],
  palette = palettes[0],
  d = dAttributes[0],
  x = 0,
  y = 0,
} = {}) => {
  // uppercase the text
  const text = expression.toUpperCase();

  // retrieve the colors from the chosen palette
  const colors = Object.values(palette);
  // determine the distance separaiting the colored layers
  const spread = 0.015 * colors.length;

  // specify a considerable width, cognizant of the viewport's own width
  const { innerWidth } = window;
  // at most 300px
  const width = Math.min(300, innerWidth / 3);
  // keep the height to a ratio of the width
  const height = width * 80 / 100;
  // attributes to center the shape exactly in the x, y coordinates
  const top = y - height / 2;
  const left = x - width / 2;

  // rotation applied on the larger svg, in a [-20, 20] range
  const maxRotation = 20;
  const rotation = Math.floor(Math.random() * maxRotation * 2) - maxRotation;

  // render the svg, sized and positioned as needed
  // with as many shapes as there are colors, making use of the smaller rendering function
  // describing the text right atop said shapes
  return `
  <svg viewBox="0 0 100 80" width=${width} height=${height} style="position: absolute; top: ${top}px; left: ${left}px;" transform="rotate(${rotation})">
  <g class="bubble" transform="translate(50 40)">
    ${colors.map((color, index) => shape(color, 1 - (index * spread + spread), d)).join('')}
  </g>

  <g class="text" fill="#111" font-size="25" transform="translate(50 40)" text-anchor="middle" >
      <g transform="translate(-0.5 8)" fill="#333">
          <text x="0" y="0">${text}</text>
      </g>
      <text transform="translate(0 8)" x="0" y="0" >${text}</text>
      <g transform="translate(1 9)" opacity="0.1">
          <text x="0" y="0">${text}</text>
      </g>

  </g>

  </svg>

`;
};

// target the node in which to inject the shapes
const body = document.querySelector('body');

// functions retrieving random values from the chosen arrays
const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];
const randomExpression = () => randomItem(expressions);
const randomPalette = () => randomItem(palettes);
const randomAttribute = () => randomItem(dAttributes);

// on click
body.addEventListener('click', (e) => {
  // retrieve the coordinates to center the shape where the event was registered
  const { pageX: x, pageY: y } = e;
  // specify a random value for the expression, palette and d attribute
  const expression = randomExpression();
  const palette = randomPalette();
  const d = randomAttribute();

  // call the rendering function including each speech bubble in a div container
  // this to avoid having the animation play for every existing SVG element as newer ones are added
  const bubble = document.createElement('div');
  bubble.innerHTML += speechBubble({
    x,
    y,
    expression,
    palette,
    d,
  });
  body.appendChild(bubble);
});
