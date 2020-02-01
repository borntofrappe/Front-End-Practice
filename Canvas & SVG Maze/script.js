const binaryTree = (columns, rows) => {
  // build a an array of objects for the individual cells
  const grid = Array(rows)
    .fill()
    .map((r, row) =>
      Array(columns)
        .fill()
        // each cell is given a column and width property, as well as a _gates_ field
        // gates dictates which side of the cell to actually draw
        .map((c, column) => ({
          column,
          row,
          gates: {
            north: true,
            east: true,
            south: true,
            west: true,
          },
        }))
    );

  // flatten the grid in a 1D array
  const maze = grid.reduce((acc, curr) => [...acc, ...curr], []);

  // binary tree algorithm
// for each cell remove the gate to the east **or** south
  maze.forEach(cell => {
      const isSouth = Math.random() > 0.5;
      if (isSouth) {
        const neighborSouth = maze.find(({column, row}) => column === cell.column && row === cell.row + 1);
        if (neighborSouth) {
          cell.gates.south = false;
          neighborSouth.gates.north = false;
        } else {
          const neighborEast = maze.find(({column, row}) => column === cell.column + 1 && row === cell.row);
          if (neighborEast) {
            cell.gates.east = false;
            neighborEast.gates.west = false;
          }
        }
      } else {
        const neighborEast = maze.find(({column, row}) => column === cell.column + 1 && row === cell.row);
        if (neighborEast) {
          cell.gates.east = false;
          neighborEast.gates.west = false;
        } else {
          const neighborSouth = maze.find(({column, row}) => column === cell.column && row === cell.row + 1);
          if (neighborSouth) {
            cell.gates.south = false;
            neighborSouth.gates.north = false;
          }
        }
      }
    });
  return maze;
}

// CANVAS
// identify the canvas and absolute position the element with respect to the body
const canvas = document.querySelector('canvas');
canvas.style.position = 'absolute';

// function drawing the maze in the canvas element
const drawCanvas = () => {
  // SETUP
  // stretch the canvas to cover the width and height of the window
  const {innerWidth: width, innerHeight: height} = window;
  canvas.width = width;
  canvas.height = height;

  // for the size of the cells, the idea is to have 20 rows or columns
  // whichever is smaller
  const cells = 20;
  const size = Math.floor(Math.min(width, height) / cells);

  // add one more column and row and slightly offset the element to crop out the contours
  const columns = Math.floor(width / size) + 1;
  const rows = Math.floor(height / size) + 1;

  // build a maze using the binary tree algorithm
  const maze = binaryTree(columns, rows);

  // remove the top and left contours to have a more symmetric look
  maze.forEach(cell => {
    if(cell.column === 0) {
      cell.gates.west = 0;
    }
    if(cell.row === 0) {
      cell.gates.north = 0;
    }
  })

  // ACTUAL DRAWING
  const context = canvas.getContext("2d");

  // update the size of the stroke to avoid covering too much of the viewport
  const lineWidth = size > 15  ? 8: 4;

  // draw each cell with a series of lines
  maze.forEach(({ column, row, gates}) => {
    context.save();
    // translate according to the width/height property
    context.translate(size * column, size * row);

    context.lineWidth = lineWidth;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.strokeStyle = 'hsl(215, 85%, 15%)'

    // draw the necessary line(s)
    context.beginPath();
    if(gates.north) {
      context.moveTo(0, 0);
      context.lineTo(size, 0);
    }
    if(gates.east) {
      context.moveTo(size, 0);
      context.lineTo(size, size);
    }
    if(gates.south) {
      context.moveTo(0, size);
      context.lineTo(size, size);
    }
    if(gates.west) {
      context.moveTo(0, 0);
      context.lineTo(0, size);
    }
    context.closePath();
    context.stroke();
    context.restore()
  })
}



// SVG
const svg = document.querySelector('svg');
// function drawing a maze in the SVG element
function drawSVG() {
  // SETUP
  // modify the viewBox according to a couple of arbitrary values
  const columns = 7;
  const rows = 7;

  const maze = binaryTree(columns, rows);

  const width = 100;
  const height = 100;

  const h = width / columns;
  const v = height / rows;
  const strokeWidth = 4;

  // ACTUAL DRAWING
  // for each cell draw a path element for the corresponding side
  svg.setAttribute('viewBox', `${-strokeWidth / 2} ${-strokeWidth / 2} ${width + strokeWidth} ${height + strokeWidth}`)
  svg.innerHTML = `
    <g fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
      <path d="M 0 0 h ${width} v ${height} h ${-width}z" />

      ${maze.map(({column, row, gates}) => `
        <g transform="translate(${column * h} ${row * v})">
          ${gates.north ? `<path d="M 0 0 h ${h}" />` : ''}
          ${gates.west ? `<path d="M ${h} 0 v ${v}" />` : ''}
          ${gates.south ? `<path d="M 0 ${v} h ${h}" />` : ''}
          ${gates.east ? `<path d="M 0 0 v ${v}" />` : ''}
        </g>
      `).join("")}
    </g>
  `;
}

// draw the mazes immediately and following a resize event
drawCanvas();
drawSVG();
window.addEventListener('resize', () => {
  drawCanvas();
  drawSVG();
});