// CANVAS
const canvas = document.querySelector('canvas');
const { width, height } = canvas;

const context = canvas.getContext('2d');

// SETUP
// constants described throughout the project
const PADDLE_HEIGHT = 80;
const PADDLE_WIDTH = 15;
const PADDLE_SPEED = 5;
const PADDING = 20;
const BALL_SIZE = 10;

// objects depicting the position and score of the two sides
const paddleLeft = {
  x: PADDING,
  y: height / 2 - PADDLE_HEIGHT / 2,
  score: 0,
};
const paddleRight = {
  x: width - PADDLE_WIDTH - PADDING,
  y: height / 2 - PADDLE_HEIGHT / 2,
  score: 0,
};

// object describing the position of the ball
const ball = {
  x: width / 2,
  y: height / 2,
  dx: Math.random() > 0.5 ? 1 : -1,
  dy: 1,
  vx: Math.floor(Math.random() * 3) + 1,
  vy: Math.floor(Math.random() * 3) + 1,
};

// DRAWING
function draw() {
  context.clearRect(0, 0, width, height);

  // paddles
  context.fillStyle = 'hsl(150, 80%, 50%)';
  context.fillRect(paddleLeft.x, paddleLeft.y, PADDLE_WIDTH, PADDLE_HEIGHT);
  context.fillRect(paddleRight.x, paddleRight.y, PADDLE_WIDTH, PADDLE_HEIGHT);

  // score
  context.save();

  context.font = '42px monospace';
  context.textAlign = 'center';
  context.fillStyle = 'hsla(0, 0%, 100%, 0.4)';

  context.translate(width / 4, height / 6);
  context.fillText(paddleLeft.score, 0, 0);

  context.translate(width / 2, 0);
  context.fillText(paddleRight.score, 0, 0);
  context.restore();

  // dashed strokes
  context.save();

  context.translate(width / 2, 0);
  // line
  context.lineWidth = 2;
  context.setLineDash([5]);
  context.strokeStyle = 'hsla(0, 0%, 100%, 0.4)';

  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(0, height);
  context.stroke();

  // circle
  context.translate(0, height / 2);
  context.beginPath();
  context.arc(0, 0, BALL_SIZE * 4, 0, Math.PI * 2);
  context.closePath();
  context.stroke();

  context.restore();

  // ball
  context.fillStyle = 'hsl(0, 0%, 100%)';
  context.beginPath();
  context.arc(ball.x, ball.y, BALL_SIZE, 0, Math.PI * 2);
  context.closePath();
  context.fill();
}

draw();

function updateSpeed() {
  const rx = Math.floor(Math.random() * 2) + 2;
  const ry = Math.floor(Math.random() * 2) + 2;
  ball.vx = rx;
  ball.vy = ry;
}

function centerBall() {
  ball.x = width / 2;
  ball.y = height / 2;
  ball.dx = Math.random() > 0.5 ? 1 : -1;
  updateSpeed();
}

// ANIMATION
function animate() {
  draw();

  // move the ball
  ball.x += ball.vx * ball.dx;
  ball.y += ball.vy * ball.dy;

  // collision with walls
  if (ball.x + BALL_SIZE / 2 >= width) {
    paddleLeft.score += 1;
    centerBall();
  }
  if (ball.x - BALL_SIZE / 2 <= 0) {
    paddleRight.score += 1;
    centerBall();
  }

  if (ball.y - BALL_SIZE / 2 < 0) {
    ball.y = BALL_SIZE / 2;
    ball.dy *= -1;
    updateSpeed();
  }
  if (ball.y + BALL_SIZE / 2 > height) {
    ball.y = height - BALL_SIZE / 2;
    ball.dy *= -1;
    updateSpeed();
  }

  // collision with paddles
  if (
    ball.x - BALL_SIZE / 2 <= paddleLeft.x + PADDLE_WIDTH &&
    ball.y > paddleLeft.y &&
    ball.y < paddleLeft.y + PADDLE_HEIGHT
  ) {
    ball.x = paddleLeft.x + PADDLE_WIDTH + BALL_SIZE / 2;
    ball.dx *= -1;
    updateSpeed();
  }

  if (
    ball.x + BALL_SIZE / 2 >= paddleRight.x &&
    ball.y > paddleRight.y &&
    ball.y < paddleRight.y + PADDLE_HEIGHT
  ) {
    ball.x = paddleRight.x - BALL_SIZE / 2;
    ball.dx *= -1;
    updateSpeed();
  }

  // moving paddles
  if (ball.dx === -1) {
    if (ball.y < paddleLeft.y) {
      paddleLeft.y -= PADDLE_SPEED;
    } else if (ball.y > paddleLeft.y + PADDLE_HEIGHT) {
      paddleLeft.y += PADDLE_SPEED;
    }
  } else if (ball.y < paddleRight.y) {
    paddleRight.y -= PADDLE_SPEED;
  } else if (ball.y > paddleRight.y + PADDLE_HEIGHT) {
    paddleRight.y += PADDLE_SPEED;
  }

  requestAnimationFrame(animate);
}
// kickstart the animation loop
animate();
