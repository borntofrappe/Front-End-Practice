// target all button elements
const buttons = document.querySelectorAll('button');
// integer to keep track of the latest rating
let rating = 0;
// float describing the amount of time in which to animate the stars
const duration = 0.3;

// function called when a click is registered on the button
function handleClick() {
  // retrieve the index of the button in the node list
  const index = [...buttons].findIndex(button => button === this);

  // color and rescale every button up to the selected one
  [...buttons].slice(rating, index + 1).forEach((button, i) => {
    // transition delay for the change in color and scale, on the button
    // animation delay inherited by the pseudo elements, to add a small detail
    // both based on the total number of stars
    const stars = (index + 1) - rating;
    button.style.transitionDelay = `${i * duration / stars}s`;
    button.style.animationDelay = `${i * duration / stars}s`;
    // class allowing to style the button and animate the pseudo elements
    button.classList.add('active');
  });

  // remove the class allowing the animation from every button after the selected one
  [...buttons].slice(index + 1, rating).forEach((button, i) => {
    // delay on the transition to have the buttons styled progressively and in the opposite order
    const stars = rating - (index + 1);
    button.style.transitionDelay = `${(stars - i - 1) * duration / stars}s`;
    button.classList.remove('active');
  });

  // update rating to refer to the new index
  rating = index + 1;
}

buttons.forEach(button => button.addEventListener('click', handleClick));
