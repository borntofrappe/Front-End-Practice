const pokeball = document.querySelector('svg');

// boolean faking the resolution/rejection of an hypothetical fetch request
const isResolved = Math.random() > 0.5;
// boolean faking the state of the the fetch request
let isFetched = false;

// function called for every iteration of the .shake animation
function handleIteration() {
  // if the fetch request is complete, remove the event listener for the calling function
  // set a class on the svg according to the boolean describing the resolution/rejection
  if (isFetched) {
    pokeball.removeEventListener('animationiteration', handleIteration);
    pokeball.setAttribute('class', isResolved ? 'success' : 'failure');
  }
}

// to fake a delay create a boolean every second, and if the boolean is true switch the isFetched boolean to true
const intervalID = setInterval(() => {
  const odds = Math.random() > 0.2;
  if (odds) {
    isFetched = true;
    clearInterval(intervalID);
  }
}, 1000);

// animate the pokeball to shake
pokeball.setAttribute('class', 'fetching');
// call the function for every iteration of the pokeball
// ! both the shake and the pulse animation trigger the event
// as they have the same duration this should not create issues, but be aware of that
pokeball.addEventListener('animationiteration', handleIteration);
