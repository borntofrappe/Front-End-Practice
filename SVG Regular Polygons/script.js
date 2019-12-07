const segments = (sidesLeft, side, angle) => `<g transform="rotate(-${angle})">
    <path d="M 0 0 h ${side}"/>
    <g transform="translate(${side} 0)">
        ${sidesLeft === 1 ? '' : segments(sidesLeft - 1, side, angle)}
    </g>
</g>`;
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

const form = document.querySelector('form');

const svgWrapper = document.createElement('div');
svgWrapper.innerHTML = regularPolygon(3);

const inputRange = document.createElement('input');
inputRange.setAttribute('type', 'range');
inputRange.setAttribute('id', 'sides');
inputRange.setAttribute('min', '3');
inputRange.setAttribute('max', '20');
inputRange.setAttribute('value', '3');

form.appendChild(svgWrapper);
form.appendChild(inputRange);

function handleInput(e) {
  svgWrapper.innerHTML = regularPolygon(this.sides.value);
}

form.addEventListener('input', handleInput);
