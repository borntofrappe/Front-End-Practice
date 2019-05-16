const selectionPlanets = document.querySelector('.selection--planets');

const planets = [
  {
    name: 'mercury',
    gravity: 3.7,
  },
  {
    name: 'venus',
    gravity: 8.9,
  },
  {
    name: 'earth',
    gravity: 9.8,
  },
  {
    name: 'moon',
    gravity: 1.6,
  },
  {
    name: 'mars',
    gravity: 3.7,
  },
  {
    name: 'jupiter',
    gravity: 23.1,
  },
  {
    name: 'saturn',
    gravity: 9,
  },
  {
    name: 'uranus',
    gravity: 8.7,
  },
  {
    name: 'neptune',
    gravity: 11,
  },
];

function updateGravity(gravity) {
  const gameGravity = document.querySelector('.game--gravity strong');
  gameGravity.textContent = gravity;
}
function updateName(name) {
  const selectionLocation = document.querySelector('.selection--location');
  selectionLocation.textContent = name;
}

function selectButton(btn) {
  const buttons = document.querySelectorAll('.selection--planets button');
  buttons.forEach(button => button.classList.remove('active'));
  btn.classList.add('active');
}


function updateGame() {
  const { name, gravity } = planets.find(planet => planet.name === this.getAttribute('data-name'));
  updateGravity(gravity);
  updateName(name);
  selectButton(this);
}

planets.forEach(({ name }) => {
  const planetButton = document.createElement('button');
  planetButton.classList.add('planets--planet');
  if (name === 'earth') {
    planetButton.classList.add('active');
  }
  planetButton.setAttribute('data-name', name);
  planetButton.innerHTML = `<svg width="50" height="50">
    <use href=#${name}></use>
  </svg>`;
  planetButton.addEventListener('click', updateGame);
  selectionPlanets.appendChild(planetButton);
});
