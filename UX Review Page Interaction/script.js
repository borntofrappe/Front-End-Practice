/* globals anime */

// object describing the possible states, with the combined gradient and matching path for the mouth
const states = [
  {
    value: 'good',
    gradient: ['#42F7CE', '#38EE95'],
    path: 'M 30 67 q 20 15 40 0 a 2 2 0 0 0 -2 -4 q -20 15 -36 0 a 2 2 0 0 0 -2 4',
  },
  {
    value: 'okay',
    gradient: ['#11E7FF', '#39BDFF'],
    path: 'M 30 72 q 20 0 40 0 a 2 2 0 0 0 0 -4 q -20 0 -40 0 a 2 2 0 0 0 0 4',
  },
  {
    value: 'ugh',
    gradient: ['#FFD67B', '#F39380'],
    path: 'M 30 74 q 10 -10 40 -10 a 2 2 0 0 0 0 -4 q -30 -0 -42 10 a 2 2 0 0 0 2 4',
  },
  {
    value: 'bad',
    gradient: ['#F98087', '#FF1248'],
    path: 'M 30 73 q 20 -15 40 0 a 2 2 0 0 0 2 -4 q -20 -15 -44 0 a 2 2 0 0 0 2 4',
  },
];
// state indicating the possible value
let state = 0;
// rotation to have the wheel rotate according to the chosen direction
let rotation = 0;

const button = document.querySelector('button');
const phone = document.querySelector('.phone');


// function called when a click is registered on the phone
function handleClick(e) {
  // retrieve the coordinates and dimensions of the phone of the phone
  const { top, left } = phone.getBoundingClientRect();
  const { width, height } = phone.getBoundingClientRect();
  // retrieve the coordinates of the clickk event
  const { pageX: x, pageY: y } = e;
  // establish the threshold to animate the phone only when the click is registered in the bottom half of the screen
  const xThreshold = left + width / 2;
  const yThreshold = top + height / 2;

  // pre-emptively terminate the function when the click is registered on the top half of the container
  if (y < yThreshold) {
    return false;
  }

  // update the state to identify a valid entry in the states array
  state = x > xThreshold ? state + 1 : state - 1;
  if(state >= states.length) {
    state = 0;
  }
  if(state< 0) {
    state = states.length - 1;
  }
  // update the rotation incrementing / decrementing the value on the basis of the horizontal threshold
  rotation = x > xThreshold ? rotation + 1 : rotation - 1;

  // extract the information from the selected state (using the index in the [0, 4] range)
  const { value, gradient, path } = states[state];

  // update the phone
  // update the svg making up the face
  const feedbackFace = phone.querySelector('svg#feedback-face');
  // gradient for the circle and path elements
  const face = feedbackFace.querySelector('g.face');
  face.setAttribute('stroke', `url(#gradient-${value})`);
  face.setAttribute('fill', `url(#gradient-${value})`);

  // d attribute for the path element
  const mouth = feedbackFace.querySelector('path.mouth');
  anime({
    targets: mouth,
    d: path,
    easing: 'easeOutQuad',
    duration: 500,
  });

  // update the heading with the matching value
  const heading = phone.querySelector('h1');
  heading.textContent = value;
  // use the darker between the two colors of the gradient
  heading.style.color = gradient[1];

  // update the svg making up the color wheel
  const feedbackWheel = phone.querySelector('svg#feedback-wheel');
  const quadrants = feedbackWheel.querySelector('g#quadrants');
  // rotate the quadrants starting from 90 degrees
  anime({
    targets: quadrants,
    transform: `translate(50 50) rotate(${45 - 90 * rotation})`,
    easing: 'easeOutQuad',
    duration: 500,
  });

  // rotate the text labels in unison
  const text = feedbackWheel.querySelector('g#text');
  anime({
    targets: text,
    transform: `translate(50 50) rotate(${-90 * rotation})`,
    easing: 'easeOutQuad',
    duration: 500,
  });

  // update button with the linear gradient
  button.style.background = `linear-gradient(to right, ${gradient.join(',')})`;
}

phone.addEventListener('click', handleClick);


// when pressing the button stop propagation to avoid registering the event on the .phone container
button.addEventListener('click', (e) => {
  e.stopPropagation();
});


// added bonus: retrieve the current time from the OS and include the minutes:hours in the span element of the nav
const now = new Date();
const span = document.querySelector('nav span');
span.textContent = `${now.getHours()}:${now.getMinutes()}`;
