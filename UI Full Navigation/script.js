const button = document.querySelector('button');
const nav = document.querySelector('nav');
button.addEventListener('click', () => {
  nav.classList.toggle('open');
});
