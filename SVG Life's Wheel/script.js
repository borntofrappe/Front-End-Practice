/* globals Splitting */
// split the heading to include one tile for each letter
const target = document.querySelector('h1');
target.setAttribute('aria-label', target.textContent);

Splitting({ target }).forEach(({ words, chars }) => {
  words.forEach(word => {
    word.setAttribute('aria-hidden', 'true');
  });
  chars.forEach((char, index, { length }) => {
    char.style.padding = '0.25rem 1rem';
    char.style.background = `hsl(${280 - (295 / length) * index}, 70%, 55%)`;
    /* for each character add a border with opposing colors for the top-left and bottom-right sides */
    char.style.border = '5px inset';
    char.style.borderColor =
      'hsla(0, 0%, 100%, 0.25) hsla(0, 0%, 0%, 0.15) hsla(0, 0%, 0%, 0.15) hsla(0, 0%, 100%, 0.25)';
  });
});

// the idea is to add a rotation value matching one of the slices, included at intervals of 36 degrees
// a bit of a hard-coded solution with plenty of magic numbers
let rotation = 0;
let duration = 7;
const randomBetween = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const button = document.querySelector('button');

function spinWheel() {
  // avoid running the function while the transition is ongoing
  if (!button.classList.contains('not-allowed')) {
    button.classList.add('not-allowed');

    // add a transition to the #wheel element
    const wheel = document.querySelector('#wheel');
    wheel.style.transition = `transform ${duration}s cubic-bezier(.48,0,.42,1)`;

    // include a rotation to make a few turns and end up at a multiple of 36°
    rotation += randomBetween(2, 5) * 360 + randomBetween(0, 10) * 36;
    // change the rotation
    wheel.style.transform = `rotate(${rotation}deg)`;

    // as the transition completes, reset its value to have the rotation always occur counter-clockwise
    const timeout = setTimeout(() => {
      rotation %= 360;
      // ! remove the transition to have the change occur immediately
      wheel.style.transition = 'none';
      wheel.style.transform = `rotate(${rotation - 360}deg)`;

      // update the color of the inner circle through the currentColor property
      button.style.color = `hsl(${rotation}, 90%, 60%)`;
      // update the duration to add a bit more variety
      duration = randomBetween(5, 12);
      clearTimeout(timeout);
      button.classList.remove('not-allowed');
    }, duration * 1000);
  }
}

button.addEventListener('click', spinWheel);
