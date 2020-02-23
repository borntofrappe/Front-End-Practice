const form = document.querySelector('form');
const svg = document.querySelector('svg');
const button = document.querySelector('button');

form.addEventListener('submit', (e) => {
  e.preventDefault();

});

// beside updating the text and the type attribute in the form, toggle the class of .hide on the svg to update the visual
button.addEventListener('click', () => {
  const type = form.password.getAttribute('type');
  if(type === 'password') {
    button.textContent = 'Hide';
    form.password.setAttribute('type', 'text');
    svg.classList.remove('hide')
  } else {
    button.textContent = 'Show';
    form.password.setAttribute('type', 'password');
    svg.classList.add('hide')
  }
});