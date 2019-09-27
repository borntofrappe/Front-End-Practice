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
}

// initialize the tank
const tank = new Tank();
// set up an array for the projectiles
const projectiles = [];

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

// in the draw function detail the projectiles and tank above a solid background
function draw() {
  background('#F1DA4E');
  stroke('#323230');
  strokeWeight(6);
  line(0, TANK_Y + TANK_HEIGHT, CANVAS_WIDTH, TANK_Y + TANK_HEIGHT);

  // display each instance of the projectile class stored in the array
  for (const projectile of projectiles) {
    projectile.display();
    projectile.move();
    // if the instance reaches the top of the canvas remove the matching item from the array
    if (projectile.y <= 0) {
      const index = projectiles.findIndex(shot => shot === projectile);
      projectiles.splice(index, 1);
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
