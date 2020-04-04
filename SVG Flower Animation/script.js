const path = anime.path('#path');

const timeline = anime.timeline({
  easing: 'easeInOutExpo',
  duration: 1000
});

timeline.add({
  targets: '.stem',
  scale: [0, 1],
})

timeline.add({
  targets: '.leaf',
  rotate: [0, 45],
})
timeline.add({
  targets: '.petals',
  scale: [0, 1],
}, '-=1000');

timeline.add({
  targets: '#bee',
  opacity: [0, 1],
}, '-=1000');


anime({
  targets: '#bee',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  loop: true,
  duration: 12500,
  easing: 'linear'
});