const canvasBG = document.querySelector('canvas:nth-of-type(1)');
const canvasFG = document.querySelector('canvas:nth-of-type(2)');

function drawBG() {
  const { width, height } = canvasBG;
  const context = canvasBG.getContext('2d');

  const gradient = context.createLinearGradient(
    width / 2,
    0,
    width / 2,
    height
  );
  gradient.addColorStop(0, 'hsl(240, 100%, 16%)');
  gradient.addColorStop(0.3, 'hsl(240, 100%, 16%)');
  gradient.addColorStop(0.3, 'hsl(240, 100%, 20%)');
  gradient.addColorStop(0.7, 'hsl(240, 100%, 20%)');
  gradient.addColorStop(0.7, 'hsl(240, 100%, 24%)');

  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);

  for (let x = 0; x < window.innerWidth; x += 20) {
    for (let y = 0; y < window.innerHeight; y += 20) {
      const showStar = Math.random() > 0.8;
      if (showStar) {
        const radius = Math.random() * 2;

        context.fillStyle = 'hsl(240, 100%, 95%)';

        context.beginPath();
        if (Math.random() > 0.75) {
          const size = radius * 3;
          context.moveTo(x + size, y);
          context.quadraticCurveTo(x, y, x, y + size);
          context.quadraticCurveTo(x, y, x - size, y);
          context.quadraticCurveTo(x, y, x, y - size);
          context.quadraticCurveTo(x, y, x + size, y);
        } else {
          context.arc(x, y, radius, 0, Math.PI * 2);
        }
        context.closePath();
        context.fill();
      }
    }
  }
}

function resize() {
  [canvasBG, canvasFG].forEach(canvas => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  drawBG();
}

window.addEventListener('resize', () => resize());

resize();
drawBG();
