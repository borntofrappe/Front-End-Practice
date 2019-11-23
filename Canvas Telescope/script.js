const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

// object describing the position of the clip
const clip = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };

// drawing function
function draw() {
    const { width, height } = canvas;

    // clear the canvas from the previous drawing
    context.clearRect(0, 0, width, height);

    // ! restore the state to avoid having the previous clip persist on the canvas
    context.save();
    // clip reducing the visible area through a circle
    const radius = Math.min(width / 3, 200);
    context.beginPath();
    context.arc(clip.x, clip.y, radius, 0, Math.PI * 2);
    context.closePath();
    context.clip();

    // linear gradient used as the canvas's background
    const gradient = context.createLinearGradient(
        width / 2,
        0,
        width / 2,
        height
      );
    gradient.addColorStop(0, 'hsl(210, 90%, 15%)');
    gradient.addColorStop(1, 'hsl(220, 80%, 5%)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);

    context.restore();

}

// resize the canvas to cover the available width and height
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// animation loop calling the draw function at every frame
function animate() {
    draw();
    requestAnimationFrame(animate);
}

// immediately call the functions to size the canvas and animate the drawing
resize();
animate();


// update the position of the clip following the mousemove event
function updateClip({ clientX: x, clientY: y }) {
    clip.x = x;
    clip.y = y;
}

window.addEventListener('mousemove', updateClip);
window.addEventListener('resize', resize);


