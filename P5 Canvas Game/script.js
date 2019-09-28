// constants used throughout the code
const CANVAS_WIDTH = 650;
const CANVAS_HEIGHT = 400;

const TANK_WIDTH = 70;
const TANK_HEIGHT = 30;
const TANK_SPEED = 5;

const PROJECTILE_WIDTH = 5;
const PROJECTILE_HEIGHT = 12;
const PROJECTILE_SPEED = 5;

const TARGET_SIZE = 30;

const PADDING = 10;
const PADDING_TANK = 12;

// tank class
class Tank {
  constructor() {
    this.x = 0;
    this.width = TANK_WIDTH;
    this.height = TANK_HEIGHT;
    this.speed = TANK_SPEED;
  }

  // through the display function draw a series of rectangle to shape the tank
  display() {
    const { x, y, width, height } = this;
    rectMode(CENTER);
    fill('#323230');
    noStroke();
    // instead of a rectangle, use multiple vetices to draw the tank
    // using the width and height as a frame of reference
    beginShape();
    translate(CANVAS_WIDTH / 2, CANVAS_HEIGHT - PADDING_TANK);
    translate(this.x, -5);
    vertex(-this.width / 2, 0);
    vertex(this.width / 2, 0);
    vertex(this.width / 2, -this.height / 2.5);
    vertex(this.width / 2.5, -this.height / 2.5);
    vertex(this.width / 2.5, -this.height / 2);
    vertex(this.width / 8, -this.height / 2);
    vertex(this.width / 8, -this.height / 1.25);
    vertex(this.width / 30, -this.height / 1.25);
    vertex(this.width / 30, -this.height);
    vertex(-this.width / 30, -this.height);
    vertex(-this.width / 30, -this.height / 1.25);
    vertex(-this.width / 8, -this.height / 1.25);
    vertex(-this.width / 8, -this.height / 2);
    vertex(-this.width / 2.5, -this.height / 2);
    vertex(-this.width / 2.5, -this.height / 2.5);
    vertex(-this.width / 2, -this.height / 2.5);
    endShape();
  }

  // through the move function change the x coordinate of the shape, using the input direction
  move(direction) {
    const d = direction === 'right' ? 1 : -1;
    const dx = this.x + d * this.speed;
    // limit the x coordinate to the canvas plus minus the size of the tank
    this.x = constrain(
      dx,
      -CANVAS_WIDTH / 2 + this.width / 2,
      CANVAS_WIDTH / 2 - this.width / 2
    );
  }
}

// projectile class, initialized using the coordinates picked up from the position of the tank
class Projectile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = PROJECTILE_WIDTH;
    this.height = PROJECTILE_HEIGHT;
    this.speed = PROJECTILE_SPEED;
  }

  // through the display function draw a thin tall rectangle
  display() {
    rectMode(CENTER);
    fill('#323230');
    noStroke();
    rect(this.x, this.y - TANK_HEIGHT, this.width, this.height);
  }

  // through the move function change the y coordinate to have the rectangle consistently move toward the top of the canvas
  move() {
    this.y -= this.speed;
  }

  // through the collides function check if the projectile overlaps with the shape positioned at the input coordinates
  // since the x and y coordinates of both the target and the projectile describe their center, compute the distance between these values
  // if the distance is less than half the target's size, the two overlap
  collides(target) {
    const { x: xTarget, y: yTarget } = target;
    const { x, y } = this;
    if(dist(xTarget, yTarget, x, y) <= TARGET_SIZE / 2) {
      return true;
    }
    return false;
  }
}

// target class, used to create elements in the top fourth of the canvas
class Target {
  constructor(x, y, shape) {
    // horizontally spanning the width of the canvas
    this.x = x;
    this.y = y;
    this.size = TARGET_SIZE;
    this.shape = shape;
  }

  // through the display function describe a target with one of three possible shapes
  display() {
    fill('#323230');
    noStroke();
    if(this.shape === 'rect') {
      rectMode(CENTER);
      rect(this.x, this.y, this.size, this.size);
    } else if(this.shape === 'circle') {
      circle(this.x, this.y, this.size);
    } else {
      triangle(this.x - this.size / 2, this.y + this.size / 2, this.x + this.size / 2, this.y + this.size / 2, this.x, this.y - this.size / 2);
    }
  }
}

// initialize the tank
const tank = new Tank();
// set up an array for the projectiles
const projectiles = [];
// set up an array for the targets
const targets = [];

// would-be describing the direction of the tank (included for the buttons included in the DOM)
let direction;
// array describing the buttons
let buttons = [];

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  //   add a series of targets to the matching array
  for (let i = 0; i < 5; i += 1) {
    addTarget();
  }

  // store all the button elements in the defined array
  buttons = selectAll('button');

  // loop through the buttons and attach the necessary event listeners
  buttons.forEach(button => {
    const { id } = button.elt;
    // for the fire button call the function to fire a projectile
    if (id === 'fire') {
      button.mousePressed(() => fireProjectile());
    } else {
      // for the left and right button, update direction with the connected identifier
      // this is picked up in the draw function and allows to move the tank until direction is set back to falsy
      button.mousePressed(() => {
        direction = id;
      });
      button.touchStarted(() => {
        direction = id;
      });
    }
  });
}
// reset the direction as the mouse is released, or the touch ends
function mouseReleased() {
  direction = null;
}
function touchEnded() {
  direction = null;
}

function draw() {
  // background
  background('#F1DA4E');
  stroke('#323230');
  strokeWeight(6);
  line(0, CANVAS_HEIGHT - PADDING, CANVAS_WIDTH, CANVAS_HEIGHT - PADDING);

  // targets
  for (const target of targets) {
    target.display();
  }

  // projectiles
  for (const projectile of projectiles) {
    projectile.display();
    projectile.move();
    // if the instance reaches the top of the canvas remove the matching item from the array
    if (projectile.y <= 0) {
      const index = projectiles.findIndex(match => match === projectile);
      projectiles.splice(index, 1);
    }

    // loop through the targets and if the projectile collides with the target remove it from the matching array
    for (const target of targets) {
      if (projectile.collides(target)) {
        const index = targets.findIndex(match => match === target);
        targets.splice(index, 1);

        // add a new target
        addTarget();
      }
    }
  }

  // tank
  tank.display();

  // following a key press on the appropriate keys move the tank in the prescribed direction
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    tank.move('left');

    // add a class of active on the #left button to have the button fully opaque
    buttons.forEach(button => {
      const { id } = button.elt;
      if (id === 'left') {
        button.elt.className = 'active';
      } else {
        button.elt.className = '';
      }
    });
  } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    tank.move('right');

    // add a class of active on the #right button to have the button fully opaque
    buttons.forEach(button => {
      const { id } = button.elt;
      if (id === 'right') {
        button.elt.className = 'active';
      } else {
        button.elt.className = '';
      }
    });
  }

  // if direction holds a truthy value move the tank in the matching direction
  if (direction) {
    tank.move(direction);
  }
}

// following a press on the up key call the function to fire a projectile
function keyPressed() {
  if (keyCode === UP_ARROW || keyIsDown(87)) {
    fireProjectile();
    // add a class of active on the #fire button to have the button fully opaque
    buttons.forEach(button => {
      const { id } = button.elt;
      if (id === 'fire') {
        button.elt.className = 'active';
      } else {
        button.elt.className = '';
      }
    });
  }
}

// reset the opacity of the buttons as the keys are no longer pressed
function keyReleased() {
  buttons.forEach(button => {
    button.elt.className = '';
  });
}

// function to fire a projectile
// add an instance of the projectile class to the defined array
function fireProjectile() {
  const { x } = tank;
  projectiles.push(
    new Projectile(x + CANVAS_WIDTH / 2, CANVAS_HEIGHT - PADDING_TANK)
  );
}

// function to add a target
// add an instance of the target class in the aptly named array
function addTarget() {
  const x = random(TANK_WIDTH / 2 + TARGET_SIZE / 2, CANVAS_WIDTH - TARGET_SIZE / 2 - TANK_WIDTH / 2);
  const y = random(TARGET_SIZE / 2, CANVAS_HEIGHT / 4);
  // specify a shape between three possible values
  let odds = random(0, 3);
  let shape = odds > 2 ? 'rect' : odds > 1 ? 'circle' : 'triangle';
  targets.push(new Target(x, y, shape));
}
