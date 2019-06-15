/* globals anime */
// target the rectangle fabricating the clipPath element
const clip = document.querySelector('svg #clip rect');
// define a random amount of milliseconds for the animation
const duration = Math.floor(Math.random() * 5 + 5) * 1000;

// describe the values assumed by the rectangle
// translated vertically from its original position to 0
const translate = [
  {
    value: 'translate(0 20)',
  },
  {
    value: 'translate(0 0)',
  },
  {
    value: 'translate(0 7)',
  },
];
// from 0 specify additional keyframes to have the temperature wobble between 0 and a small amount
const frames = 5;
for (let i = 0; i < frames; i += 1) {
  const value = `translate(0 ${Math.floor(Math.random() * 10)})`;
  translate.push({
    value,
  });
}
// animate the clip with the first two values
anime({
  targets: clip,
  transform: translate.slice(0, 2),
  duration,
  easing: 'easeOutQuad',
  // when the animation is complete animate the clip with starting from the resting 0 coordinate
  complete: () => anime({
    targets: clip,
    transform: translate.slice(1),
    direction: 'alternate',
    loop: true,
    duration,
    easing: 'easeInOutSine',
  }),
});
