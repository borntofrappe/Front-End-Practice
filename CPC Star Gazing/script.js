// target every button element and the svg to animate its viewBox
const buttons = document.querySelectorAll('button');
const svg = document.querySelector('svg.starry-sky');

// boundaries for the viewBox attribute
const limitX = 200;
const limitY = 200;
// array describing for each key code the movement associated to the viewBox
const movement = {
  38: [0, -50],
  39: [50, 0],
  40: [0, 50],
  37: [-50, 0],
};

// add columns and rows worth of stars, with different scales and translations
for (let column = -limitY; column <= limitX * 2; column += 20) {
  for (let row = -limitX; row <= limitY * 2; row += 20) {
    const opacity = Math.random();
    const translateX = 20 + row;
    const translateY = 20 + column;
    const scale = (Math.random() * 40) / 100;
    const star = `
      <use
        href="#star"
        opacity="${opacity}"
        transform="translate(${translateX} ${translateY}) scale(${scale})">
      </use>
    `;
    svg.querySelector('g#stars').innerHTML += star;
  }
}

// function to update and animate the viewBox
function updateViewBox(direction) {
  // retrieve the current values of the viewbox
  const viewBox = svg.getAttribute('viewBox');
  const regexViewBox = /(-?\d+) (-?\d+) (\d+) (\d+)/;
  const [, startingX, startingY, width, height] = viewBox.match(regexViewBox);

  // retrieve the x and y variations from the movement array
  const [dx, dy] = movement[direction];

  // update the x and y attribute of the viewBox clamping the values in the selected range
  let x = Number.parseInt(startingX, 10) + dx;
  x = x > 0 ? Math.min(x, limitX) : Math.max(x, -limitX);
  let y = Number.parseInt(startingY, 10) + dy;
  y = y > 0 ? Math.min(y, limitY) : Math.max(y, -limitY);

  // animate the viewbox to the new x and y values
  // when completing the animation re-attach the event listeners
  anime({
    targets: svg,
    viewBox: `${x} ${y} ${width} ${height}`,
    duration: 250,
    easing: 'linear',
    complete: () => {
      buttons.forEach(button => button.addEventListener('click', handleClick));
      window.addEventListener('keydown', handleKeyDown);
    },
  });
}

// function called after a click event
function handleClick() {
  // remove the event listener from the button and the window, to avoid overlapping animations
  buttons.forEach(button => button.removeEventListener('click', handleClick));
  window.removeEventListener('keydown', handleKeyDown);

  // retrieve the direction from the selected button
  const direction = this.getAttribute('data-direction');
  // call the update function to change the viewBox attribute
  updateViewBox(direction);
}
// listen for a click event on every button
buttons.forEach(button => button.addEventListener('click', handleClick));

// function called after a key is pressed
function handleKeyDown(e) {
  // retrieve the keycode and if a match exist in the array
  const { keyCode } = e;
  if (movement[keyCode]) {
    // remove the event listener from the button and window
    buttons.forEach(button => button.removeEventListener('click', handleClick));
    window.removeEventListener('keydown', handleKeyDown);
    // update the viewBox with the chosen direction
    updateViewBox(keyCode);
  }
}
// listen for the keydown event
window.addEventListener('keydown', handleKeyDown);
