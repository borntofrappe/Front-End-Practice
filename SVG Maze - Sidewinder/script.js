// variable describing the duration of the building process
const duration = 10;
// variables describing the grid
const columns = 8;
const rows = 8;
// variables describing the cells
const h = 100;
const v = 100;

// the stroke determines how much the grid is nested in the svg, to avoid cropping
const stroke = 5;

// the width and height scale according to the chosen cells
const width = h * columns;
const height = v * rows;

/* target the prescribed node and add the svg element
- viewBox incremented by the stroke. In conjunction with the translation of the first group element, it allows to avoid cropping
- defining three different versions for the cell
  _
  |   by default
  _
      for the cell opening to the right

  |  for the cell opening upwards

- defining a graphic to highlight the current cell

- including a grid of cells following a path describing the default contours (the left and bottom edges)

- positioning the mark at the bottom and flipping its coordinate system, so to have greater y value move the mark upwards
*/
const maze = document.querySelector('.maze');
maze.innerHTML = `
    <svg
        viewBox="0 0 ${width + stroke} ${height + stroke}"
        width=${width}
        height=${height}
        fill="none"
        stroke="currentColor"
        stroke-width=${stroke}
        stroke-linecap="square">
        <defs>
            <path id="cell" d="M 0 0 h ${h} v ${v}"></path>
            <path id="cell-up" d="M ${h} 0 v ${v}"></path>
            <path id="cell-right" d="M 0 0 h ${h}"></path>
        </defs>
        <g transform="translate(${stroke / 2} ${stroke / 2})">
            <path d="M 0 0 v ${height} h ${width}"></path>
            <g class="grid">
                <g class="row">
                ${Array(rows)
                  .fill()
                  .map(
                    // to start the algorithm from the bottom, position the rows in reverse order
                    (row, rowIndex) => `
                    <g transform="translate(0 ${(rows - 1 - rowIndex) * v})">
                        ${Array(columns)
                          .fill()
                          .map(
                            (column, columnIndex) => `
                        <g transform="translate(${columnIndex * h} 0)">
                            <use href="#cell" class="cell"></use>
                        </g>
                        `
                          ).join('')}
                    </g>`
                  ).join('')}
                </g>
                <g transform="translate(0 ${height - v}) scale(1 -1)">
                  <g class="mark">
                    <g transform="scale(1 -1)">
                        <svg viewBox="0 0 100 100" width=${h} height=${v}>
                            <use href="#chicken"></use>
                        </svg>
                    </g>
                  </g>
                </g>
            </g>
        </g>
    </svg>
`;

// to build/reset the maze, set up a boolean to toggle the button's functionality
const button = document.querySelector('button');
let isSolving = false;
let intervalID;

// utility function returning a random item from an array
const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];

// reset the maze to its original design
function resetMaze() {
  // ! stop the ongoing interval
  clearInterval(intervalID);

  // mark at the origin
  const mark = document.querySelector('g.mark');
  mark.setAttribute('transform', 'translate(0 0)');

  // default cells
  const cells = document.querySelectorAll('use.cell');
  cells.forEach(cell => cell.setAttribute('href', '#cell'));
}

// "build" the maze going through the cells one at a time and updating the design following the algorithms choices
function buildMaze() {
  const cells = document.querySelectorAll('use.cell');
  const { length } = cells;
  const mark = document.querySelector('g.mark');

  let x = 0;
  let y = 0;

  // variable referring to the index of the cell
  let i = 0;

  // array describing the visited cells
  let visited = [];

  // at an interval
  intervalID = setInterval(() => {
    // BUILDING THE MAZE
    // pick a gate north or east
    const isNorth = Math.random() > 0.5;
    // ! only if the cell is not the last one
    if (i !== length - 1) {
      // change the href attribute for the respective cell according to the random value
      if (isNorth) {
        // ! if the cell is on the first row clear the cell rightwards (visually the first, in the node list the last)
        if (i >= length - columns) {
          cells[i].setAttribute('href', '#cell-right');
          // add the cell to the visited array
          // ! this is unnecessary as the first row will never need to pick a gate north
          visited = [...visited, i];
        } else {
          // ! pick a cell at random from the visited array
          // due to the structure of the cells, it is necessary to differentiate the used element if the selected cell is the current one
          const index = randomItem(visited) || i;
          if (index === i) {
            // current one: clear upwards
            cells[index].setAttribute('href', '#cell-up');
          } else {
            // previous ones: remove all borders
            // clearing upwards only would restore the border to the right
            cells[index].setAttribute('href', '#cell-none');
          }
          // reset the array
          visited = [];
        }
      } else {
        // if the cell is on the last column clear the cell upwards
        if (i > 0 && (i + 1) % columns === 0) {
          cells[i].setAttribute('href', '#cell-up');
          // reset the array
          visited = [];
        } else {
          cells[i].setAttribute('href', '#cell-right');
          // add the cell to the visited array
          visited = [...visited, i];
        }
      }
    }

    // MOVE THE MARK
    mark.setAttribute('transform', `translate(${x} ${y})`);
    // increase the x coordinate
    x += h;

    // when reaching the end of the row, reset the x coordinate and update the y value
    // ! technically the variables are updated for the last cell as well, but the use element is not translated
    if (i > 0 && i !== length - 1 && (i + 1) % columns === 0) {
      x = 0;
      y += v;
    }

    // increment the counter variable to target the following cell
    i += 1;
    // clear the interval when the counter reaches the end of the grid
    if (i >= length) {
      clearInterval(intervalID);
    }
  }, (duration * 1000) / (columns * rows));
}

// switch the boolean and call the functions to update the grid and mark
function handleClick() {
  isSolving = !isSolving;
  if (isSolving) {
    buildMaze();
    this.textContent = 'Reset';
  } else {
    resetMaze();
    this.textContent = 'Build';
  }
}
button.addEventListener('click', handleClick);
