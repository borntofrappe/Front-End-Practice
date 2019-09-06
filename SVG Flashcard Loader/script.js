// target the progress bar and the svg elements animated alongside it
const progress = document.querySelector('progress');
const rotate = document.querySelector('svg #rotate');
const rotateOpposite = document.querySelector('svg #rotate-opposite');
const translate = document.querySelector('svg #translate');
const rectangle = document.querySelector('svg #rectangle');
const ellipse = document.querySelector('svg #ellipse');

// describe a variable to have the animation rock forwards and backwarsd
let direction = 1;

// translate the details describing the details
translate.setAttribute('transform', 'translate(0 10)');
// rotate the details to look leftwards
let rotation = 0;

rotate.setAttribute('transform', 'rotate(50)');
rotateOpposite.setAttribute('transform', 'rotate(-50)');


// update the progress bar
function updateProgress() {
  progress.value += direction * 0.2;
  rotation += direction * 0.2;
  if(progress.value >= 100 || progress.value <= 0) {
    direction *= -1;
  }
  // animate the planet to rotate the groups in the [50, -50] range
  rotate.setAttribute('transform', `rotate(${50 - rotation})`);
  rotateOpposite.setAttribute('transform', `rotate(${-50 + rotation})`);

  requestAnimationFrame(updateProgress);
}

updateProgress();