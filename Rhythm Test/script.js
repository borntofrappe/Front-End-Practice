// colors used for the button and generally in the project
const colors = [
  '#fd364e',
  '#fc36e9',
  '#36dcfd',
];
// use a color at random
const currentColor = colors[Math.floor(Math.random() * colors.length)];


// svg icons included in the button
const play = `
<svg viewBox="0 0 100 100">
  <path d="M 30 15 l 60 37.5 l -60 37.5" fill="#ccc" />
  <path d="M 30 15 l 45 47.5 -45 27.5" fill="#fff" />
</svg>`;
const note = `
<svg viewBox="0 0 100 100">
    <g>
        <rect x="34" y="20" width="6" height="55" fill="#fff" />
        <ellipse cx="26" cy="75" rx="14" ry="15" fill="#fff"/>
    </g>
    <path d="M 34 20 l 42 -10 v 18 l -42 10 z" fill="#fff" />
    <g transform="translate(42 -10)">
        <rect x="34" y="20" width="6" height="55" fill="#fff" />
        <ellipse cx="26" cy="75" rx="14" ry="15" fill="#fff"/>
    </g>
</svg>`;

const sheet = `
<svg viewBox="0 0 100 100">
  <rect x="20" y="15" width="60" height="70" rx="5" fill="#fff" />
  <path d="M 58 30 l 5 5 l 10 -10" fill="none" stroke-width="5" stroke="#ccc" stroke-linecap="round" />
  <path d="M 30 30 h 20" fill="none" stroke-width="5" stroke="#ccc" stroke-linecap="round" />
  <path d="M 30 50 h 40" fill="none" stroke-width="5" stroke="#ccc" stroke-linecap="round" />
  <path d="M 30 70 h 40" fill="none" stroke-width="5" stroke="#ccc" stroke-linecap="round" />
</svg>`;

const icons = {
  play,
  note,
  sheet,
};

// boolean to have the button react differently according to the number of presses
let isBeating = false;
// length of the test
// ! matching the number of times the beatRhythm animation occurs
const testLength = 7;
// arrays in which to describe the date instances received from the user, as it clicks the button
// and the date instances accumulated at a regular interval to establish the correct values
const userInput = [];
const correctInput = [];
// target the necessary elements
// body in which to inject the .sheet container
const body = document.querySelector('body');
// button to react to button clicks
const button = body.querySelector('button');
button.style.color = currentColor;

// audio file marking the animation to give a hint as to when to press the button
const source = 'https://github.com/yagoestevez/ba-dum-tss/raw/master/public/audio/tink.wav';
const audio = document.createElement('audio');
audio.src = source;

// function used to add an input value in an array
function addInput(input, array) {
  array.push(input);
}


// function called as the pseudo eleement is animated, to keep track of the correct date instances
function keepTrack() {
  // initialize a counter to keep track of the number of iterations necessary for the test
  let counter = 1;
  // register a date instance for as many seconds as described by the testLength integer
  // immediately and at an interval
  addInput(new Date(), correctInput);
  // play the audio
  audio.play();

  const intervalID = setInterval(() => {
    counter += 1;
    // once more add the input and play the audio
    addInput(new Date(), correctInput);
    audio.play();

    // once the counter variable surpasses the upper threshold
    if (counter >= testLength) {
      // after enough time to animate the last round
      setTimeout(() => {
        // remove the click event on the button, for the specific function
        button.removeEventListener('click', handleClick);
        // remove the .beat class setting the overflow property back to hidden
        button.classList.remove('beat');
        // change the state to the sheet icon
        changeState('sheet');
      }, 1000);
      clearInterval(intervalID);
    }
  }, 1000);
}

// function called to change the state of the project, after modifying the appearance of the application
function changeState(icon) {
  // a class of .transition allows to translate the SVG icon
  button.classList.add('transition');
  // after a brief pause, change the icon used in the button
  const translationTimeout = setTimeout(() => {
    button.innerHTML = icons[icon];
    // after a brief pause, remove the class to show the new icon
    const transitionTimeout = setTimeout(() => {
      button.classList.remove('transition');
      // after another brief pause add a class of .beat to start animating the pseudo element
      // ! add a class of beat only if the icon describes the note icon
      // else attach an event listener for the displayResults function
      if (icon === 'note') {
        const beatingTimout = setTimeout(() => {
          button.classList.add('beat');
          keepTrack();
          clearTimeout(beatingTimout);
        }, 300);
      } else {
        // include an array describing the discrepancy between the correct and user input
        const test = Array(testLength).fill('').map((item, index) => {
          const correct = correctInput[index];
          // without matching input, include 0 to have the test highlight nothing on the sheet
          const user = userInput[index] ? userInput[index] : 0;
          // consider the difference with a generous margin for error
          const difference = Math.floor((user - correct) / 150);
          return difference;
        });
        // on click call the function showing the results
        button.addEventListener('click', () => displayResults(test));
      }
      clearTimeout(transitionTimeout);
    }, 300);
    clearTimeout(translationTimeout);
  }, 300);
}

// function called when the button is clicked
function handleClick() {
  // first state: the pseudo element is not animated
  if (!isBeating) {
    // switch the boolean to true, to have future clicks fall in the else statement
    isBeating = true;
    // call a function to transition the button, and start the puslating animation
    changeState('note');
  } else {
    // while the isBeating boolean is true, when the user clicks the button registers the current date instance in the userInput array
    const date = new Date();
    userInput.push(date);
  }
}

button.addEventListener('click', handleClick);


// function displaying the results passed as arguments
function displayResults(results) {
  // create a table of 12 columns and as many rows as the test is long
  const columns = 12;
  const rows = testLength;
  const table = Array(rows).fill(Array(columns).fill(''));

  // include one cell coloring the background of those identified by the value in the results array
  // ! the value can be negative, so it is necessary to add half the column size to consider the results horizontally centered
  const markup = `
  <div class="sheet">
      <h2 class="sheet__heading">Test Results</h2>
      <table class="sheet__table">
        ${table.map((row, y) => `<tr>${row.map((cell, x) => `<td class="cell" ${results[y] + columns / 2 === x && `style="background: ${currentColor};"`}>${cell}</td>`).join('')}</tr>`).join('')}
      </table>
      <div class="sheet__marks">
          <p>
              ← Early
          </p>

          <p>
              Late →
          </p>
      </div>
  </div>
  `;
  body.innerHTML = markup;
}
