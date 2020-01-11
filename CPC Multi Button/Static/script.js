function handleMousemove({ x }) {
  const { innerWidth } = window;
  const percentage = x / innerWidth;
  const base = percentage * 360;
  document.body.style.setProperty(
    '--gradient-start',
    `hsl(${base}, 100%, 70%)`
  );
  document.body.style.setProperty(
    '--gradient-end',
    `hsl(${base + 40}, 85%, 60%)`
  );
  document.body.style.setProperty('--accent', `hsl(${base + 20}, 92.5%, 65%)`);
}
window.addEventListener('mousemove', handleMousemove);
