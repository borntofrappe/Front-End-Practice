/* globals anime */
const fuse = document.querySelector('.fuse');
const path = anime.path(fuse);

const match = document.querySelector('.match');
const length = match.getTotalLength();
match.setAttribute('stroke-dasharray', length);

anime({
  targets: '.spark',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  duration: 5000,
  easing: 'linear',
  complete: () => {
    anime({
      targets: '.spark',
      opacity: 0,
      duration: 100,
      easing: 'linear',
      transform: 'scale(1.5)',
    });
    anime({
      targets: '.bomb',
      opacity: 0,
      duration: 200,
      delay: 50,
      easing: 'linear',
      transform: 'scale(2)',
    });
  },
});
anime({
  targets: '.match',
  strokeDashoffset: -length,
  duration: 5000,
  easing: 'linear',
});
anime({
  targets: '.sparkles',
  transform: 'scale(1)',
  duration: 500,
  loop: 11,
  direction: 'alternate',
});
