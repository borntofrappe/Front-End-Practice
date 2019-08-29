// when the button is pressed toggle the animation in the svg element
const button = document.querySelector('button');
button.addEventListener('click', () => document.querySelector('svg').classList.toggle('animate'));
