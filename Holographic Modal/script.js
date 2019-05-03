// target the button and modal
const button = document.querySelector('button');
const modal = document.querySelector('.modal');

// retrieve the coordinates/measures of the modal and button
const boundingBoxModal = modal.getBoundingClientRect();
const boundingBoxButton = button.getBoundingClientRect();

// number of particles included in the project
const particlesNumber = 1500;

// functions returning a random number, in a range and up to a maximum value
const randomBetween = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randomUpTo = max => Math.floor(Math.random() * max);


const particles = document.createElement('div');
particles.classList.add('particles');
button.appendChild(particles);

const { y: yModal, height: heightModal, width: widthModal } = boundingBoxModal;
const { y: yButton, height: heightButton } = boundingBoxButton;

const width = widthModal;
const height = (yButton) - (yModal + heightModal);

particles.style.width = `${width}px`;
particles.style.height = `${height}px`;

for (let i = 0; i < particlesNumber; i += 1) {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  const size = randomBetween(1, 4);
  const radius = [...Array(4).fill('').map(item => `${randomBetween(60, 90)}px`), '/', ...Array(4).fill('').map(item => `${randomBetween(60, 90)}px`)].join(' ');
  const translateX = randomUpTo(width);
  const translateY = randomUpTo(height);
  const opacity = randomUpTo(100) / 100;

  console.log(translateX);
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.opacity = opacity;
  particle.style.borderRadius = radius;
  particle.style.transform = `translate(${translateX}px, ${translateY}px)`;
  particles.appendChild(particle);
}

button.addEventListener('click', () => {
  button.classList.toggle('active');
  modal.classList.toggle('active');
});
