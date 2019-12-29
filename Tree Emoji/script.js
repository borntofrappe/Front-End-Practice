// 🌟🌲✨

// the idea is to update the two custom properties at an interval
let interval;
const delay = 5;
const easing = ['linear', 'ease-in-out', 'step-start'];
const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];
const randomDuration = () => Math.ceil(Math.random() * delay);

// identify the parent ul to update the timing function (it's quite obnoxious to have each list item pick a random easing)
const parent = document.querySelector('ul');
// identify each list item but the first one to update the duration
const nextChildren = document.querySelectorAll('ul li + li');

// function updating the custom variables
function updateAnimation() {
  const timingFunction = randomItem(easing);
  parent.style.setProperty('--animation-timing-function', timingFunction);

  nextChildren.forEach(nextChild => {
    const duration = randomDuration();
    nextChild.style.setProperty('--animation-duration', `${duration}s`);
  });
}

/* researching prefers-reduced-motion...
https://developers.google.com/web/updates/2019/03/prefers-reduced-motion#working_with_the_media_query

since the animation is not supposed to run when the prefers-reduced-motion query is set to _reduce_
update the animation properties only when the query does not match
*/
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!mediaQuery.matches) {
  updateAnimation();
  interval = setInterval(() => {
    updateAnimation();
  }, delay * 1000);
}

// when the media query changes update the custom properties accordingly
mediaQuery.addEventListener('change', () => {
  if (!mediaQuery.matches) {
    interval = setInterval(() => {
      updateAnimation();
    }, delay * 1000);
  } else {
    clearInterval(interval);
  }
});
