/* globals anime */
// animate the fuse to have the stroke-dashoffset properties match in negative the total length of the path
// ! negative to have the shape hidden backwards
anime({
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
anime({
  targets: '#spark',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  duration: 5000,
  easing: 'linear',
  // upon completing the animation scale the spark up
  // scale also the bomb, and set its opacity to 0
  complete: () => {
    anime({
      targets: '#spark',
      scale: 7.5,
      opacity: 0,
      duration: 250,
      easing: 'easeInOutSine',
    });
    anime({
      targets: '#bomb',
      scale: 2.25,
      opacity: 0,
      duration: 300,
      delay: 50,
      easing: 'easeInOutSine',
    });
  }
});

// animate the ember to scale between two values
anime({
  targets: '#ember',
  transform: ['scale(1.5)', 'scale(2)'],
  duration: 250,
  loop: 20,
  easing: 'easeInOutSine',
  direction: 'alternate',
});


// animate the sparkles to continuously scale up to 1
anime({
  targets: '#sparkles',
  transform: 'scale(1)',
  duration: 250,
  loop: 20,
  easing: 'easeInOutSine',
  direction: 'alternate',
});
