
const inputRange = document.querySelector('input[type="range"]');
const heading = document.querySelector('h2');


const animation = anime({
  targets: '#frame',
  d: 'M 30 100 q 0 50 330 35 a 15 15 0 0 0 0 -40 q -80 -30 -170 -35 q -3 0 -4 -10 t -5 8 t -50 20 q -5 -12 -25 -20 q -80 10 -76 42',
  easing: 'linear',
  duration: 2000,
});

const sideAnimation = anime({
  targets: '.wheels circle',
  cx: (anim, index) => (index < 2 ? `+=${35 + index * 5}` : `-=${35 - (index - 2) * 5}`),
  easing: 'linear',
  duration: 2000,
});

anime({
  targets: inputRange,
  value: [
    0,
    100,
  ],
  duration: 2000,
  easing: 'linear',
  update: ({ progress }) => {
    inputRange.style.setProperty('--progress', `${progress}%`);
    if (progress > 50) {
      heading.textContent = '1951';
    }
  },
  complete: waitForInput,
});

function waitForInput() {
  const timeoutID = setTimeout(() => {
    inputRange.oninput = () => {
      const { value: progress } = inputRange;
      const { duration } = animation;
      animation.seek(duration * progress / 100);
      sideAnimation.seek(duration * progress / 100);
      inputRange.style.setProperty('--progress', `${progress}%`);

      if (progress > 50) {
        heading.textContent = '1951';
      } else {
        heading.textContent = '1950';
      }
    };
    clearTimeout(timeoutID);
  }, 1000);
}
