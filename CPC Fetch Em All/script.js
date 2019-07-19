// utility functions
// return a random integer from 1 up to the input value
const randomIntUpTo = int => Math.ceil(Math.random() * int);
// return a random item from an array
const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];

// global variables
// svg representing the pokeball
const pokeball = document.querySelector('svg');

// variable describing the pokemon
// ! set to undefined to manage the state of the application
let pokemon;

// boolean describing whether or not to display the shiny variant
const isShiny = Math.random() > 0.9;
// array describing the possible failure messages
const failure = [
  'Darn! The Pokemon broke free!',
  'Aww! It appeared to be caught!',
  'Shoot! It was so close too!',
];

// endpoint for the api
const endpoint = 'https://pokeapi.co/api/v2/pokemon/';
// possible number of pokemon
const pokedex = 151;


// function called for every iteration of the .shake animation
function handleIteration() {
  // if the fetch request is complete, remove the event listener for the calling function
  // add a class of .success and display a div before the svg, describing the pokemon
  if (pokemon) {
    pokeball.removeEventListener('animationiteration', handleIteration);
    pokeball.setAttribute('class', 'success');
    displayMessage(pokemon);
  }
  if (pokemon === false) {
    pokeball.removeEventListener('animationiteration', handleIteration);
    pokeball.setAttribute('class', 'failure');
    displayMessage();
  }
}

function tryAgain() {
  pokemon = undefined;
  const entry = document.querySelector('.entry');
  document.querySelector('body').removeChild(entry);
  pokeball.setAttribute('class', 'fetching');
  pokeball.addEventListener('animationiteration', handleIteration);

  fetchPokemon(randomIntUpTo(151));
}

function displayMessage(message) {
  const entry = document.createElement('article');
  entry.className = 'entry';
  if (message) {
    const {
      name, sprite: src,
    } = message;
    const capitalName = `${name[0].toUpperCase()}${name.substring(1)}`;
    const heading = document.createElement('h1');
    heading.textContent = `Congrats, you fetched ${isShiny ? `shiny ${capitalName}` : capitalName}`;
    entry.appendChild(heading);

    const image = document.createElement('img');
    image.setAttribute('src', src);
    image.setAttribute('alt', `${capitalName} - Pokemon Number ${index}`);
    entry.appendChild(image);

    const shareLink = document.createElement('a');
    const text = `I fetched a ${capitalName}! What can you find?`;
    shareLink.setAttribute('href', `https://twitter.com/intent/tweet?text=${text}&hashtags=fetchemall&url=https://www.googke.com`);
    shareLink.textContent = 'Share';
    entry.appendChild(shareLink);
  } else {
    const heading = document.createElement('h1');
    heading.textContent = failure[0];
    entry.appendChild(heading);
  }
  const tryButton = document.createElement('button');
  tryButton.textContent = 'Try again';
  tryButton.addEventListener('click', tryAgain);
  entry.appendChild(tryButton);

  document.querySelector('body').insertBefore(entry, pokeball);
}


function fetchPokemon() {
  fetch(`${endpoint}${randomIntUpTo(pokedex)}`)
    .then(response => response.json())
    .then((json) => {
      const {
        name, sprites,
      } = json;

      const sprite = isShiny ? sprites.front_shiny : sprites.front_default;
      pokemon = {
        name,
        sprite,
      };
    })
    .catch((err) => {
      pokemon = false;
    });
}


// animate the pokeball to shake
pokeball.setAttribute('class', 'fetching');
// ! include a delay to have the animation play a small amount
const timeoutID = setTimeout(() => {
  clearTimeout(timeoutID);
  // call the function for every iteration of the pokeball
  // ! both the shake and the pulse animation trigger the event
  // as they have the same duration this should not create issues, but be aware of that
  pokeball.addEventListener('animationiteration', handleIteration);
  fetchPokemon(index);
}, 1000);
