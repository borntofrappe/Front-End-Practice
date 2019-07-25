/* globals anime */
// target the input element
const input = document.querySelector('input');

// as the timeline progresses update the value of the input
const timeline = anime.timeline({
  update: ({progress}) => input.value = progress
});

// function called following the input event
// update the timeline to show the percentage matching the value of the input
function handleInput() {
  const {value} = this;
  timeline.seek(timeline.duration * value / 100);
}

input.addEventListener('input', handleInput);
// following the mousedown event pause the animation
input.addEventListener('mousedown', () => timeline.pause());
// following the mouseup even play the animation
input.addEventListener('mouseup', () => timeline.play());

/* add the animations to the timeline
! use negative values as second argument of the .add() function to specify overlaps between animations
*/

// animate the fuse to have the stroke-dashoffset properties match in negative the total length of the path
// ! negative to have the shape hidden backwards
timeline.add({
  targets: '#fuse',
  strokeDashoffset: (target) => -target.getTotalLength(),
  duration: 5000,
  // ! have the stroke-dasharray match the length of the path to create the actual dashes
  begin: (animation) => {
    const target = animation.animatables[0].target;
    const length = target.getTotalLength();
    target.setAttribute('stroke-dasharray', length);
  },
  easing: 'linear',
});

// animate the spark to follow the path dictated by #motion-path
const motionPath = document.querySelector('#motion-path');
const path = anime.path(motionPath);
timeline.add({
  targets: '#spark',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  duration: 5000,
  easing: 'linear',
}, '-=5000');

// animate the ember to scale between two values
anime({
  targets: '#ember',
  transform: ['scale(1.4)', 'scale(2.1)'],
  duration: 250,
  loop: 21,
  easing: 'easeInOutSine',
  direction: 'alternate',
}, '-=5000');

// animate the sparkles to repeatedly scale up to 1
anime({
  targets: '#sparkles',
  transform: 'scale(1)',
  duration: 250,
  loop: 21,
  easing: 'easeInOutSine',
  direction: 'alternate',
}, '-=5000');

timeline.add({
  targets: '#spark',
  scale: 4.5,
  opacity: 0,
  duration: 250,
  easing: 'easeInOutSine',
});
timeline.add({
  targets: '#bomb',
  scale: 1.5,
  opacity: 0,
  duration: 300,
  delay: 50,
  easing: 'easeInOutSine',
}, '-=250');
timeline.add({
  targets: '#rupee',
  scale: [0, 1],
  opacity: [0, 1],
  duration: 300,
  delay: 50,
  easing: 'easeInOutSine',
}, '-=250');

