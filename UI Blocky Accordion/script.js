// BUTTON
// target the button and the nested icon
const button = document.querySelector('button');
const svg = button.querySelector('svg');
// number of milliseconds in which to animate the button
const duration = 100;
// number of seconds to delay the animation of the icon
const delay = 50;

// specify a transition for both elements
// ! transition uses seconds instead of milliseconds
button.style.transition = `transform ${duration / 1000}s ease-in`;
svg.style.transition = `transform ${duration / 1000}s ${delay / 1000}s ease-in`;

// boolean used to toggle between question and exclamation mark
let isQuestion = true;

// on click animate the button to move vertically before changint the appearance of the nested icon
// ! update the boolean used as the toggle
// remove the click event listener before the animation is complete
function handleClick() {
  isQuestion = !isQuestion;
  button.removeEventListener('click', handleClick);

  // animate the button upwards (and the icon slightly more upwards)
  button.style.transform = 'translate(50%, calc(50% - 5px))';
  svg.style.transform = 'translateY(-3px)';

  // animate the button downwards, whilst updating the nested icon
  // once the translation is complete re-position the svg to its original y coordinate
  // ! open/close every details element in accordance with the isQuestion boolean
  const timeoutID = setTimeout(() => {
    svg.querySelector('use').setAttribute('href', `#${isQuestion ? 'question' : 'exclamation'}-mark`);
    button.style.transform = 'translate(50%, 50%)';
    svg.style.transform = 'translateY(0%)';
    // reattach the event listener
    button.addEventListener('click', handleClick);
    // update the details element to either open or close them all
    const details = document.querySelectorAll('details');
    details.forEach((detail) => { isQuestion ? detail.removeAttribute('open', true) : detail.setAttribute('open', true); });
    clearTimeout(timeoutID);
  }, duration + delay);
}
button.addEventListener('click', handleClick);


// DETAILS & SUMMARY
// data describing the questions and answers
const faq = [
  {
    question: 'What is this?',
    answer: 'Hi there. This is an entry for the <a target="_blank" href="https://www.florin-pop.com/blog/2019/06/how-to-create-an-accordion">weekly coding challenge</a>. This week it\'s all about creating an <strong>accordion</strong>.',
  },
  {
    question: 'How does it work?',
    answer: 'There\'s a bit of JavaScript to make life a bit easier, but at the accordion boils down to a series of <code>details</code> and <code>summary</code> elements.',
  },
  {
    question: 'Where can I learn more?',
    answer: 'For the elements used in this page, the <a target="_blank" href="https://developer.mozilla.org/en/docs/Web/HTML/Element/details">MDN docs</a> are a great place to start.<br/>For life in general... well, there\'s a lot in the docs to keep you busy.',
  },
  {
    question: 'Nice-looking block up in the corner',
    answer: 'Thanks <span role="img">😊</span><br>It almost begs to be clicked...',
  },
];

// target the app container
const app = document.querySelector('.app');
// create a wrapping element in which to add the details & summaries
const appFaq = document.createElement('div');
appFaq.classList.add('app__faq');

// map through the faq array and add details element using the question in a summary element
const markup = faq.map(({ question, answer }) => `
<details>
  <summary>
    ${question}
  </summary>
  ${answer}
</details>
`).join('');

appFaq.innerHTML = markup;

// append the element
app.appendChild(appFaq);
