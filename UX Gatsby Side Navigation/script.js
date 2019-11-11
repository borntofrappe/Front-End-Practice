// following the input event on the checkbox add/remove the class of .active from the prescribed elements
const input = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector('nav');

function handleInput() {
  const { checked } = this;
  input.className = checked ? 'active' : '';
  nav.className = checked ? 'active' : '';
}

input.addEventListener('input', handleInput);
