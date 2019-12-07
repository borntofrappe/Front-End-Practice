/* function creating the sides of the regular polygons
the idea is to recursively add horizontal lines which are rotated according to the input angle
rotate -> horizontal line -> translate
    repeat until you reach the starting point
*/
const segments = (sidesLeft, side, angle) => `<g transform="rotate(-${angle})">
    <path d="M 0 0 h ${side}"/>
    <g transform="translate(${side} 0)">
        ${sidesLeft === 1 ? '' : segments(sidesLeft - 1, side, angle)}
    </g>
</g>`;

// function setting up the svg for the regular polygon
const regularPolygon = sides => {
  const radius = 50;
  const diameter = radius * 2;
  // side = 2 * r (the radius, 50) * sin * (180 / number of sides)
  // ! 180 / number of sides is expressed in degrees
  // Math.sin() expects radians instead
  const side = 2 * radius * Math.sin((180 / sides) * (Math.PI / 180));

  const strokeWidth = 4;
  const angle = 360 / sides;

  return `
  <svg viewBox="-${radius + strokeWidth / 2} -${radius +
    strokeWidth / 2} ${diameter + strokeWidth} ${diameter +
    strokeWidth}" width="100" height="100">
      <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" stroke-width="${strokeWidth}">
        <g transform="translate(${side / 2} 50)">
            ${segments(sides, side, angle)}
        </g>
      </g>
  </svg>
  `;
};


// markup
/* in the form element add the following structure
div
    svg
h1
input[type="range"]

*/
const form = document.querySelector('form');

// in the div container add a polygon with an arbitrary number of sides
const initialSides = Math.floor(Math.random() * 6) + 3;
const divContainer = document.createElement('div');
divContainer.innerHTML = regularPolygon(initialSides);

// in the heading describe the number
const headingSides = document.createElement('h1');
headingSides.textContent = `Sides: ${initialSides}`;

// for the input set a sensible minimum and maximum value
const inputRange = document.createElement('input');
inputRange.setAttribute('type', 'range');
inputRange.setAttribute('id', 'sides');
inputRange.setAttribute('min', '3');
inputRange.setAttribute('max', '20');
inputRange.setAttribute('value', initialSides);

form.appendChild(divContainer);
form.appendChild(headingSides);
form.appendChild(inputRange);

// following the input event on the form take the value from the input#sides and include the new svg graphic
function handleInput(e) {
    const { value } = this.sides;
  divContainer.innerHTML = regularPolygon(value);
  headingSides.textContent = `Sides: ${value}`;
}

form.addEventListener('input', handleInput);
