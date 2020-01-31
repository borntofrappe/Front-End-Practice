const buildMaze = (columns = 8, rows = 8) => {
  // array describing the grid through columns and rows
  // gates describes the borders for each cell
  const grid = Array(rows)
    .fill()
    .map((r, row) =>
      Array(columns)
        .fill()
        .map((c, column) => ({
          column,
          row,
          // the idea is to remove the borders by removing the matching use element
          gates: {
            north: true,
            east: true,
            south: true,
            west: true,
          },
        }))
    );

  // binary tree algorithm: for each cell remove the gate to the east or south
  // ! avoid creating any exit
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

  // flatten the array to have the cells in a 1D array
  // the position is not based on the index in the array, but on the column and row properties
  return grid.reduce((acc, curr) => [...acc, ...curr], []);
}

const drawMaze = () => {
  const {innerWidth} = window;
  const size = 15;
  const columns = Math.floor(innerWidth / size);
  const rows = 15;
  const canvas = document.querySelector('canvas');
  canvas.width = size * columns;
  canvas.height = size * rows;

  const lineWidth = 2;
  const context = canvas.getContext("2d");
  const maze = buildMaze(columns, rows);
  maze.forEach(({ column, row, gates}) => {
    context.save();
    context.translate(size * column, size * row);
    context.lineWidth = lineWidth;
    context.lineCap = 'square';
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
window.addEventListener('resize', () => drawMaze())