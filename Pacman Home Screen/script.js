// target all the button elements
const buttons = document.querySelectorAll('button');

// function called to animate the selected button
// add the class exclusively to the input button
function animateButton(button) {
  buttons.forEach(button => button.classList.remove('selection'));
  button.classList.add('selection');
}

// function called when the mouseenter event is registered
function handleMouseEnter() {
  // call the animate function passing the specific button as argument
  animateButton(this);
}

// for each button
buttons.forEach((button) => {
  // split the text of the element
  Splitting({
    target: button,
  });

  // on hover call the selected function
  button.addEventListener('mouseenter', handleMouseEnter);

  // as to animate the characters in sequence, add a different animation-delay property to each successive character
  const chars = button.querySelectorAll('span.char');
  const { lenght } = chars;
  chars.forEach((char, index) => {
    char.style.animationDelay = `${(length - index) * 0.1}s`;
  });
});

// array describing the key codes
const keyCodes = [
  {
    code: 37,
    value: 'left',
  },
  {
    code: 38,
    value: 'top',
  },
  {
    code: 39,
    value: 'right',
  },
  {
    code: 40,
    value: 'down',
  },
];

// function called when a keydown event is registered on the window
function handleKeyDown(e) {
  // retrieve the key code
  const { keyCode } = e;
  // find a match in the keyCodes array
  const match = keyCodes.find(({ code }) => keyCode === code);
  // if a match exist call the animate function passing the matching button as argument
  if (match) {
    animateButton(document.querySelector(`.${match.value}`));
  }
}
window.addEventListener('keydown', handleKeyDown);
