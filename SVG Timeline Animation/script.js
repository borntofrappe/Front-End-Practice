/* globals anime */

// create a timeline for the spelling-bee logo
const timeline = anime.timeline({
  delay: 500,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutCubic',
});

// scale the svg
timeline.add({
  targets: 'svg#logo-spelling-bee',
  scale: [0, 1],
  duration: 250,
  easing: 'easeInOutBack',

});

// show the letters one briefly after the other
// as the second letter is actually drawn last (to have it laid on top) include a smaller delay to animate it earlier, as expected
timeline.add({
  targets: 'svg#logo-spelling-bee .text-bee .letter',
  translateY: [44, 0],
  duration: 400,
  delay: (d, i) => (i === 2 ? 200 : i * 400),
  easing: 'easeInOutBack',
}, '-=200');


// scale the stars
// the white stars are meant to be shown after the red variants, so include a larger delay
timeline.add({
  targets: 'svg#logo-spelling-bee .stars path',
  scale: [0, 1],
  rotate: [30, 0],
  duration: (d, i) => (i > 1 ? 300 : 500),
  delay: (d, i) => (i > 1 ? 0 : 1000),
  easing: 'easeInOutBack',
}, '-=200');

// show the textPath elements in the center of the circle
// include a noticeable offset to have the textPath animated alongside the white stars
timeline.add({
  targets: 'svg#logo-spelling-bee .text-path textPath',
  startOffset: '50%',
  duration: 1000,
  delay: (d, i) => 350 * i,
}, '-= 1200');

// animate the wings to flutter
timeline.add({
  targets: 'svg#logo-spelling-bee .wings path',
  rotate: [0, 12, 0, 12, 0],
  duration: 500,
  easing: 'linear',
}, '-= -150');


// target the button
const button = document.querySelector('button');
// on click pause/resume the animation and update the text nested in the span element to match the action
let isPaused = false;

const handleClick = () => {
  isPaused = !isPaused;
  if (isPaused) {
    timeline.pause();
  } else {
    timeline.play();
  }
  button.querySelector('span').textContent = isPaused ? 'Play' : 'Pause';
};

button.addEventListener('click', handleClick);
