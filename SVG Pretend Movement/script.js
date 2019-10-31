const inputBend = document.querySelector('input#bend');
const inputSpeed = document.querySelector('input#speed');

// variables used in the function animating the svg element
let bend = parseInt(inputBend.value, 10);
let speed = parseInt(inputSpeed.value, 10);
let offset = 0;

// svg elements animated in the project
const road = document.querySelector('#road');
const line = document.querySelector('#line');

// use the length of the dash to reset the offset without a jump (technically twice the dash, to consider the dash together with the empty space)
const dash = line.getAttribute('stroke-dasharray');

// function animating the svg element with requestAnimationFrame
function animate() {
  // adjust the d attribute using the _bend_ value
  line.setAttribute('d', `M 500 800 q 0 -200 ${bend} -320`);
  road.setAttribute(
    'd',
    `M 150 815 q 100 -175 ${200 + bend} -350 h 300 q ${100 - bend} 175 ${200 -
      bend} 350 z`
  );

  // increase the offset for the stroke of the central path element using _speed_ as a multiplier
  line.setAttribute('stroke-dashoffset', offset);
  offset = (offset + speed) % (dash * 10);

  requestAnimationFrame(animate);
}

// following an input event on the input elements consider id attribute and call the appropriate function to modify the starting values
function updateBend() {
  bend = parseInt(this.value, 10);
}
inputBend.addEventListener('input', updateBend);

function updateSpeed() {
  speed = parseInt(this.value, 10);
}

inputSpeed.addEventListener('input', updateSpeed);

// trigger the animation for the screen
animate();
