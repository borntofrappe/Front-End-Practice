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
// ! include an integer purposefully greater than the maximum number of pokemon to possibly reject the promise
const pokedex = 900;


/* function called for every iteration of the .shake animation
the idea is to update the UI once the promise is resolved/rejected
- if resolved pokemon is an object
- if rejected pokemon is false

remove the event listener and call the render function to render the article with the object/placeholder message
*/
function handleIteration() {
  if (pokemon !== undefined) {
    pokeball.removeEventListener('animationiteration', handleIteration);
    renderArticle(pokemon);
  }
}

// function called following a click event on the tryButton
function handleClick() {
  // reset the pokemon variable
  pokemon = undefined;

  // remove the entry from the DOM
  const entry = document.querySelector('.entry');
  document.querySelector('body').removeChild(entry);

  // play the fetching animation and listen for the iteration event
  pokeball.setAttribute('class', 'fetching');
  pokeball.addEventListener('animationiteration', handleIteration);
  // call the function to fetch a new pokemon
  fetchPokemon();
}

// function called to render the content of the entry
function renderArticle(content) {
  // create an article element and add the HTML depending on the argument
  const article = document.createElement('article');
  if (content) {
    const {
      name, sprite: src, index
    } = content;

    const capitalName = `${name[0].toUpperCase()}${name.substring(1)}`;

    const heading = document.createElement('h1');
    heading.textContent = `Congrats, you fetched ${isShiny ? `shiny ${capitalName}` : capitalName}!`;
    article.appendChild(heading);

    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', `${capitalName} - Pokemon Number ${index}`);
    article.appendChild(img);

    // link to share on twitter
    const shareLink = document.createElement('a');
    const text = `I fetched a ${capitalName}! What can you find?`;
    const url = 'https://www.googke.com';
    shareLink.setAttribute('href', `https://twitter.com/intent/tweet?text=${text}&hashtags=fetchemall&url=${url}`);
    shareLink.textContent = 'Share';
    article.appendChild(shareLink);
  } else {
    const heading = document.createElement('h1');
    heading.textContent = randomItem(failure);
    article.appendChild(heading);
  }

  // for both instances include a button to try again
  const tryButton = document.createElement('button');
  tryButton.textContent = 'Try again';
  tryButton.addEventListener('click', handleClick);
  article.appendChild(tryButton);

  // include the article before the pokeball
  document.querySelector('body').insertBefore(article, pokeball);

  // after a delay add the class to show the contents of the article
  // change the class of the pokeball accordingly
  // ! this means the article exist before it is shown, giving a brief time to the sprite to load
  const entryTimeout = setTimeout(() => {
    article.className = 'entry';
    pokeball.setAttribute('class', content ? 'success' : 'failure');
    clearTimeout(entryTimeout);
  }, 1500);

}

// function fetching a pokemon
function fetchPokemon() {
  // build a URL using the endpoint and a random integer
  const index = randomIntUpTo(pokedex);
  const url = `${endpoint}${index}`;

  // fetch request
  fetch(url)
    .then(response => response.json())
    .then((json) => {
      // resolved: retrieve the necessary information and update the pokemon variable
      const {
        name, sprites,
      } = json;

      const sprite = isShiny ? sprites.front_shiny : sprites.front_default;
      pokemon = {
        name,
        sprite,
        index,
      };
    })
    .catch((err) => {
      // rejected: update pokemon to false
      pokemon = false;
    });
}


// animate the pokeball to shake
pokeball.setAttribute('class', 'fetching');
// call the function for every iteration of the pokeball
// ! both the shake and the pulse animation trigger the event
// as they have the same duration this should not create issues, but be aware of that
pokeball.addEventListener('animationiteration', handleIteration);

// call the function to fetch a pokemon
fetchPokemon();
