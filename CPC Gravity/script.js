// node in which to add the buttons
const selectionPlanets = document.querySelector('.selection--bodies');
// data for the celestial bodies
const bodies = [
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

// function to update the gravity in the paragraph element
function updateGravity(gravity) {
  const gameGravity = document.querySelector('.game--gravity strong');
  gameGravity.textContent = gravity;
}
// function to update the name in the heading element
function updateName(name) {
  const selectionLocation = document.querySelector('.selection--location');
  selectionLocation.textContent = name;
}
// function to add a class of active on the input element
function selectButton(btn) {
  const buttons = document.querySelectorAll('.selection--bodies button');
  buttons.forEach(button => button.classList.remove('active'));
  btn.classList.add('active');
}

// function called when a click event is registered on a button
function updateSelection() {
  // retrieve the name, gravity of the matching celestial body
  const { name, gravity } = bodies.find(body => body.name === this.getAttribute('data-name'));
  // update the UI with the fabricated functions
  updateGravity(gravity);
  updateName(name);
  selectButton(this);
}

// for each celestial body create a button and add it to the selected node
bodies.forEach(({ name }) => {
  const planetButton = document.createElement('button');
  planetButton.classList.add('bodies--body');
  // add the class of active on the default celestial body
  if (name === 'earth') {
    planetButton.classList.add('active');
  }
  planetButton.setAttribute('data-name', name);

  // add the svg icon through the matching symbol
  planetButton.innerHTML = `<svg width="50" height="50">
    <use href=#${name}></use>
  </svg>`;
  // fire the updateSelection function on click
  planetButton.addEventListener('click', updateSelection);
  selectionPlanets.appendChild(planetButton);
});
