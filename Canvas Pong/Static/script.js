// CANVAS
const canvas = document.querySelector('canvas');
const { width, height } = canvas;

const context = canvas.getContext('2d');

// SETUP
// constants described throughout the project
const PADDLE_HEIGHT = 80;
const PADDLE_WIDTH = 15;
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
};

// DRAWING
// paddles
context.fillStyle = 'hsl(180, 80%, 50%)';
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
context.fillText(paddleLeft.score, 0, 0);

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
