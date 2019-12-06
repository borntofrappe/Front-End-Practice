const { Illustration, Ellipse, Shape, Group } = Zdog;

const element = document.querySelector('canvas');

const illustration = new Illustration({
    element,
    dragRotate: true,
});

const letter = new Group({
    addTo: illustration,
})

new Ellipse({
    addTo: letter,
    diameter: 25,
    stroke: 30,
    color: '#fff',
});

new Ellipse({
    addTo: letter,
    diameter: 70,
    stroke: 15,
    color: 'hsl(0, 0%, 15%)',
});

new Ellipse({
    addTo: letter,
    stroke: 15,
    color: 'hsl(0, 0%, 15%)',
});

const leg = new Shape({
    addTo: letter,
    stroke: 15,
    color: 'hsl(0, 0%, 15%)',
    path: [
        { x: -3, y: 35 },
        { x: -3, y: 80 },
        { arc: [
            { x:  -3, y: 95 },
            { x:  -15, y:  95 },
          ]},
    ],
    closed: false,
});
leg.copy({
    scale: { x: -1}
})

new Shape({
    addTo: letter,
    stroke: 15,
    color: 'hsl(0, 0%, 15%)',
    path: [
        { x: 0, y: 60 },
        { x: 30, y: 60 },
    ],
    closed: false,
});

new Shape({
    addTo: letter,
    stroke: 15,
    color: 'hsl(0, 0%, 15%)',
    path: [
        { x: 35, y: 0 },
        { x: 90, y: 0 },
        { x: 65, y: 25 },
    ],
});


let counter = 1;
function animate() {
    counter = counter >= 6.28 ? 0 : counter + 0.05;
    letter.translate.y = Math.cos(counter) * 5;
    letter.translate.x = Math.sin(counter) * 5;
    illustration.updateRenderGraph();
    requestAnimationFrame(animate);
}
animate();

