// PAGE
// variables used to keep track of the animations on the page
const state = {
  intervalID: 0,
  index: 0, // keep track of the highlighted span element
  time: 0, // keep track of the instance in which the button is pressed
  errors: 0, // keep track of the span elements highlighting text with <del>
  wpm: 300, // keep track of the value of the input of type range
};

// array describing the possible text values
// a multidimensional array for which each nested string refers to a paragraph
const text = [
  [
    'Suddenly we saw something strange- a little bird with long tail feathers and spiky feathers on its head, running quickly across the sand.',
    'We had never seen a bird run before. Commander Smith explained, " That\' s a roadrunner. He can fly, but he would rather run." She went on to say, " You know, a lot of people think there is no life in the desert, but that is not true. Look- over there is a jackrabbit." We saw a large brown rabbit hopping out of a bush. Then I said, " Wow! I have found a little lobster." When we looked down, I saw something that did look like a tiny lobster, except it had a long tail that curled back over its body. Commander Smith yelled, " Do not touch that! It is a scorpion. It has a poisonous stinger in its tail, and if it stings you, you will get very sick. " When I heard that it was not safe, I jumped back a couple of feet. Fortunately, everyone was okay and so we could continue exploring.',
    'So, after we had explored the desert for a little while, I decided that we should get back inside our ship and fly to northern Arizona. I really wanted to see the Grand Canyon. The Grand Canyon is one of the great natural wonders of the United States.',
    'It looks like a big hole has been carved out of the Colorado River. It is 277 miles long, over a mile deep, and up to eighteen miles across. Even though it is a canyon it also has many caves which people lived in many years ago. If you look out over the edge of the Grand Canyon, you can see the river glistening far, far down at the bottom. The walls of the canyon are all different colors - red, brown, white, and yellow. The colors come from the layers of different kinds of rock. Like most visitors to the canyon, we just stood there for a long time, looking at it in awe. People on Earth were smart to call this canyon the Grand Canyon because it is very Grand!',
    'After flying over Nevada, we headed west again, toward the Pacific Ocean. The part of the United States that borders the Pacific is known as the West Coast.',
  ],
  [
    'In our exploration of Texas and the other Southwestern states, we heard many people speaking Spanish, the same language we had heard spoken in parts of Florida. When we studied the history of the Southwest, we learned the reason for this. The Southwest region was not always part of the United States. Instead, it was part of Mexico, the country just to the south of the United States. There, people speak Spanish. In the 1840s, the United States and Mexico went to war over large areas of land in the Southwest. The United States won the war and gained the land that became parts of Texas, New Mexico, Arizona, Nevada, Utah, Colorado, and California.',
    'Mexican culture still has a strong influence on this region. Many cities here have Spanish names. Today, the region is home to millions of Mexican Americans, many of whom speak both Spanish and English. Spanish is the second most spoken language in the world. Almost 400 million people speak Spanish. English is the third most spoken language in the world, with 335 million people speaking English. Many people in the Southwest enjoy being able to share in the blending of the wonderful food and culture of the region. Much of the Southwest is desert- dry, sandy land with few trees. The desert begins in western Texas and covers much of New Mexico, Arizona, and Nevada. Very little rain falls in the desert.',
    'In the summer, it gets hotter than any other part of the United States. Temperatures of 115 or 120 degrees are not unusual. In the summer when the temperature is the hottest most people try to stay inside out of the heat. It gets so hot that people are told not to take their pets outside for walks. This is so pets will not get sick from getting too hot or get burns on their paws. The desert is beautiful, but the climate is not like most of the rest of the country.',
    'We landed our ship in southern Arizona and went exploring. The desert was very different from most of the other landscapes we had seen. We almost felt as if we were on another planet. Instead of trees, we saw cactus. Some of the cactus were short and round. Others were very tall and had thick " arms" sticking upward from their trunks.',
  ],
];

// function to update the font following a change event on the matching select element
// ! update the font of the paragraphs only
const updateFont = (value) => {
  // the value is a lowercase, possibly dash separated string
  // convert to a capitalized, possibly space separated value
  const family = value.split('-').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ');
  document.querySelector('.page .text').style.fontFamily = `"${family}", sans-serif`;
};

// function to update the text following a change event on the matching select element
const updateText = (value) => {
  // consider the option highlighted by the index-value
  // ! convert to integer the input value
  const option = text[parseInt(value, 10)];
  // include one paragraph for each string
  document.querySelector('.page .text').innerHTML = option.map(string => `<p>${string}</p>`).join('');
};

// function to update the string displayed in the label and change the speed of the animation
const updateWpm = (value) => {
  document.querySelector('#wpm').textContent = `Avg WPM (${value})`;
  state.wpm = value;

  // if the animation is ongoing clear the interval and call the animating function with the new speed
  if (state.index !== 0) {
    clearInterval(state.intervalID);
    updateSpans(state.wpm);
  }
};

// target the form element
const form = document.querySelector('form');

// function resetting the page and the necessary state variables
function resetPage() {
  state.index = 0;
  state.time = 0;
  state.errors = 0;
  clearInterval(state.intervalID);

  const button = form.querySelector('button');
  button.textContent = 'Start';
  button.classList.remove('stop');

  const metrics = document.querySelectorAll('.metrics span');
  metrics.forEach((metric) => {
    metric.textContent = 0;
  });
}

// following the change event dispatch the necessary functions according to the target's name (or id)
function handleChange(e) {
  const { name, value } = e.target;
  switch (name) {
    case 'font':
      updateFont(value);
      break;
    case 'text':
      // ! when changing the text reset the appearance of the page and stop the interval
      resetPage();
      updateText(value);
      break;
    case 'wpm':
      updateWpm(value);
      break;
    default:
      console.log('Something went wrong');
  }
}
form.addEventListener('change', handleChange);

// function updating the appearance of the span elements at the speed dictated by the average word per minute
function updateSpans(wpm) {
  // from the word per minute, the delay considers the number of milliseconds necessary to read 1 word
  const delay = 60 / wpm * 1000;
  // consider the date instance stored in the state
  const { time } = state;

  // at an interval, consider the span element described by the index
  // with every interval, be sure to increment the index
  state.intervalID = setInterval(() => {
    const { index } = state;
    const spans = document.querySelectorAll('.page .text span');
    // wrap the text of the current span element in a mark element
    spans[index].innerHTML = `<mark>${spans[index].textContent}</mark>`;
    // following the first span, remove the mark element from the span which precedes the current one
    if (index > 0) {
      // ! with a certain probability wrap the text in a del element instead, displaying an error
      if (Math.random() > 0.75) {
        spans[index - 1].innerHTML = `<del>${spans[index - 1].textContent}</del>`;
        // increment the error variable and show it in the respective span
        state.errors += 1;
        document.querySelector('#errors').textContent = state.errors;
      } else {
        spans[index - 1].innerHTML = spans[index - 1].textContent;
      }
    }
    // increment the index and show it in the respective span
    state.index += 1;
    document.querySelector('#words-read').textContent = state.index;

    // compute the difference in milliseconds considering the starting time prior the interval
    const now = new Date();
    const gap = now - time;
    // show the number of seconds once the measure reaches the fourth digit
    const secondsGap = Math.floor(gap / 1000);
    document.querySelector('#time-to-read').textContent = gap > 1000 ? `${secondsGap}s` : `${gap}ms`;

    // if the number of seconds is greater than 0 (otherwise the risk is dividing a measure by 0)
    // compute and display the correct word per minute
    if (secondsGap > 0) {
      const correctWords = state.index - state.errors;
      const totalReadingTime = secondsGap / 60;
      const wcpm = Math.floor(correctWords / totalReadingTime);
      document.querySelector('#wcpm').textContent = wcpm;
    }

    // if index reaches the last span element terminate the interval
    if (state.index === spans.length) {
      clearInterval(state.intervalID);
    }
  }, delay);
}

// following the submit event update the appearance of the button and start the animation of the text on the page
function handleSubmit(e) {
  e.preventDefault();

  // change the appearance of the button and play/stop the animation
  const button = this.querySelector('button');
  const buttonText = button.textContent;
  if (buttonText === 'Start') {
    button.textContent = 'Stop';
    button.classList.add('stop');

    // loop through the paragraphs and wrap each word in a span element
    // the idea is to animate the span elements one after the other
    const paragraphs = document.querySelectorAll('.page .text p');
    paragraphs.forEach((paragraph) => {
      paragraph.innerHTML = paragraph.textContent.trim().split(' ').map(word => `<span>${word}</span>`).join(' ');
    });

    // initialize time to refer to the date instance as the button is pressed
    state.time = new Date();
    // call the function to animate the span elements
    const { wpm } = state;
    updateSpans(wpm);
  } else {
    resetPage();
  }
}
form.addEventListener('submit', handleSubmit);


// GRID
// function used to show the text of the span element
// from 0 up to (and including) the initial number
function showEntry(entry) {
  const number = parseInt(entry.textContent, 10);
  let counter = 0;
  entry.textContent = counter;
  // to have larger numbers animate faster consider a delay inversely proportionate to the number itself
  const delay = 1400 / number;
  // at every interval increment the counter
  const intervalID = setInterval(() => {
    counter += 1;
    // to show a staggered animation show the updated counter only with a certain probability
    if (Math.random() > 0.3) {
      entry.textContent = counter;
    }
    // upon reaching the number set the text to its original value and clear the interval
    if (counter === number) {
      entry.textContent = number;
      clearInterval(intervalID);
    }
  }, delay);
}

// if the browser supports the intersection observer API set up an observer to animate the span elements when they come into view
if (window.IntersectionObserver) {
  const observer = new IntersectionObserver((entries) => {
    // once a span element comes into view call the prescribed function to animate its text
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        showEntry(entry.target);
      }
    });
  }, {}); // an empty objects mean the options are set to their default values
  const spans = document.querySelectorAll('.grid span');
  spans.forEach(span => observer.observe(span));
}
