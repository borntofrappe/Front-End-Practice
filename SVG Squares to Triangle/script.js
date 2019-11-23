/* globals anime */
const steps = [
  'Consider the canvas',
  'Draw a square',
  'Rotate 30 degrees',
  'Draw another square',
  'Translate at the bottom',
  'Rotate -30 degrees',
  'Remove the overlap',
  'Celebrate!',
];

const details = document.querySelector('.details');
details.classList.remove('hidden');

const instructions = details.querySelector('p');

const split = string => `
  <span aria-label="${string}">
  ${string
    .split('')
    .map(letter =>
      letter === ' '
        ? ` `
        : `<span class="letter" aria-hidden="true" style=" display: inline-block;">${letter}</span>`
    )
    .join('')}
  </span>
`;

const duration = 3000;
const timeline = anime.timeline({
  easing: 'easeInOutQuad',
  duration,
  complete: () => (button.textContent = 'Restart'),
});

const showStep = (step, isLastOne = false) => {
  timeline.add({
    targets: instructions,
    begin() {
      instructions.innerHTML = split(step);
      const letters = instructions.querySelectorAll('span.letter');
      anime({
        targets: letters,
        opacity: [0, 1],
        translateX: (d, i, length) =>
          isLastOne ? [(Math.floor(length / 2) - i) * 20, 0] : [-10, 0],
        translateY: isLastOne ? [40, 0] : 0,
        delay: anime.stagger(500 / letters.length),
      });
    },
  });
};

steps.forEach((step, i, { length }) =>
  showStep(`#${i} ${step}`, i === length - 1)
);

const svg = document.querySelector('svg');
const line = svg.querySelectorAll('path');
const squares = svg.querySelectorAll('#mask--triangle use');
squares.forEach((square) => {
  square.style.transform = 'scale(0)';
  square.setAttribute('fill', 'hsl(0, 0%, 100%)');
});
const secondTimeline = anime.timeline({
  easing: 'easeInOutQuad',
  duration,
});

secondTimeline.add({
  targets: line,
  strokeDashoffset: [anime.setDashoffset, 0],
});


secondTimeline.add({
  targets: squares[0],
  scale: 1,
});

secondTimeline.add({
  targets: squares[0],
  rotate: 30,
});

secondTimeline.add({
  targets: squares[1],
  scale: 1,
});

secondTimeline.add({
  targets: squares[1],
  translateY: 50,
});

secondTimeline.add({
  targets: squares[1],
  rotate: -30,
});

secondTimeline.add({
  targets: squares[1],
  fill: 'hsl(0, 0%, 0%)',
});

secondTimeline.add({
  targets: line,
  opacity: 0,
  duration: duration / 2
});

const button = details.querySelector('button');

button.addEventListener('click', () => {
  if(timeline.completed) {
    timeline.restart();
    secondTimeline.restart();
    button.textContent = 'Pause';
  } else if (timeline.paused) {
    timeline.play();
    secondTimeline.play();
    button.textContent = 'Pause';
  } else {
    timeline.pause();
    secondTimeline.pause();
    button.textContent = 'Resume';
  }
});
