const buttons = document.querySelectorAll('button');

function handleClick(e) {
  const { layerX, layerY } = e;
  const { width, height } = this.getBoundingClientRect();

  this.style.setProperty('--top', `${(layerY / height) * 100}%`);
  this.style.setProperty('--left', `${(layerX / width) * 100}%`);

  const dx = layerX > width / 2 ? layerX : width - layerX;
  const dy = layerY > height / 2 ? layerY : height - layerY;

  const size = Math.sqrt(dx ** 2 + dy ** 2) * 2;
  this.style.setProperty('--size', `${size}px`);
}

buttons.forEach(button => {
  button.addEventListener('mousedown', handleClick);
});
