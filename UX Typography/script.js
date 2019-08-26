// PAGE
// variables necessary for the speaking animation
const state = {
  intervalID: 0,
  index: 0,
  time: 0, // for the time consider one variable to describe the cumulative number of milliseconds
  startingTime: 0, // one variable to describe the date instance when the button is pressed
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
// update the font chosen on the page
const updateFont = (value) => {
  // the value is a lowercase, possibly dash separated string
  // convert to a capitalized, possibly space separated value
  const family = value.split('-').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ');
  document.querySelector('body').style.fontFamily = `"${family}", sans-serif`;
};
// update the text rendered on the page
const updateText = (value = 0) => {
  // consider the option highlighted by the index-value
  const option = text[parseInt(value, 10)];
  // ! include one paragraph for each string, one span for each word
  document.querySelector('.page .text').innerHTML = option.map(string => `<p>${string.split(' ').map(word => `<span>${word}</span>`).join(' ')}</p>`).join('');
};
// immediately call the updateText function to section the paragraph with span elements
updateText();

// update the string displayed in the label
const updateWpm = (value) => {
  document.querySelector('#wpm').textContent = `Avg WPM (${value})`;
};

// target the form element
const form = document.querySelector('form');
// function resetting the page and the necesasry state variables
function resetPage() {
  state.index = 0;
  state.time = 0;
  state.startingTime = 0;
  clearInterval(state.intervalID);
  form.querySelector('button').textContent = 'Start';
  form.querySelector('button').classList.remove('stop');

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


// following the submit event update the appearance of the button and start the animation of the text on the page
function handleSubmit(e) {
  e.preventDefault();

  const button = this.querySelector('button');
  const buttonText = button.textContent;
  if (buttonText === 'Start') {
    button.textContent = 'Stop';
    button.classList.add('stop');

    const startingTime = new Date();
    state.startingTime = startingTime;

    // progressively, each span is then highlighted to a mark element
    // ! with a certain probability change the mark element to a del element
    state.intervalID = setInterval(() => {
      const { index } = state;
      const spans = document.querySelectorAll('.page .text span');
      spans[index].innerHTML = `<mark>${spans[index].textContent}</mark>`;
      if (index > 0) {
        if (Math.random() > 0.7) {
          spans[index - 1].innerHTML = `<del>${spans[index - 1].textContent}</del>`;
          document.querySelector('#errors').textContent = document.querySelectorAll('.page .text del').length;
        } else {
          spans[index - 1].innerHTML = spans[index - 1].textContent;
        }
      }
      state.index += 1;
      document.querySelector('#words-read').textContent = state.index;

      const time = new Date();
      const gap = time - startingTime;
      state.time = gap;
      document.querySelector('#time-to-read').textContent = state.time > 1000 ? `${Math.floor(state.time / 1000)}s` : `${state.time}ms`;
    }, 200);
  } else {
    resetPage();
  }
}
form.addEventListener('submit', handleSubmit);

// function used to show the text of the span element
// from 0 up to (and including) the initial number
function showEntry(entry) {
  const number = parseInt(entry.textContent, 10);
  let counter = 0;
  entry.textContent = counter;
  // to have larger numbers animate faster consider a delay inversely proportionate to the number itself
  const delay = 1400 / number;
  // at every inteval increment the counter
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
  // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  const spans = document.querySelectorAll('.grid span');
  spans.forEach(span => observer.observe(span));
}
