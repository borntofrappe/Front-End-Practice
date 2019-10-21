// variables describing the structure of the grid
// number of cells
const columns = 5;
const rows = 5;

// size of the cell, horizontal and vertical
const h = 100;
const v = 100;

// size of the stroke
const stroke = 5;

// array describing the grid through columns and rows
// gates describes the borders for the cells
const grid = Array(columns)
  .fill()
  .map((c, column) =>
    Array(rows)
      .fill()
      .map((r, row) => ({
        column,
        row,
        // the idea is to remove the borders by removing the matching use element
        gates: {
          north: true,
          east: true,
          south: true,
          west: true,
        },
        // ! whether or not a cell has been visited can be very well described by the lack of at least a gate
        isVisited: false,
      }))
  );

// flatten the array to have the cells in a 1D array
// the position is not based on the index in the array, but on the column and row properties
const flat = grid.reduce((acc, curr) => [...acc, ...curr], []);

// include an svg element with one group for each cell
// in this group include one <use> element per gate, identifying the border
// ! the viewBox is incremented by the stroke to avoid cropping (this is paired with the translation of the first group element)
const width = columns * h;
const height = rows * v;

// function returning a random point considering two maximum values
function randomPoint(xMax, yMax) {
  const rX = Math.floor(Math.random() * xMax);
  const rY = Math.floor(Math.random() * yMax);
  return [rX, rY];
}
let [mX, mY] = randomPoint(columns, rows);

// svg describing the full grid
const maze = `
    <svg
        viewBox="0 0 ${width + stroke} ${height + stroke}"
        width=${width}
        height=${height}>
        <defs>
            <path id="north" d="M 0 0 h ${h}"></path>
            <path id="east" d="M ${h} 0 v ${v}"></path>
            <path id="south" d="M 0 ${v} h ${h}"></path>
            <path id="west" d="M 0 0 v ${v}"></path>
            <rect id="square" x="0" y="0" width="${h - stroke}" height="${v -
  stroke}"></rect>
        </defs>
        <g
          stroke="currentColor"
          stroke-width=${stroke}
          stroke-linejoin="square"
          stroke-linecap="square"
          fill="none">
          <g id="cells" transform="translate(${stroke / 2} ${stroke / 2})">
              ${flat
                .map(
                  ({ column, row, gates }) => `
              <g transform="translate(${column * h} ${row * v})">
                  ${Object.entries(gates)
                    .filter(([, isGated]) => isGated)
                    .map(([href]) => `<use href="#${href}"></use>`)
                    .join('')}
              </g>
              `
                )
                .join('')}
          </g>

          <g class="mark" transform="translate(${mX * h} ${mY * v})">
              <svg viewBox="0 0 100 100" width=${h} height=${v}>
                  <use href="#chicken"></use>
              </svg>
          </g>
        </g>
    </sgv>
`;
document.querySelector('.maze').innerHTML += maze;

// aldous-broder algorithm: visit a cell and pick a neighbor at random
// if not visited, link the two, and repeat until every cell has been visited
// ! draw the maze only when every cell has been visited
// ! ideally the structure would react to a change in the **flat** array, but the structure is modified directly targeting the necessary elements
const oppositeGates = [['north', 'south'], ['east', 'west']];

let timeout = 0;

// function moving the mark in the grid
function moveMark([x, y]) {
  const mark = document.querySelector('svg .mark');
  mark.setAttribute('transform', `translate(${x * h} ${y * v})`);
}

// function updating the #cells container with the one-dimensional array
function updateCells() {
  const cells = document.querySelector('#cells');
  cells.innerHTML = `
    ${flat
      .map(
        ({ column, row, gates }) => `
    <g id="cell-${column}-${row}" transform="translate(${column * h} ${row *
          v})">
        ${Object.entries(gates)
          .filter(([, isGated]) => isGated)
          .map(([href]) => `<use class="${href}" href="#${href}"></use>`)
          .join('')}
    </g>
    `
      )
      .join('')}
  `;
}

// function called recursively to clear one cell after another
function randomWalk(vX, vY) {
  const cell = flat.find(({ column, row }) => column === vX && row === vY);
  // visit the cell
  if (!cell.isVisited) {
    cell.isVisited = true;
  }
  // find the neighbors
  // ! be sure to filter out the objects outside of the maze
  const neighbors = [
    {
      gate: 'north',
      coordinates: [vX, vY - 1],
    },
    {
      gate: 'east',
      coordinates: [vX + 1, vY],
    },
    {
      gate: 'south',
      coordinates: [vX, vY + 1],
    },
    {
      gate: 'west',
      coordinates: [vX - 1, vY],
    },
  ].filter(({ coordinates }) => {
    const [x, y] = coordinates;
    return x >= 0 && x <= columns - 1 && y >= 0 && y <= rows - 1;
  });

  // pick a neighbor at random
  const neighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
  // the gate describes the direction picked up by the cell
  const { gate } = neighbor;
  const [nX, nY] = neighbor.coordinates;

  // find the neighboring cell
  const neighboringCell = flat.find(
    ({ column, row }) => column === nX && row === nY
  );

  // update the dom moving the mark and changing the cells displayed in the #cells group
  moveMark([nX, nY]);

  // link the two only if the neighboring cell hasn't already being visited
  if (!neighboringCell.isVisited) {
    // remove the gates facing each other
    cell.gates[gate] = false;

    const direction = oppositeGates.find(opposites => opposites.includes(gate));
    const oppositeGate = direction.find(opposite => opposite !== gate);
    neighboringCell.gates[oppositeGate] = false;

    updateCells();
  }

  // until every cell has been visited recursively call the function with the neighboring cell
  const areVisited = flat.every(({ isVisited }) => isVisited);
  if (!areVisited) {
    timeout = setTimeout(() => {
      clearTimeout(timeout);
      randomWalk(nX, nY);
    }, 500);
  }
}

// function resetting the maze
function resetMaze() {
  // clear the existing timeout
  clearTimeout(timeout);

  // reset the structure of the grid
  flat.forEach(cell => {
    cell.isVisited = false;
    const gates = ['north', 'east', 'south', 'west'];
    gates.forEach(gate => (cell.gates[gate] = true));
  });

  updateCells();
}

// target the button to build/reset the maze
let isBuilding = false;
const button = document.querySelector('button');
function handleClick() {
  isBuilding = !isBuilding;
  if (isBuilding) {
    // kickstart the random walk from the chosen point
    randomWalk(mX, mY);
    this.textContent = 'Reset';
  } else {
    // update the starting point
    [mX, mY] = randomPoint(columns, rows);
    moveMark([mX, mY]);
    // reset the maze
    resetMaze();
    this.textContent = 'Build';
  }
}
button.addEventListener('click', handleClick);
