const size = 5;
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
