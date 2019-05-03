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

// create a container for the particles and add it to the button
const particles = document.createElement('div');
particles.classList.add('particles');
button.appendChild(particles);

// retrieve the coordinates/dimensions required to size the container
// the container is set to have the same width of the modal and the height given by the distance between the modal and the button
const { y: yModal, height: heightModal, width: widthModal } = boundingBoxModal;
const { y: yButton } = boundingBoxButton;

const width = widthModal;
const height = (yButton) - (yModal + heightModal);

// size the container with the prescribed dimensions
// given its absolute position, it now occupies the space between modal and button
particles.style.width = `${width}px`;
particles.style.height = `${height}px`;

// for as many times as specified by the counter variable
for (let i = 0; i < particlesNumber; i += 1) {
  // create a container for the individual particle
  const particle = document.createElement('div');
  particle.classList.add('particle');

  // style the particle with a certain width, height, opacity and radius
  const size = randomBetween(1, 4);
  const radius = [...Array(4).fill('').map(item => `${randomBetween(60, 90)}px`), '/', ...Array(4).fill('').map(item => `${randomBetween(60, 90)}px`)].join(' ');
  const opacity = randomUpTo(100) / 100;
  // position the particle randomly in the wrapping container
  const translateX = randomUpTo(width);
  const translateY = randomUpTo(height);

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.opacity = opacity;
  particle.style.borderRadius = radius;
  particle.style.transform = `translate(${translateX}px, ${translateY}px)`;

  particles.appendChild(particle);
}

// when clicking the button toggle the class of active on the button, to show the particles
// toggle also the class of active on the modal, to show its contents
button.addEventListener('click', () => {
  button.classList.toggle('active');
  modal.classList.toggle('active');
});
