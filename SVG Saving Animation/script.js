const timeline = anime.timeline();

timeline.add({
  targets: 'svg',
  scale: [0, 1],
  rotate: -30,
  duration: 500,
  easing: 'easeOutBack',
  begin: () => {
    anime({
      targets: '#saving',
      opacity: 1,
      duration: 0,
    });
  },
});

timeline.add(
  {
    targets: '#pencil',
    translateX: [0, 44, 0, 44, 0, 44],
    translateY: [0, 0, 20, 20, 40, 40],
    duration: 3000,
    easing: 'easeInOutQuad',
    complete: () => {
      anime({
        targets: '#saving',
        opacity: 0,
        duration: 0,
      });
    },
  },
  '-=600'
);

timeline.add(
  {
    targets: '.strokes path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuad',
    duration: 450,
    delay: (d, i) => i * 1000,
  },
  '-=2450'
);

timeline.add({
  targets: 'svg',
  rotate: [-60, 30],
  duration: 400,
  easing: 'easeOutBack',
});

timeline.add(
  {
    targets: '#saved',
    scale: [0, 1],
    rotate: -30,
    duration: 400,
    easing: 'easeOutBack',
  },
  '-=400'
);

window.addEventListener('click', () => {
  timeline.restart();
});
