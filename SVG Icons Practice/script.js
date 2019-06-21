// silly function creating a series of rectangle elements, positioned in a grid
// the idea is to fabricate a background with rectangles of a different color
const rectangleBackground = (columns, rows, color) => {
  // include in the array one rectangle for each cell
  const rectangles = [];
  // translate the shape according to the column and row
  // color the shape according to the color, modified with each passing column and row
  for (let column = 0; column < columns; column += 1) {
    for (let row = 0; row < rows; row += 1) {
      const { h, s, l } = color;
      const fill = `hsl(${h + (5 * column) + (5 + row)}, ${s + (column + row)}%, ${l + (column + row) * (0.5)}%)`;
      // (100 / columns), (100 / rows) given the 100 value used in the viewBox
      rectangles.push(`
      <g transform="translate(${(100 / columns) * column} ${(100 / rows) * row})">
        <rect
            x="0"
            y="0"
            width="25"
            height="25"
            fill="${fill}">
        </rect>
      </g>
      `);
    }
  }
  return rectangles.join('');
};

// for the background of the body, include an svg spanning the entirety of the viewport
const background = {
  columns: 10,
  rows: 10,
  color: {
    h: 261,
    s: 49,
    l: 19,
  },
};

document.querySelector('body').innerHTML += `
  <svg
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    style="position: absolute; top: 0; left: 0; width: 100vw; height: 100vh; z-index: -15;">
  ${rectangleBackground(background.columns, background.rows, background.color)}
  </svg>
`;


// target the symbol elements in the main svg
const symbols = document.querySelectorAll('svg#icons symbol');
// create an array describing the id of the symbol elements
const ids = [...symbols].map(symbol => symbol.getAttribute('id'));

// target all button elements
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  // assess if the data-icon attribute matches the id of one of the symbols
  const dataIcon = button.getAttribute('data-icon');
  if (ids.find(id => id === dataIcon)) {
    // position relative to absolute position the svg used as background
    button.style.position = 'relative';
    // from the color attribute retrieve the hsl values
    const dataColor = button.getAttribute('data-color');
    const colorRegex = /hsl\((\d+), (\d+)%, (\d+)%\)/;
    const color = dataColor.match(colorRegex);
    // ! it is necessary to coerce the string values to integers
    const hsl = color.slice(1, 4).map(colorVal => parseInt(colorVal, 10));
    const [h, s, l] = hsl;

    // replace the content of the button elements by wrapping the text in a span and including the matching svg icon
    // ! in addition and for a background add another svg fabricating the background with the function above
    const { textContent } = button;
    button.innerHTML = `
    <span>${textContent}</span>
    <svg viewBox="0 0 100 100" width="50" height="50">
      <use href="#${dataIcon}"></use>
    </svg>
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -5;">
      ${rectangleBackground(5, 5, { h, s, l })}
    </svg>

    `;
  }
});
