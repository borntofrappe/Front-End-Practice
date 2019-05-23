// target the button and on click pause/resume the animation
const button = document.querySelector('button');

button.addEventListener('click', () => {
  // retrieve the animation-play-state property
  const pendulum = document.querySelector('svg g#pendulum');
  const pendulumShadow = document.querySelector('svg g#pendulum-shadow');

  // depending on the value of the property pause/resume the CSS animation and modify the text of the button to match
  const isRunning = getComputedStyle(pendulum).animationPlayState === 'running';

  pendulum.style.animationPlayState = isRunning ? 'paused' : 'running';
  pendulumShadow.style.animationPlayState = isRunning ? 'paused' : 'running';
  button.innerHTML = isRunning ? '<span role="img">🙌</span> Please resume <span role="img">🙌</span>' : '<span role="img">🙏</span> Please stop it <span role="img">🙏</span>';
});
