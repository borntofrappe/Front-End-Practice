//  TOGGLE THEME
const themes = {
  dark: {
    color: '#d7dcf5',
    background: '#030822',
  },
  light: {
    color: '#030822',
    background: '#ffffff',
  },
};
// variable used to toggle between light and dark themes
let theme = 'light';

// target the prescribed button
const buttonToggle = document.querySelector('button.toggle');

/* function to toggle the theme
1. changing the color and background properties on the entire project
1. changing the background of the fixed buttons to match
1. changing the icon displayed in the toggling button
*/
function toggleTheme() {
  // hide the group element with the class matching the theme
  document.querySelector(`.theme--${theme}`).style.display = 'none';

  // switch the variable between dark and light
  theme = theme === 'dark' ? 'light' : 'dark';

  // retrieve the color and background properties
  const { color, background } = themes[theme];
  // apply the values to the body and to the background of the fixed buttons
  document.querySelector('body').style.color = color;
  document.querySelector('body').style.background = background;

  const buttonsFixed = document.querySelectorAll('div button');
  buttonsFixed.forEach(buttonFixed => buttonFixed.style.background = background);

  // reset the display property of the group element identified by the now updated variable
  document.querySelector(`.theme--${theme}`).style.display = 'initial';
}
// call the toggleTheme function when the button is clicked
buttonToggle.addEventListener('click', toggleTheme);


// FILLER TEXT
// add text in the input and textarea elements to show some default values
// instructions included in the textare element
const instructions = [
  'write the title of the recipe in the input element',
  'compose the recipe in the textarea element',
  'preview the UI of the recipe through the magnifying glass icon',
  'save the recipe in the recipes\' book through the file icon',
];
const { length } = instructions;
const input = document.querySelector('input');
input.value = 'How will this work:';

const textarea = document.querySelector('textarea');
textarea.value = instructions.map((instruction, index) => `${index + 1}. ${instruction}${(index < length - 1) ? '\n\n' : ''}`).join('');
