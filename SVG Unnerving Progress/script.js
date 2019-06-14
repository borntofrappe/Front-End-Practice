/* globals anime */
// target the rectangle fabricating the clipPath element
const clip = document.querySelector('svg #clip rect');
// define a random amount of milliseconds for the animation
const duration = Math.floor(Math.random() * 5 + 4) * 1000;

// describe the values assumed by the rectangle
// translated vertically from its original position to 0 and then back slightly to hide more content
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

// animate the clip with the first two values
anime({
  targets: clip,
  transform: translate.slice(0, 2),
  duration,
  easing: 'easeOutQuad',
  // when the animation is complete animate the clip with the latter two values, alternating indefinitely between the two
  complete: () => anime({
    targets: clip,
    transform: translate.slice(1),
    direction: 'alternate',
    loop: true,
    duration: duration / 1.5,
    easing: 'easeInOutSine',
  }),
});
