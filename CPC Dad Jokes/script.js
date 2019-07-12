// endpoint and headers
const url = 'https://icanhazdadjoke.com';
const headers = new Headers({
  Accept: 'application/json',
});

// array describing the possible reactions to the joke
// the idea is to use the utterance for the joke and then for the reaction, after a brief pause
const reactions = [
  'lol',
  'hilarious',
  'funny',
  'ah ah',
  'uh',
  'wow',
];
// utility function returning a random item from an array
const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];

/*
project flow
- retrieve the voices for the synthesizer
- fetch a joke
- use the joke in the utterance and in the heading of the .joke container
- listen for a click event on the only button on the page
- as the button gets clicked, have the synthesizer relate the joke, as the words are displayed in unison
- once the joke is told, have the synthesizer relate a reaction
- listen for a click event on the same button to reset the environment and fetch a new joke
*/

// global variables referring to the app container, the synthesizers and the instance of the synth utterance
const app = document.querySelector('.app');
const synth = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance();

// RETRIEVE VOICES
function retrieveVoices() {
  // retrieve the voices from the instance of the speechSynthesis object
  const voices = synth.getVoices();
  // ! the voices might not be available immediately, but following the onvoiceschanged event
  // continue only if voices is a non-null value
  if (voices) {
    // retrieve the first english-speaking voice and set it for the instance of the utterance
    const voice = voices.find(item => /en/gi.test(item.lang));
    utterance.voice = voice;
    // proceed to fetch a joke
    fetchJoke();
  }
}

// retrieve the voices
retrieveVoices();
// ! the voices might be available only at a later moment, and when they do they prop the onvoiceschanged event
synth.addEventListener('voiceschanged', retrieveVoices);


// FETCH A JOKE
// for the selected endpoint and the chosen headers retrieve a json object with the joke
function fetchJoke() {
  fetch(url, { headers })
    .then(response => response.json())
    // upon retrieving the joke call the function to set up the joke and the button
    .then(({ joke }) => setJoke(joke));
}

// SET UP JOKE
function setJoke(joke) {
  // include the joke for the text of the utterance
  utterance.text = joke;

  /* destructure the string into an array of span elements, to show the words one at a time
  the idea is to show the words as they are spoken by the synth
  the synth provides a reference to the number of characters being spoken, so the span elements include a data-attribute for this cumulative value
  */

  /* array of objects
  {
    word,           // the actual word
    length,         // the length of the word
    count,          // the cumulative number of characters
  }

  */
  const jokeArray = joke
    .split(' ')
    .reduce((wordArray, word) => {
      const count = wordArray.reduce((acc, curr) => acc + curr.length + 1, 0); // + 1 to account for the white space between words
      const { length } = word;
      const wordObject = {
        word,
        length,
        count,
      };
      return [...wordArray, wordObject];
    }, []);

  // string of span elements wrapping the words and specifying the count in a data attribute
  // ! by default have the span hidden from sight
  const jokeMarkup = jokeArray
    .map(({ word, count }) => `
      <span data-count=${count} style="opacity: 0;">${word}</span>
    `)
    .join(' ');

  const h1 = app.querySelector('h1');
  h1.innerHTML = jokeMarkup;

  // hide the h2 element as well
  const h2 = app.querySelector('h2');
  h2.style.opacity = 0;
  h2.textContent = '';

  // change the text of the button to highlight the presence of a joke and attach an event listener
  const button = app.querySelector('button');
  button.textContent = 'Tell me a joke';
  // on click call a function to tell the joke
  button.addEventListener('click', tellJoke, { once: true });
}

// function called when the button is clicked
function tellJoke() {
  // hide the button from sight
  const button = app.querySelector('button');
  button.classList.add('active');

  // listen to the boundary event, to show the words as they are spoken
  utterance.addEventListener('boundary', showJoke);
  // listen to the end event, to speak/show the reaction as the joke ends
  utterance.addEventListener('end', showReaction, { once: true });

  // use the synth to tell the joke
  synth.speak(utterance);
}


// function called following the boundary event
// retrieve the number of characters spoken in the utterance
function showJoke({ charIndex }) {
  // loop through the span and show the elements with a data-count smaller than the found reference
  const spans = app.querySelectorAll('h1 span');
  spans.forEach((span) => {
    const dataCount = span.getAttribute('data-count');
    if (dataCount <= charIndex) {
      span.style.opacity = 1;
    }
  });
}

// function following the end event
function showReaction() {
  // loop through the span elements and set the opacity to 1 (precaution against a word being cut out from the word count)
  const spans = app.querySelectorAll('h1 span');
  spans.forEach((span) => {
    span.style.opacity = 1;
  });

  // after a brief delay retrieve a reaction and show it in the h2 element
  // the pause adds to the hilarity of the joke
  const timeoutReaction = setTimeout(() => {
    const reaction = randomItem(reactions);
    const h2 = app.querySelector('h2');

    h2.textContent = reaction;
    h2.style.opacity = 1;

    // change the text of the utterance and have the synth produce the reaction
    utterance.text = reaction;
    synth.speak(utterance);

    clearTimeout(timeoutReaction);
  }, 500);

  // after a longer delay show the button by removing the prescribed class
  const timeoutButton = setTimeout(() => {
    const button = app.querySelector('button');
    button.textContent = 'Fetch another joke';
    button.classList.remove('active');
    button.addEventListener('click', fetchJoke, { once: true });
    clearTimeout(timeoutButton);
  }, 2500);
}
