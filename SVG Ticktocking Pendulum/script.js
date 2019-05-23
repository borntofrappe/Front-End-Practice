const button = document.querySelector('button');

button.addEventListener('click', () => {
  const pendulum = document.querySelector('svg g#pendulum');
  const pendulumShadow = document.querySelector('svg g#pendulum-shadow');
  const isRunning = getComputedStyle(pendulum).animationPlayState === 'running';

  pendulum.style.animationPlayState = isRunning ? 'paused' : 'running';
  pendulumShadow.style.animationPlayState = isRunning ? 'paused' : 'running';
  button.innerHTML = isRunning ? '<span role="img">🙌</span> Please resume <span role="img">🙌</span>' : '<span role="img">🙏</span> Please stop it <span role="img">🙏</span>';
});
