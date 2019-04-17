// BEWARE: UNFINISHED PROJECT
// I actyally need to include the main feature behind the application
// drawing with P5.js
// coming soon

// target the button to toggle the sidebar
const buttonToggle = document.querySelector('button.toggle');


// target the canvas element
const canvas = document.querySelector('canvas');
// stretch the canvas to occupy the width and height of the window
const { innerWidth, innerHeight } = window;
canvas.width = innerWidth;
canvas.height = innerHeight;

// find the height of the cursor
// this to refer to the bottom left corner of the SVG instead of the default top left
const cursor = document.querySelector('#cursor');
const { height: cursorHeight } = cursor.getBoundingClientRect();

// on click toggle the class of .shown applied on the sidebar
buttonToggle.addEventListener('click', () => buttonToggle.parentElement.classList.toggle('shown'));

// when hovering on the canvas
// update the position of the SVG cursor to match the pointer's coordinates
canvas.addEventListener('mousemove', (e) => {
  const { pageX, pageY } = e;
  cursor.style.left = `${pageX}px`;
  cursor.style.top = `${pageY - cursorHeight}px`;
});
