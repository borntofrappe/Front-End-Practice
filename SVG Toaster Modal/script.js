// target the button to open the modal
const buttonOpen = document.querySelector('button.open--modal');
// target the modal
const modal = document.querySelector('.modal');

// function used to show the modal, by adding the class of .active to the necessary elements
function showModal() {
  // add a class of .active to the button, animating the SVG icon
  buttonOpen.classList.add('active');
  // once an animationend event is registered. add the class of .active to the modal as well
  // ! this event is registered for every animation occurring in the button
  // in the project at hand, it is registered thrice
  buttonOpen.addEventListener('animationend', () => {
    modal.classList.add('active');
  });
}

// when the button with the SVG icon is clicked call the show modal function
buttonOpen.addEventListener('click', showModal);


// identify the close button
const buttonClose = document.querySelector('button.close--modal');
// when the button is clicked remove the class of .active from both the modal and the button
buttonClose.addEventListener('click', () => {
  modal.classList.remove('active');
  // from the button to have the animation play once more as the class is re-introduced
  buttonOpen.classList.remove('active');
  // after a brief delay call the function showing the modal
  const timeoutID = setTimeout(() => {
    document.querySelector('p').innerHTML = 'Quite delightful, isn\'t it?<br/>And yes, I\'ve toasted more than once as well.';
    showModal();
    clearTimeout(timeoutID);
  }, 150);
});
