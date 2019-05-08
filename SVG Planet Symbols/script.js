// for each celestial body specify the name and the svg syntax making up the respective symbol
const symbols = [
  {
    name: 'sun',
    svg: `
    <g transform="translate(5 5) scale(0.9 0.9)">
      <circle
          cx="50"
          cy="50"
          r="47.5"
          fill="none"
          stroke="currentColor"
          stroke-width="5">
      </circle>

      <circle
          cx="50"
          cy="50"
          r="5"
          fill="currentColor">
      </circle>
    </g>
    `,
  },
  {
    name: 'mercury',
    svg: `
    <g transform="translate(5 5) scale(0.9 0.9)">
      <circle
          cx="50"
          cy="35"
          r="25"
          fill="none"
          stroke="currentColor"
          stroke-width="5">
      </circle>

      <path
          d="M 37 13 q -10 -5 2 -15"
          fill="none"
          stroke="currentColor"
          stroke-width="6">
      </path>


      <path
          transform="translate(100) scale(-1 1)"
          d="M 37 13 q -10 -5 2 -15"
          fill="none"
          stroke="currentColor"
          stroke-width="6">
      </path>


      <path
          d="M 25 82.5 h 50"
          fill="none"
          stroke="currentColor"
          stroke-width="5">
      </path>

      <path
          d="M 50 60 v 40"
          fill="none"
          stroke="currentColor"
          stroke-width="5">
      </path>
    </g>
    `,
  },
  {
    name: 'venus',
    svg: `
    <g transform="translate(5 5) scale(0.9 0.9)">
      <circle
          cx="50"
          cy="30"
          r="25"
          fill="none"
          stroke="currentColor"
          stroke-width="5">
      </circle>


      <path
          d="M 25 75 h 50"
          fill="none"
          stroke="currentColor"
          stroke-width="5">
      </path>

      <path
          d="M 50 55 v 38"
          fill="none"
          stroke="currentColor"
          stroke-width="5">
      </path>
    </g>
    `,
  },
  {
    name: 'earth',
    svg: `
    <g transform="translate(5 5) scale(0.9 0.9)">
      <circle
          cx="50"
          cy="50"
          r="47.5"
          fill="none"
          stroke="currentColor"
          stroke-width="5">
      </circle>


      <path
          d="M 50 0 v 100"
          fill="none"
          stroke="currentColor"
          stroke-width="5">
      </path>


      <path
          d="M 0 50 h 100"
          fill="none"
          stroke="currentColor"
          stroke-width="5">
      </path>
    </g>
    `,
  },
  {
    name: 'mars',
    svg: `
    <g transform="translate(5 5) scale(0.9 0.9)">
      <circle
          cx="45"
          cy="60"
          r="30"
          fill="none"
          stroke="currentColor"
          stroke-width="5">
      </circle>

      <path
          d="M 65 40 l 20 -20"
          fill="none"
          stroke="currentColor"
          stroke-width="5">
      </path>

      <g transform="translate(85 20)">
          <path
              transform="rotate(45)"
              d="M 0 0 h 5 l -5 -10 l -5 10 h 5"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="5">
          </path>
      </g>
    </g>
    `,
  },
  {
    name: 'jupiter',
    svg: `
    <g transform="translate(5 5) scale(0.9 0.9)">
      <path
          d="M 75 15 v 80"
          fill="none"
          stroke="currentColor"
          stroke-width="5">
      </path>

      <path
          d="M 20 35 a 20 20 0 0 1 40 0 a 40 40 0 0 1 -30 40 h 60"
          fill="none"
          stroke="currentColor"
          stroke-width="5">
      </path>
    </g>
    `,
  },
  {
    name: 'saturn',
    svg: `
    <g transform="translate(5 5) scale(0.9 0.9)">
      <path
          d="M 20 5 h 20"
          fill="none"
          stroke="currentColor"
          stroke-width="5">
      </path>
      <path
          d="M 30 5 v 80"
          fill="none"
          stroke="currentColor"
          stroke-width="5">
      </path>

      <path
          d="M 30 50 q 10 -15 20 -15 q 20 0 20 15 t -10 30 t 5 20"
          fill="none"
          stroke="currentColor"
          stroke-width="5">
      </path>
    </g>
    `,
  },
  {
    name: 'uranus',
    svg: `
    <g transform="translate(5 5) scale(0.9 0.9)">
      <circle
          cx="50"
          cy="70"
          r="25"
          fill="none"
          stroke="currentColor"
          stroke-width="5">
      </circle>

      <circle
          cx="50"
          cy="70"
          r="5"
          fill="currentColor">
      </circle>

      <path
          d="M 50 20 h 5 l -5 -10 l -5 10 h 5"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="5">
      </path>

      <path
          d="M 50 20 v 25"
          fill="none"
          stroke="currentColor"
          stroke-width="5">
      </path>
    </g>
    `,
  },
  {
    name: 'neptune',
    svg: `
    <g transform="translate(5 5) scale(0.9 0.9)">
      <path
          d="M 25 20 v 25 a 25 25 0 0 0 25 25"
          fill="none"
          stroke="currentColor"
          stroke-width="5">
      </path>

      <path
          d="M 50 20 v 80"
          fill="none"
          stroke="currentColor"
          stroke-width="5">
      </path>

      <path
          d="M 75 20 v 25 a 25 25 0 0 1 -25 25"
          fill="none"
          stroke="currentColor"
          stroke-width="5">
      </path>

      <path
          d="M 25 20 h 5 l -5 -10 l -5 10 h 5"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="5">
      </path>

      <path
          d="M 50 20 h 5 l -5 -10 l -5 10 h 5"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="5">
      </path>

      <path
          d="M 75 20 h 5 l -5 -10 l -5 10 h 5"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="5">
      </path>

      <path
          d="M 30 85 h 40"
          fill="none"
          stroke="currentColor"
          stroke-width="5">
      </path>
    </g>
    `,
  },
];

// target the node in which to add the content
const chart = document.querySelector('.chart');

// dimensions of the viewBox
const width = 100;
const height = 100;

// loop through the symbols array and build an array with only the group elements
// ! specify a horizontal translation cutting the symbols out of the soon-to-be-wrapping svg element
const groups = symbols.map(({ svg: syntax }, index) => `
  <g transform="translate(${index * width} 0)">
    ${syntax}
  </g>
`);

// include in the selected node an svg with the group elements
// ! wrap the group elements in an additional group, used to translate the whole lot
chart.innerHTML += `
<svg
  viewBox="0 0 ${width} ${height}"
  width="${width}"
  height="${height}">

  <g>
    ${groups.join('')}
  </g>

  </svg>
`;

// loop through the symbols array and extract the planet's names
const planets = symbols.map(({ name }) => name);

// for each planet name add a button in a wrapping container
// ! on click have the buttons call a function to translate the `<g>` element to the respective icon
// ! experiment: call the function also on hover
// ! apply a class of active to the first button
// ! in the function pass the element being clicked/hovered upon
chart.innerHTML += `
  <div>
    ${planets.map((planet, index) => `
      <button
        onmouseover="showPlanet(this, ${index})"
        onclick="showPlanet(this, ${index})"
        ${index === 0 && 'class="active"'}
        >
        ${planet}
      </button>`).join('')}
  </div>
`;

// function translating the group element wrapping every planet
// function highlighting the selected button through the class of active
function showPlanet(element, index) {
  // target the selected element and translate according to the index value
  const group = document.querySelector('svg g');
  group.style.transition = 'transform 0.2s ease-in-out';
  group.setAttribute('transform', `translate(${-index * width} 0)`);

  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => button.classList.remove('active'));
  element.classList.add('active');
}
