/* globals Splitting */
// split the heading to include one tile for each letter
const target = document.querySelector('h1');
target.setAttribute('aria-label', target.textContent);

Splitting({ target }).forEach(({ words, chars }) => {
  words.forEach(word => {
    word.setAttribute('aria-hidden', 'true');
  });
  chars.forEach((char, index, { length }) => {
    char.style.padding = '0.25rem 1rem';
    char.style.background = `hsl(${280 - (295 / length) * index}, 65%, 50%)`;
    /* for each character add a border with opposing colors for the top-left and bottom-right sides */
    char.style.border = '5px inset';
    char.style.borderColor =
      'hsla(0, 0%, 100%, 0.25) hsla(0, 0%, 0%, 0.15) hsla(0, 0%, 0%, 0.15) hsla(0, 0%, 100%, 0.25)';
  });
});

let rotation = 0;
const randomBetween = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

let duration = 5;
let timeout;
const button = document.querySelector('button');
function spinWheel() {
  if (!button.classList.contains('not-allowed')) {
    button.classList.add('not-allowed');
    const wheel = document.querySelector('#wheel');
    console.dir(wheel);
    wheel.style.transition = `transform ${duration}s cubic-bezier(.48,0,.42,1)`;
    rotation += randomBetween(2, 5) * 360 + randomBetween(0, 10) * 36;
    wheel.style.transform = `rotate(${rotation}deg)`;
    console.log(rotation);
    timeout = setTimeout(() => {
      rotation %= 360;
      button.style.color = `hsl(${rotation}, 90%, 60%)`;
      console.log(rotation);
      wheel.style.transition = 'none';
      wheel.style.transform = `rotate(${rotation - 360}deg)`;
      duration = randomBetween(4, 8);
      clearTimeout(timeout);
      button.classList.remove('not-allowed');
    }, duration * 1000);
  }
}
button.addEventListener('click', spinWheel);
