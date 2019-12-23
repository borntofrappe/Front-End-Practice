/* globals anime */
// animate the line drawing and the text translation in sequence
const animation = anime.timeline({
    duration: 1750,
    easing: 'linear',
  });

  animation.add(
    {
      targets: 'g#text--offset path',
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity: [0, 1],
      delay: anime.stagger(250),
    },
    '+=250'
  );

  animation.add({
    targets: 'g#text--translate',
    translateY: [6, 0],
  });

  // silly way to have the animation run multiple times, by registering a click on the window
  window.addEventListener('click', () => animation.restart());
