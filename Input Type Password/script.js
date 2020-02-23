const form = document.querySelector('form');
const svg = document.querySelector('svg');
const button = document.querySelector('button');

form.addEventListener('submit', (e) => {
  e.preventDefault();

})

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
})