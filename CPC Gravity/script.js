/* globals Matter */
// SELECTION SCREEN SETUP
// target the element describing the celestial bodies and add one button for each body
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

const selectBodies = document.querySelector('.select--bodies');

// function to update the gravity in the strong element
function updateGravity(gravity) {
  const gameGravity = document.querySelector('.app__select strong');
  gameGravity.textContent = gravity;
}
// function to update the name in the heading element
function updateName(name) {
  const selectionLocation = document.querySelector('.app__select h1');
  selectionLocation.textContent = name;
}
// function to add a class of active only on the button element
function selectButton(btn) {
  const buttons = selectBodies.querySelectorAll('button');
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

bodies.forEach(({ name }) => {
  const button = document.createElement('button');
  // add the class of active on the default celestial body
  if (name === 'earth') {
    button.classList.add('active');
  }
  // add data attribute to later identify the matching celestial body
  button.setAttribute('data-name', name);

  // add the svg icon through the matching symbol
  button.innerHTML = `<svg width="50" height="50">
    <use href=#${name}></use>
  </svg>`;

  // on each button add an event listener to update the selection on click
  button.addEventListener('click', updateSelection);
  selectBodies.appendChild(button);
});


// MATTER JS LOGIC
// included when the canvas is introduced in the DOM
function setUpGame(gravity) {
// extract the modules from the Matter object
  const { Engine } = Matter;
  const { Render } = Matter;
  const { World } = Matter;
  const { Body } = Matter;
  const { Bodies } = Matter;
  const { Events } = Matter;
  const { Runner } = Matter;
  const { Mouse } = Matter;
  const { MouseConstraint } = Matter;

  // target the canvas used in the project
  const canvas = document.querySelector('canvas');
  // create engine and a renderer
  const engine = Engine.create();
  const render = Render.create({
  // use the canvas already included in the DOM
    canvas,
    engine,
    // remove the default wireframes
    options: {
      background: 'transparent',
      wireframes: false,
    },
  });

  // starting from default values for the radius of the ball and the height of the ground
  const ballSize = 12;
  const groundHeight = 30;

  // create a peg on which to add the golf ball
  const teeWidth = 5;
  const teeHeight = 8;
  const teeX = Math.random() * (100 - 70) + 70;
  const teeY = canvas.height - groundHeight - teeHeight / 2;

  // create the peg as a static rectangle in the left section of the canvas
  const tee = Bodies.rectangle(teeX, teeY, teeWidth, teeHeight, {
    isStatic: true,
    render: {
      fillStyle: '#000',
    },
  });

  // for the golf ball, include a circle and smaller shapes for the details of the ball
  const ballX = teeX;
  const ballY = teeY - ballSize / 2 - teeHeight;
  const ball = Bodies.circle(ballX, ballY, ballSize, {
    render: {
      fillStyle: '#fed73e',
      lineWidth: 5,
      strokeStyle: '#000',
    },
  });

  // ball details made up of smaller circles added in the corner of the ball
  const ballDetails = [
    {
      x: ballX - 6,
      y: ballY - 2,
    },
    {
      x: ballX - 5,
      y: ballY + 4,
    },
    {
      x: ballX - 1,
      y: ballY - 1,
    },
    {
      x: ballX,
      y: ballY + 4,
    },
  ];
  // create the circles
  const details = ballDetails.map(({ x, y }) => Bodies.circle(x, y, 1.5, {
    render: {
      fillStyle: '#000',
    },
  }));

  // create a composite object making up the golf ball
  const golfBall = Body.create({
    parts: [ball, ...details],
    restitution: 0.4,
  });

  // create two rectangles for the ground segments, spaced by a gap slightly larger than the ball size
  // ! x and y represent the center of the rectangle, not the corner of the shape
  let groundX = Math.floor(Math.random() * (canvas.width / 2 - canvas.width / 8) + canvas.width / 8 - ballSize * 2);
  const groundY = canvas.height - groundHeight / 2;
  let groundWidth = groundX * 2;

  const grounds = Array(2).fill('').map(() => {
    const ground = Bodies.rectangle(groundX, groundY, groundWidth, groundHeight, {
      isStatic: true,
      render: {
        fillStyle: '#fed73e',
      },
    });
    // update groundX and groundWidth to have the second rectangle start after the first one and end at the end of the canvas
    groundWidth = canvas.width - groundWidth - ballSize * 2.5;
    groundX = canvas.width - groundWidth / 2;
    return ground;
  });

  // create the mouse constraint allowing to move the golf ball
  const mouse = Mouse.create(render.canvas);
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 1,
      render: {
        visible: false,
      },
    },
  });

  // create four rectangles at all sides of the canvas to detect a collision between the ball and the canvas boundaries
  const sideBottom = Bodies.rectangle(canvas.width / 2, canvas.height * 2, canvas.width, canvas.height * 2, {
    isStatic: true,
  });
  const sideLeft = Bodies.rectangle(-canvas.width, canvas.height / 2, canvas.width * 2, canvas.height, {
    isStatic: true,
  });
  const sideRight = Bodies.rectangle(canvas.width * 2, canvas.height / 2, canvas.width * 2, canvas.height, {
    isStatic: true,
  });
  const sideTop = Bodies.rectangle(canvas.width / 2, -canvas.height, canvas.width * 2, canvas.height * 2, {
    isStatic: true,
  });
  const sides = [sideTop, sideRight, sideBottom, sideLeft];

  // specify a gravity for the world, according to the celestial body
  const { world } = engine;
  world.gravity.y = gravity; // 1 by default,
  /* add the elements to the world:
  - ground segments
  - tee,
  - golf ball
  - sides
  - mouse constraint
*/
  World.add(world, [...grounds, tee, golfBall, ...sides, mouseConstraint]);

  // run the engine and the renderer
  const runner = Engine.run(engine);
  Render.run(render);

  // boolean to determine a victory
  let isVictorious = false;
  // when a collision is detected check the y coordinate of the ball
  Events.on(engine, 'collisionStart', (e) => {
    const { y } = golfBall.position;
    // if falling beneath the ground segment(s), highlight a victory
    if (y > canvas.height - 15 && !isVictorious) {
      isVictorious = true;
    }
  });

  // the event is fired upon detecting a collision as well
  Events.on(engine, 'beforeUpdate', (e) => {
    // if victorious apply a force to the ball pushing it back on the ground
    if (isVictorious) {
      Body.applyForce(golfBall, { x: golfBall.position.x, y: golfBall.position.y }, { x: 0.02, y: -0.01 });

      // animate the heading with an appropriate message
      const heading = document.querySelector('.app__play h1');
      heading.textContent = 'Congrats 😁';
      heading.style.animation = 'showMessage 1.5s 2 alternate forwards';

      // set the boolean back to false
      isVictorious = false;
    }
  });


  // listen for a click event on the back button, at which point stop the engine and call the goBack function to transition to the selection screen
  const backButton = document.querySelector('.info--back');
  backButton.addEventListener('click', () => {
    Runner.stop(runner);
    goBack();
  });
}

// function called in response to a click event on the play button
function playGame() {
  /* target
  .app to change its size
  .app__select to retrieve the selected values
  .app__play to add the matching values
  */
  const app = document.querySelector('.app');
  const appSelection = app.querySelector('.app__select');
  const appPlay = app.querySelector('.app__play');

  // retrieve the values to be passed to the second screen
  const selectionLocation = appSelection.querySelector('h1');
  const location = selectionLocation.textContent.toLowerCase();

  const selectionGravity = appSelection.querySelector('strong');
  const gravity = Number.parseFloat(selectionGravity.textContent);

  // extract the height from the height container, to keep it consistent
  const { height } = app.getBoundingClientRect();

  // for the heading on the second screen, attach an event listener to remove the animation once the animation is complete
  const playHeading = appPlay.querySelector('h1');
  playHeading.addEventListener('animationend', () => {
    playHeading.style.animation = 'none';
  });

  /* convoluted series of timeouts // can be definitely improved
  scale - once .appSelection is removed from sight (hidden), rescale the app container
  add - after being scaled, introduce .appPlay (still hidden, but included in the DOM)
  show - after a brief delay, show .appPlay
  */
  appSelection.style.transition = 'all 0.25s ease-out';
  appSelection.classList.add('hidden');
  const scaleTimeout = setTimeout(() => {
    app.style.transition = 'all 0.2s ease-out';
    app.style.width = '700px';
    app.style.height = `${height}px`;


    const addTimeout = setTimeout(() => {
      appSelection.classList.add('none');
      appPlay.classList.remove('none');

      // include the location and gravity in the informative panels
      appPlay.querySelector('.info--game h2').innerHTML = `
      <h2>
          ${location}
          <svg width="36" height="36">
              <use href="#${location}"></use>
          </svg>
      </h2>
      `;
      appPlay.querySelector('.info--game strong').textContent = gravity;

      const showTimeout = setTimeout(() => {
        appPlay.style.transition = 'all 0.2s ease-out';
        appPlay.classList.remove('hidden');

        // call the setup function adding the matter engine using the gravity proportiate to earth's gravity
        const g = gravity / 9.8;
        setUpGame(g);
        clearTimeout(showTimeout);
      }, 100);
      clearTimeout(addTimeout);
    }, 200);
    clearTimeout(scaleTimeout);
  }, 300);
}
// when the play button is clicked, call the function to transition to the game screen
const playButton = document.querySelector('.select--game button');
playButton.addEventListener('click', playGame);


// function called in response to a click on the go back button
function goBack() {
  /* convoluted series of timeouts working in the opposite direction of the playGame function
  hide canvas
  scale app
  remove canvas
  add selection screen
  show selection screen
  */
  const app = document.querySelector('.app');
  const appSelection = app.querySelector('.app__select');
  const appPlay = app.querySelector('.app__play');
  // remove the animation from the heading
  appPlay.querySelector('h1').style.animation = 'none';

  const { height } = app.getBoundingClientRect();

  appPlay.style.transition = 'all 0.25s ease-out';
  appPlay.classList.add('hidden');
  const scaleTimeout = setTimeout(() => {
    app.style.transition = 'all 0.2s ease-out';
    app.style.width = '300px';
    app.style.height = `${height}px`;
    const canvasTimeout = setTimeout(() => {
      appPlay.classList.add('none');
      appSelection.classList.remove('none');
      const showTimeout = setTimeout(() => {
        appSelection.style.transition = 'all 0.2s ease-out';
        appSelection.classList.remove('hidden');
        clearTimeout(showTimeout);
      }, 100);
      clearTimeout(canvasTimeout);
    }, 200);
    clearTimeout(scaleTimeout);
  }, 300);
}
