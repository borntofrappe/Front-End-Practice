const size = 10;
const grid = Array(size ** 2)
  .fill('')
  .map((value, i) => ({
    row: Math.floor(i / size),
    column: i % size,
    walls: {
      north: true,
      east: true,
      south: true,
      west: true,
    },
  }));


for (let i = 0; i < grid.length; i += 1) {
  const cell = grid[i];
  const { row, column } = cell;
  const neighbors = [];
  if (row > 0) {
    neighbors.push([row - 1, column]);
  }
  if (column < size - 1) {
    neighbors.push([row, column + 1]);
  }

  const index = Math.floor(Math.random() * neighbors.length);
  const neighbor = neighbors[index];

  if (neighbor) {
    const [r, c] = neighbor;
    if (r < row) {
      grid[i].walls.north = false;
      grid[r * size + c].walls.south = false;
    } else {
      grid[i].walls.east = false;
      grid[r * size + c].walls.west = false;
    }
  }
}


const width = 500;
const height = 500;
const h = width / size;
const v = height / size;
const strokeWidth = 5;

const markup = `
<svg viewBox="${-strokeWidth / 2} ${-strokeWidth / 2} ${width + strokeWidth} ${height + strokeWidth}" width="${width}" height="${height}">
  <defs>
    <path id="north" d="M 0 0 h ${h}" />
    <path id="east" d="M ${h} 0 v ${v}" />
    <path id="south" d="M 0 ${v} h ${h}" />
    <path id="west" d="M 0 0 v ${v}" />
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="square">
  ${grid.map(cell => {
    const {column, row, walls} = cell;
    const x = column * h;
    const y = row * v;
    const directions = Object
      .entries(walls)
      .reduce((acc, curr) => (curr[1] ? [...acc, curr[0]] : [...acc]), []);
    return `
      <g transform="translate(${x} ${y})">
        ${directions.map(direction => `<use href="#${direction}"/>`).join("")}
      </g>
    `
  }).join("")}
  </g>
</svg>
`;

document.body.innerHTML = markup;