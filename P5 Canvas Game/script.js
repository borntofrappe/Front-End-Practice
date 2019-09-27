// constants used throughout the code
const CANVAS_WIDTH = 650;
const CANVAS_HEIGHT = 400;

const TANK_X = CANVAS_WIDTH / 2;
const TANK_Y = CANVAS_HEIGHT - 30;
const TANK_WIDTH = 70;
const TANK_HEIGHT = 14;
const TANK_SPEED = 5;

const PROJECTILE_WIDTH = 5;
const PROJECTILE_HEIGHT = 12;
const PROJECTILE_SPEED = 5;

const TARGET_SIZE = 25;

// tank class
class Tank {
  constructor() {
    this.x = TANK_X;
    this.y = TANK_Y;
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
    rect(x, y, width, height);
    // the appendages are hard coded above the rectangle
    rect(x, y - (height / 2 + 2), width * 0.8, 4);
    rect(x, y - (height / 2 + 2 + 2 + 5), width * 0.2, 10);
    rect(x, y - (height / 2 + 2 + 2 + 5 + 5 + 2), width * 0.08, 4);
  }

  // through the move function change the x coordinate of the shape, using the input direction
  move(direction) {
    const d = direction === 'right' ? 1 : -1;
    const dx = this.x + d * this.speed;
    // limit the x coordinate to the canvas plus minus the size of the tank
    this.x = max(this.width / 2, min(dx, width - this.width / 2));
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
  collides(target) {
    const { x: xTarget, y: yTarget, size: sizeTarget } = target;
    const { x, y, width, height } = this;
    if (x - width / 2 > xTarget && x + width / 2 < xTarget + sizeTarget) {
      if (y - height / 2 > yTarget && y + height / 2 < yTarget + sizeTarget) {
        return true;
      }
    }
    return false;
  }
}

// target class, used to create elements in the top fourth of the canvas
class Target {
  constructor(x, y) {
    // horizontally spanning the width of the canvas
    this.x = x;
    this.y = y;
    this.size = TARGET_SIZE;
  }

  // through the display function describe a square
  // for a more compelling game consider drawing a more complex shape
  display() {
    rectMode(CORNER);
    fill('#323230');
    noStroke();
    rect(this.x, this.y, this.size, this.size);
  }
}

// initialize the tank
const tank = new Tank();
// set up an array for the projectiles
const projectiles = [];
// set up an array for the targets
let targets = [];

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  //   add a series of targets to the matching array
  targets = Array(5)
    .fill()
    .map(() => {
      const x = random(0, CANVAS_WIDTH - TARGET_SIZE);
      const y = random(0, CANVAS_HEIGHT / 4);
      return new Target(x, y);
    });
}

// in the draw function detail the projectiles and tank above a solid background
function draw() {
  background('#F1DA4E');
  stroke('#323230');
  strokeWeight(6);
  line(0, TANK_Y + TANK_HEIGHT, CANVAS_WIDTH, TANK_Y + TANK_HEIGHT);

  // display each instance of the target class
  for (const target of targets) {
    target.display();
  }

  // display each instance of the projectile class
  for (const projectile of projectiles) {
    projectile.display();
    projectile.move();
    // if the instance reaches the top of the canvas remove the matching item from the array
    if (projectile.y <= 0) {
      const index = projectiles.findIndex(match => match === projectile);
      projectiles.splice(index, 1);
    }

    // loop through the targets and if an overlap with the projectile occurs remove the target from the matching array
    for (const target of targets) {
      if (projectile.collides(target)) {
        const index = targets.findIndex(match => match === target);
        targets.splice(index, 1);

        // add a new target
        // it'd be better to add targets with a delay
        const x = random(0, CANVAS_WIDTH - TARGET_SIZE);
        const y = random(0, CANVAS_HEIGHT / 4);
        targets.push(new Target(x, y));
      }
    }
  }

  // display the instance of the tank
  tank.display();

  // following the appropriate keys move the tank in the prescribed direction
  if (keyIsDown(LEFT_ARROW)) {
    tank.move('left');
  } else if (keyIsDown(RIGHT_ARROW)) {
    tank.move('right');
  }
}

// folowing a press on the up key add an instance of the projectile class to the defined array
function keyPressed() {
  if (keyCode === UP_ARROW) {
    const { x, y } = tank;
    projectiles.push(new Projectile(x, y));
  }
}
