// state object to manage the game
const state = {
  guess: {
    left: 2, // how many guesses are left
    player: 1, // guess represented by the checked input
    correct: 0, // position of the hidden item
  },
  option: 1, // selected option
};

// function generating a random guess among the possible options (1-5)
const randomGuess = () => Math.ceil(Math.random() * 5);
// immediately include a random guess in the state.guess.correct property
state.guess.correct = randomGuess();

// target the form element
const form = document.querySelector('form');

// function called following the change event on the form
// update the label following the selected input
function handleChange(e) {
  const labels = document.querySelectorAll('label');
  labels.forEach((label) => {
    const option = label.getAttribute('for');
    if (option === e.target.value) {
      // add the class of active on the selected label
      label.classList.add('active');
      // update the state with the player's guess
      const optionNumber = parseInt(option[option.length - 1], 10);
      state.guess.player = optionNumber;
    } else {
      label.classList.remove('active');
    }
  });
}
form.addEventListener('change', handleChange);

// target the control's buttons of type button
const buttons = document.querySelectorAll('.controls button[type="button"]');

// function called following a click event on the buttons
// receiving as argument the index of the button being clicked
// 0 === prev, 1 === next
function handleClick(index) {
  // retrieve the player guess
  const { player } = state.guess;
  // decrement/increment the option according to the index
  // ! cap the values in the 1, 5 range
  const optionNumber = index === 0 ? Math.max(1, player - 1) : Math.min(player + 1, 5);

  // update the labels
  const labels = document.querySelectorAll('label');
  labels.forEach((label, indx) => ((indx + 1) === optionNumber ? label.classList.add('active') : label.classList.remove('active')));
  // update the state
  state.guess.player = optionNumber;
}

buttons.forEach((button, index) => button.addEventListener('click', () => handleClick(index)));

// boolean describing the state of the animation
let isGuessing = false;
// function called callowing the submit event on the form
function handleSubmit(e) {
  // prevent the default behavior and assess the guess for the selected input
  e.preventDefault();
  // if the animation is ongoing pre-emptively exit the function
  if(isGuessing) {
    return false;
  }
  isGuessing = true;

  // retrieve the guess's information
  const { left, player, correct } = state.guess;

  // identify the labels to update their opacity and HTML
  const labels = document.querySelectorAll('label');

  /* pokewalker logic
  left === 0
    reset the game
  else
    animate the bush and compare the player v correct option
  */
  if(left === 0) {
    // update the state and the headings to reset the game
    isGuessing = false;
    state.guess.left = 2;
    state.guess.correct = randomGuess();
    document.querySelector('h2 span').textContent = '2';
    document.querySelector('h1').textContent = 'Discover an Item!';

    // reset the opacity of the labels
    labels.forEach((label) => { label.style.opacity = 1; });

    // remove the svg element with an id of #found-item
    const foundItem = document.querySelector('svg#found-item');
    foundItem.parentNode.removeChild(foundItem);
  } else {
    // animate the bush of the selected label
    const bush = labels[player - 1].querySelector('svg');
    bush.style.animation = 'select 1s step-start';

    // once the animation is complete proceed to compare the player v correct option
    const timeoutID = setTimeout(() => {
      // set the controlling boolean back to false
      isGuessing = false;
      // reset the animation property
      bush.style.animation = 'initia';

      /* victory logic
      - relate the victory through the heading and the graphic of the found item
      - set left to 0, to fall in the first conditional in the iteration which follows
      - set correct to 0, to avoid potential matches
      */
      if (player === correct) {
        document.querySelector('h1').textContent = 'Found It!';
        // add an svg describing the item in the matching label
        labels[player - 1].innerHTML += `
        <svg id="found-item" viewBox="0 0 120 100" width="18" height="15">
            <use href="#item"></use>
        </svg>`;
        state.guess.left = 0;
        state.guess.correct = 0;
      } else {
        /* post-victory logic
        - left === 2: update the state and the heading to give another opportunity
        - left === 1: update the state and the heading to show a loss
        */

        // decrement the number of guesses left
        const guessesLeft = left - 1;

        if (left > 0) {
          // update the state and the visual shown in the heading
          state.guess.left = guessesLeft;
          document.querySelector('h2 span').textContent = guessesLeft;
          // reduce the opacity of the matching label
          labels[player - 1].style.opacity = 0.2;
          if (left === 2) {
            // communicate the distance between the player's guess and the correct option
            const spread = Math.abs(player - correct);
            document.querySelector('h1').textContent = `It's ${spread > 1 ? 'far away!' : 'close!'}`;
          } else {
            // show where the item was through the svg icon of the found item
            labels[correct - 1].innerHTML += `
            <svg id="found-item" viewBox="0 0 120 100" width="18" height="15">
                <use href="#item"></use>
            </svg>`;

            // set the correct option to 0 to avoid matches
            state.guess.correct = 0;

            document.querySelector('h1').textContent = 'Out of luck...';
          }
        }
      }
      clearTimeout(timeoutID);
    }, 1000);
  }
}

form.addEventListener('submit', handleSubmit);
