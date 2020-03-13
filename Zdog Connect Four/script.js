const colors = [
  'hsl(43, 100%, 47%)',
  'hsl(342, 71%, 47%)',
];
// step 2: utility function returning true or false
const fiftyFifty = () => Math.random() > 0.5;

// step 1: identify canvas
const canvas = document.querySelector('canvas');
const { width, height } = canvas;

// step 2: build a grid of x rows and y columns with true/false values
const columns = 6;
const rows = 4;
let grid = Array(columns * rows).fill("").map(() => fiftyFifty());

// step 3: find if the grid contains an arbitrary number of contiguous values
const match = 4;
const matches = [];
for(let row = 0; row < rows; row += 1) {
  for(let column = 0; column < columns; column += 1) {
    const horizontal = grid.slice(row * rows + column, row * rows + column + match);
    const vertical = [grid[row * rows + column], grid[(row + 1) * rows + column], grid[(row + 2) * rows + column], grid[(row + 3) * rows + column]];
    console.log(vertical)
    if(horizontal.every(cell => cell === horizontal[0])) {
      console.log('match');
      matches.push(horizontal);
    }
  }
}

