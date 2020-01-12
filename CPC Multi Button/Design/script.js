const button = document.querySelector('button');
const delay = 2000;
let timeout;

// function removing or adding (after a delay) a class of active
function toggleActive() {
  if (button.classList.contains('active')) {
    button.classList.remove('active');
  } else {
    timeout = setTimeout(() => {
      button.classList.add('active');
      timeout = null;
    }, delay);
  }
}

// function removing the existing, if any, timeout
// this is made necessary in a situation where the press is removed before the timeout has run out
function removeActive() {
  if (timeout) {
    clearTimeout(timeout);
  }
}

// handle presses through the mouse cursor
// ! to replicate the spacebar, a few more lines of JS are necessary
button.addEventListener('mousedown', () => toggleActive());
button.addEventListener('mouseup', () => removeActive());

/* KEY events */
// trigger the active functions only following a press on the spacebar
const KEY_CODE = 32;
// use a boolean to avoid running the function repeatedly (keydown runs multiple times while the spacebar is being pressed)
let isKeydown = false;

// hitting spacebar for the first time, use the function to add/remove the class
button.addEventListener('keydown', ({keyCode}) => {
  if(keyCode === KEY_CODE && !isKeydown) {
    isKeydown = true;
    toggleActive();
  }
});
// when the spacebar is released, remove the existing, if any timeout
button.addEventListener('keyup', ({keyCode}) => {
  if(keyCode === KEY_CODE) {
    isKeydown = false;
    removeActive();
  }
});