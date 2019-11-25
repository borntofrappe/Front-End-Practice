const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

// array describing the particles drawn on the canvas to fake a miniscule background
const particles = [];
for (let x = 0; x < window.innerWidth; x += 20) {
    for (let y = 0; y < window.innerHeight; y += 20) {
        const radius = Math.random();
        particles.push({
            x,
            y,
            radius,
        });
    }
}

const clip = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
}
// function drawing the clipped canvas at every frame
function draw() {
    const { width, height } = canvas;
    context.clearRect(0, 0, width, height);


    context.save();

    // following a circle describing the clip, include the particles and other shapes populating the viewport
    const radius = Math.min(150, width / 2);
    context.lineWidth = 20;
    const { x, y } = clip;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.closePath();
    context.clip();
    context.fillStyle = 'hsl(0, 0%, 100%)';
    context.fill();

    // populate viewport here
    particles.forEach(particle => {
        context.fillStyle = 'hsl(0, 0%, 0%)';
        const { x, y, radius} = particle;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.closePath();
        context.fill();

    });


    // circle fabricating the lens of the microscope
    context.strokeStyle = 'hsl(0, 0%, 5%)';
    context.fillStyle = 'hsla(0, 0%, 0%, 0.05)';
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.closePath();
    context.stroke();
    context.fill();

    context.restore();

    requestAnimationFrame(draw);
}


// function following the mousemove event to update the position of the clip
function updateClip({clientX: x, clientY: y}) {
    clip.x = x;
    clip.y = y;
}

// function called as the project loads and whenever the viewport changes in size
function resize() {
    // resize the canvas to cover the available width
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
}
window.addEventListener('resize', () => resize());
window.addEventListener('mousemove', updateClip);

resize();
