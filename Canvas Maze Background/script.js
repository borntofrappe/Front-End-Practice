// function creating an array of cells, each with a gates property describing which side of the cell to actually draw
const buildMaze = (columns = 8, rows = 8) => {
  const grid = Array(rows)
    .fill()
    .map((r, row) =>
      Array(columns)
        .fill()
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

  // binary tree algorithm: for each cell remove the gate to the east **or** south
  grid.forEach((r, rIndex) => {
    r.forEach((cell, cIndex) => {
      const isSouth = Math.random() > 0.5;
      if (isSouth) {
        const neighborSouth = rIndex < rows - 1;
        if (neighborSouth) {
          cell.gates.south = false;
          grid[rIndex + 1][cIndex].gates.north = false;
        } else {
          const neighborEast = cIndex < columns - 1;
          if (neighborEast) {
            cell.gates.east = false;
            grid[rIndex][cIndex + 1].gates.west = false;
          }
        }
      } else {
        const neighborEast = cIndex < columns - 1;
        if (neighborEast) {
          cell.gates.east = false;
          grid[rIndex][cIndex + 1].gates.west = false;
        } else {
          const neighborSouth = rIndex < rows - 1;
          if (neighborSouth) {
            cell.gates.south = false;
            grid[rIndex + 1][cIndex].gates.north = false;
          }
        }
      }
    });
  });

  // return the maze in a 1D array
  // the position is not based on the index in the array, but on the column and row properties
  return grid.reduce((acc, curr) => [...acc, ...curr], []);
}

const canvas = document.querySelector('canvas');
canvas.style.position = 'absolute';

// function drawing the maze in the background
const drawMaze = () => {
  // stretch the canvas to cover the width and height of the window
  const {innerWidth: width, innerHeight: height} = window;
  canvas.width = width;
  canvas.height = height;

  // for the size of the cells, the idea is to have 20 rows or columns
  // whichever is smaller
  const cells = 20;
  const size = Math.floor(Math.min(width, height) / cells);

  const columns = Math.floor(width / size) + 1;
  const rows = Math.floor(height / size) + 1;

  // move the canvas to crop out the outside borders
  canvas.style.left = `${-cells / 2}px`;
  canvas.style.top = `${-cells / 2}px`;

  // update the size of the stroke to avoid covering too much of the viewport
  const lineWidth = size > 15  ? 10: 4;

  const context = canvas.getContext("2d");
  const maze = buildMaze(columns, rows);
  maze.forEach(({ column, row, gates}) => {
    context.save();
    // translate according to the width/height property
    context.translate(size * column, size * row);

    context.lineWidth = lineWidth;
    context.lineCap = 'square';
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

drawMaze();

// redraw the maze as the window is resized or clicked
window.addEventListener('resize', () => drawMaze())
window.addEventListener('click', () => drawMaze())