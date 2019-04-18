// store the coordinates of the cursor to draw a line from these pair to a new set of coordinates
// this before updating both variables with the new values
let previousX;
let previousY;

// store the width and height of the window to possibly resize and scale the drawing according to the change
let previousWidth;
let previousHeight;

// use a boolean to translate the sidebar _and_ canvas to the left of the screen and back
let showSidebar = true;

// array in which to include the (x,y) coordinates for each line, its starting and ending values
let points = [];
// array in which to include an object with the array of points points _and_ the styles of each segment
let drawing = [];

// setup: function run on load
function setup() {
  // CANVAS
  // target the container in which to include the canvas element
  const app = document.querySelector('.app');
  // retrieve the width and height of the window, to have the canvas stretch to cover its surface
  const { innerWidth: width, innerHeight: height } = window;

  // create a canvas with the desired dimensions
  const canvas = createCanvas(width, height);
  // include the canvas in the specified container
  canvas.parent(app);


  // CURSOR
  const cursor = document.querySelector('#cursor');
  // when hovering on the canvas
  // update the position of the SVG cursor to match the pointer's coordinates
  // ! the element is found under the canvas field
  canvas.canvas.addEventListener('mousemove', (e) => {
    // find the height of the cursor
    // this to refer to the bottom left corner of the SVG instead of the default top left
    const { height: cursorHeight } = cursor.getBoundingClientRect();
    const { pageX, pageY } = e;
    cursor.style.left = `${pageX}px`;
    cursor.style.top = `${pageY - cursorHeight}px`;
  });


  // DRAWING CONTEXT & INPUT ELEMENTS
  // target the input elements
  const inputs = document.querySelectorAll('input');
  // add the values of the input element in an object structured as follows
  /*
      {
        id: value
      }

      using the id to differentiate the elements and later use the values where needed
    */
  const inputValues = {};
  inputs.forEach(({ id, value }) => {
    inputValues[id] = value;
  });


  // find the property-value pairs described in the inputValues object
  const values = Object.entries(inputValues);
  // apply the values to the matching properties in the drawing context
  values.forEach(([property, value]) => {
    drawingContext[property] = value;
  });

  // listen for an input event on the input elements
  // update the matching property-value pairs
  inputs.forEach(input => input.addEventListener('input', ({ target }) => {
    const { id: property, value } = target;
    inputValues[property] = value;
    drawingContext[property] = value;

    // update the color and size of the cursor to reflect the change
    cursor.style.color = inputValues.strokeStyle;
    cursor.style.width = inputValues.lineWidth * 9;
    cursor.style.height = inputValues.lineWidth * 9;
  }));


  // SIDEBAR
  // target the sidebar to consider its width
  const sidebar = app.querySelector('.app__sidebar');

  // target the button to toggle the sidebar
  const buttonToggle = sidebar.querySelector('button.toggle');

  // on click translate the sidebar _and_ the canvas depending on the boolean's value
  buttonToggle.addEventListener('click', () => {
    // toggle the boolean
    showSidebar = !showSidebar;
    // retrieve the width of the sidebar to translate the elements by said amount
    const { width: offset } = sidebar.getBoundingClientRect();
    if (showSidebar) {
      sidebar.style.transform = 'translateX(0px)';
      canvas.canvas.style.transform = 'translateX(0px)';
    } else {
      sidebar.style.transform = `translateX(${-offset}px)`;
      canvas.canvas.style.transform = `translateX(${-offset}px)`;
    }
  });

  // target the clear button
  const buttonClear = sidebar.querySelector('button.clear');
  // on click clear the canvas of any drawing
  buttonClear.addEventListener('click', () => {
    clear();
    // reset the drawing object to an empty array, to initialize a new round
    drawing = [];
  });

  // INITIAL DIMENSIONS
  // include the initial width and height of the window in the predisposed variables
  previousWidth = windowWidth;
  previousHeight = windowHeight;
}


// when resizing the window
function windowResized() {
  // resize the canvas according to the new width and height
  resizeCanvas(windowWidth, windowHeight);

  // compute the ratio between previous and current dimensions
  const ratioX = previousWidth / windowWidth;
  const ratioY = previousHeight / windowHeight;

  // draw the lines described in the drawings array
  // this because the resize function clears the canvas
  drawing.forEach((segment) => {
    // for each set specify the styles described in the appropriate properties
    drawingContext.strokeStyle = segment.strokeStyle;
    drawingContext.lineWidth = segment.lineWidth;

    // for each array of points draw a line from values to values
    // ! each set of points needs to be weighed considering the x and y ratio
    const points = segment.points.map(([x, y]) => [x / ratioX, y / ratioY]);

    // draw the line from (prevX, prevY) to (x, y), now weighed considering the ratios
    let prevX;
    let prevY;
    points.forEach(([x, y]) => {
      line(prevX, prevY, x, y);
      // update the coordinates to draw a continuous line
      [prevX, prevY] = [x, y];
    });

    // ! update the array in the segment object to re-use the weighed coordinates if need be
    // useful for more than one resize event
    segment.points = points;
  });

  // update the variables to match the current dimensions
  [previousWidth, previousHeight] = [windowWidth, windowHeight];
}

// draw: function run continuously to achieve the drawing feature
function draw() {
  // when the cursor is pressed draw a line to the new coordinates
  if (mouseIsPressed) {
    // if there is no change between the previous and current coordinates, pre-emptively stop the logic
    if (previousX === mouseX && previousY === mouseY) {
      return false;
    }
    // if the mouse coordinates refer to negative values (outside of the canvas element)
    // pre-emptively stop the logic
    if (mouseX < 0 || mouseY < 0) {
      return false;
    }

    // draw a line from the previous coordinates to the new values
    line(previousX, previousY, mouseX, mouseY);
    // update the coordinates to match the achieved point
    [previousX, previousY] = [mouseX, mouseY];
    // include the new coordinates in the points array
    points.push([mouseX, mouseY]);
  } else if (previousX) {
    // when the cursor is no longer pressed reset the previous coordinates
    // otherwise the line would be connected regardless of the cursor being pressed
    // ! if they are not already reset
    [previousX, previousY] = [undefined, undefined];

    // to preserve the stroke, retrieve the current options
    const { lineWidth } = drawingContext;
    const { strokeStyle } = drawingContext;
    // include the options alongside the array of points in the dedicated array
    drawing.push({
      lineWidth,
      strokeStyle,
      points,
    });
    // reset the value of the points array
    points = [];
  }
}
