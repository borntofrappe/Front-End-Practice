const duration = 800;
const delay = duration;

// set up a timeline, but add a number as the second number of every animation to have the three start at the same time
const animation = anime.timeline({
  easing: 'linear',
  duration,
});

animation.add(
  {
    targets: '.triangle path',
    strokeDashoffset: [anime.setDashoffset, 0],
    delay: anime.stagger(delay),
  },
  0
);

animation.add(
  {
    targets: '.hexagon path',
    strokeDashoffset: [anime.setDashoffset, 0],
    delay: anime.stagger(delay / 2),
    duration: duration / 2,
  },
  0
);

animation.add(
  {
    targets: '.hexagon use',
    scale: [0, 1],
    delay: anime.stagger(delay / 2),
    duration: duration / 2,
    // make the circles describing the vertices of both shapes more bouncy
    easing: (d, i) =>
      i % 2 === 0 ? 'easeOutElastic(2)' : 'easeOutElastic(1.2)',
  },
  0
);

// silly way to restart the animatin by registering a click event on the window object
window.addEventListener('click', () => animation.restart());
