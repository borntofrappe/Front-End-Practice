// target the progress bar and the svg elements animated alongside it
const progress = document.querySelector('progress');

const rotate = document.querySelector('svg #rotate');
const rotateOpposite = document.querySelector('svg #rotate-opposite');
const translate = document.querySelector('svg #translate');
const rectangle = document.querySelector('svg #rectangle');
const ellipse = document.querySelector('svg #ellipse');

// describe a variable to have the animation rock forwards and backwars
let direction = 1;

// set initial values for the group elements describing the face, to have the graphic look leftwards
translate.setAttribute('transform', 'translate(0 10)');
rotate.setAttribute('transform', 'rotate(50)');
rotateOpposite.setAttribute('transform', 'rotate(-50)');

// function used to update the progress bar and the graphic alongside it
function updateProgress() {
  // update the value of the progress bar
  progress.value += direction * 0.2;
  // switch the direction of the animation when reaching the boundaries of the [0-100] range
  if(progress.value >= 100 || progress.value <= 0) {
    direction *= -1;
  }
  // animate the planet to rotate the groups in the [50, -50] range
  rotate.setAttribute('transform', `rotate(${50 - progress.value})`);
  rotateOpposite.setAttribute('transform', `rotate(${-50 + progress.value})`);

  requestAnimationFrame(updateProgress);
}

updateProgress();