const canvas = document.querySelector('canvas');
const { width, height } = canvas;
const strokeWidth = 20;
const color = 'hsl(0, 0%, 100%)';

const illustration = new Zdog.Illustration({
    element: canvas,
    translate: -500,
});

const plane = new Zdog.Anchor({
    addTo: illustration,
    scale: {x: 0, y: 0 }
})

new Zdog.Shape({
    addTo: plane,
    path: [{ x: -48, y: 44 }, { x: 48, y: 44 }, { x: 0, y: -44 }],
    stroke: strokeWidth,
    color,
    translate: { x: -190 },
})

new Zdog.Shape({
    addTo: plane,
    path: [{ x: -42, y: -42 }, { x: -42, y: 42 }, { x: 42, y: 42 }, { x: 42, y: -42 }],
    stroke: strokeWidth,
    color,
    translate: { x: -62 },
})

new Zdog.Shape({
    addTo: plane,
    path: [{ x: -40, y: -40 }, { x: 40, y: 40 }, { move: { x: 40, y: -40 }}, { x: -40, y: 40 }],
    stroke: strokeWidth,
    color,
    translate: { x: 65 },
})

new Zdog.Ellipse({
    addTo: plane,
    diameter: 88,
    stroke: strokeWidth,
    color,
    translate: { x: 190 },
})


function animate() {
    illustration.updateRenderGraph();
    plane.scale.x += 0.005;
    plane.scale.y += 0.005;
    if(plane.scale.x <= 1 && plane.scale.y <= 1) {
            requestAnimationFrame(animate);
        } else {
            plane.scale.x = 1;
    plane.scale.y = 1;
        }
    }
    
    animate();