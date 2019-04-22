// node in which to inject the button elements
const body = document.querySelector('body');

// varieties describing the buttons and their classes
const varieties = [
  'primary',
  'secondary',
  'tertiary',
  'disabled',
];

// functions returning random values
// to have a function immediately give an integer for the hue and integers for the hue and lightness
const randomUpTo = upTo => Math.floor(Math.random() * upTo);
const randomHue = () => randomUpTo(360);
// for the random percentage include an additional argument to specify whether to give a full percentage or not
// this to avoid excessive lightness values
const randomPercentage = ({ full = true } = {}) => randomUpTo(full ? 100 : 75);

// function returning a div container of button elements, to be injected in the DOM
// taking as argument a hue, saturation and lightness values, by default set to random values
const makeButtons = ({ h = randomHue(), s = randomPercentage(), l = randomPercentage({ full: false }) } = {}) => {
  const theme = `hsl(${h}, ${s}%, ${l}%)`;

  // returning a div with the custom property according to the theme value
  // including the buttons as per the varieties array
  // ! specifying an animation which is removed when complete, to have only new buttons animated
  // ! injecting a new div of buttons on click, through the same function
  // ! with a disabled attribute for the matching variety
  return `
    <div
      style="--theme: ${theme}"
      class="buttons">
      ${varieties.map((variety, index) => `
        <button
          class=${variety}
          style="animation: popIn 0.3s ${index * 0.05}s cubic-bezier(0.15, 0.99, 0.64, 1.4) both;"
          onanimationend="this.style.animation =  'none';"
          onclick="body.innerHTML = makeButtons() + body.innerHTML;"
          ${variety === 'disabled' && 'disabled'}>
          More buttons
        </button>
      `).join('')}
    </div>
  `;
};

// by default, specifying a pleasing hsl combination and inject a div of buttons with said value
const hsl = {
  h: 209,
  s: 61,
  l: 16,
};
body.innerHTML += makeButtons(hsl);
