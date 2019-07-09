// target the button and the svg elements animated in the project
const button = document.querySelector('button');
// robot translated horizontally
const robot = document.querySelector('g#robot');
// circle and arm translated vertically
const circle = document.querySelector('g#circle');
const arm = document.querySelector('g#arm');
// support scaled vertically
const support = document.querySelector('g#support');
// polyline drawn with new points
const line = document.querySelector('polyline#line');

// group describing the pitch's element, updated in color
const pitch = document.querySelector('g#pitch');

// object detailing the long returned by the request animation frame function
const animationFrameID = {
  robotForward: 0,
  robotBackwards: 0,
  pitch: 0,
  polyline: 0,
};

// variables describing the translation accumulated for the robot and pitch
let translateX = 0;
let translateY = 0;

// angle determining the vertical coordinate of the line/translation, based on the cosine function
let angle = 0;
// array accumulating the polyline's points
let points = [[0, 0]];

// function returning radians from degrees (Math.cos() accepts radians as argument)
const radians = degrees => Math.PI / 180 * degrees;

// function animating the polyline element
function animatePolyline() {
  // for each frame reduce the horizontal coordinate of the points, effectively faking the movement of the polyline
  // ! filter out the points no longer visible in the viewBox
  points = points.filter(([x]) => x >= -100).map(([x, y]) => [x - 1, y]);
  // add a new point in the center of the svg, and in the value described by the translateY variable
  // this variable is updated in the animateCircle function
  points.push([0, translateY]);
  line.setAttribute('points', points.map(point => point.join(' ')));

  animationFrameID.polyline = requestAnimationFrame(animatePolyline);
}

// function animating the circle and robot, while updating the translateY property
function animatePitch() {
  // increment the angle
  angle += 1;
  // compute the cosine for the translateY
  const cos = Math.cos(radians(angle));
  // decrement translateY variable to have the drawing immediately move upwards
  translateY -= cos;
  // compute the cosine
  const sin = Math.sin(radians(angle));
  const scale = sin + 1;
  // translate the pitch's and arm's group vertically
  circle.setAttribute('transform', `translate(0 ${translateY})`);
  arm.setAttribute('transform', `translate(0 ${translateY})`);
  // scaled the support to match the vertical translation
  support.setAttribute('transform', `scale(1 ${scale})`);

  animationFrameID.pitch = requestAnimationFrame(animatePitch);
}

// function animating the robot toward the center of the svg
function animateRobot() {
  // remove possible animations currently ongoing
  cancelAnimationFrame(animationFrameID.robotBackwards);
  cancelAnimationFrame(animationFrameID.pitch);
  cancelAnimationFrame(animationFrameID.polyline);

  // update the color of the pitch's elements
  pitch.style.color = 'hsl(161, 100%, 42%)';
  // decrement the horizontal coordinate for the robot
  translateX -= 0.5;
  robot.setAttribute('transform', `translate(${translateX} 0)`);

  animationFrameID.robotForward = requestAnimationFrame(animateRobot);

  // immediately call the animatePolyline function to start drawing a horizontal segment
  animatePolyline();

  // once the translateX property has reached the defined threshold (corresponding to the center of the svg + the radius of the circle)
  // remove the animation for the robot and call the animatePitch function to have the graphic undulate
  if (translateX <= -36.5) {
    translateX = -36.5;
    cancelAnimationFrame(animationFrameID.robotForward);
    animatePitch();
  }
}

// function called to animate the robot back
function animateRobotBack() {
  // remove existing animations
  cancelAnimationFrame(animationFrameID.robotForward);
  cancelAnimationFrame(animationFrameID.pitch);
  cancelAnimationFrame(animationFrameID.polyline);

  // update the color fo the pitch's elements
  pitch.style.color = 'hsl(240, 100%, 15%)';

  // translate the robot to the right until it reaches its default 0 value
  translateX += 0.5;
  robot.setAttribute('transform', `translate(${translateX} 0)`);
  animationFrameID.robotBackwards = requestAnimationFrame(animateRobotBack);

  if (translateX >= 0) {
    translateX = 0;
    cancelAnimationFrame(animationFrameID.robotBackwards);
  }
}

// begin animating the robot when the mousedown event is registed on the button
button.addEventListener('mousedown', () => animateRobot());
button.addEventListener('mouseup', () => animateRobotBack());
button.addEventListener('mouseout', () => animateRobotBack());

// replicate the animation when the progress bar is pressed on the button
let isKeyDown = false;
button.addEventListener('keydown', ({ keyCode }) => {
  if (!isKeyDown && keyCode === 32) {
    isKeyDown = true;
    animateRobot();
  }
});
button.addEventListener('keyup', ({ keyCode }) => {
  if (isKeyDown && keyCode === 32) {
    isKeyDown = false;
    animateRobotBack();
  }
});

// replicate the animation for touch events
button.addEventListener('touchstart', () => animateRobot());
button.addEventListener('touchend', () => animateRobotBack());
