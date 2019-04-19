// target the heading and the input of type range
const heading = document.querySelector('h2');
const inputRange = document.querySelector('input[type="range"]');


// animation morphing the path element using a different set of coordinates
// ! the two must match in number
const animation = anime({
  targets: '#frame',
  d: 'M 30 100 q 0 50 330 35 a 15 15 0 0 0 0 -40 q -80 -30 -170 -35 q -3 0 -4 -10 t -5 8 t -50 20 q -5 -12 -25 -20 q -80 10 -76 42',
  easing: 'linear',
  duration: 2000,
});

// side animation moving the wheels inwards
const sideAnimation = anime({
  targets: '.wheels circle',
  // use the index of the target to have the first two wheels move to the right, the remainder to the left
  cx: (anim, index) => (index < 2 ? `+=${35 + index * 5}` : `-=${35 - (index - 2) * 5}`),
  easing: 'linear',
  duration: 2000,
});


// animation playing out on the input of type range, alongside the morphing/translation of the SVG elements
anime({
  targets: inputRange,
  value: [
    0,
    100,
  ],
  duration: 2000,
  easing: 'linear',
  // update the custom properties and the heading while the input changes in value
  update: ({ progress }) => {
    inputRange.style.setProperty('--progress', `${progress}%`);
    if (progress > 50) {
      heading.textContent = '1951';
    }
  },
  // when complete call the function allowing to animate the whole thing through the input of type range
  complete: waitForInput,
});


// function called when the default animation is complete
function waitForInput() {
  // after a second
  const timeoutID = setTimeout(() => {

    // listen for an input event on the input of type range
    inputRange.oninput = () => {
      // retrieve the value of the input and the duration of the main animation
      const { value: progress } = inputRange;
      const { duration } = animation;
      // update the SVG animations to match the progress highlighted by the input element
      animation.seek(duration * progress / 100);
      sideAnimation.seek(duration * progress / 100);
      // update the custom property
      inputRange.style.setProperty('--progress', `${progress}%`);
      // update the heading
      if (progress > 50) {
        heading.textContent = '1951';
      } else {
        heading.textContent = '1950';
      }
    };

    clearTimeout(timeoutID);
  }, 1000);
}
