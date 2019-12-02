const { Illustration, Ellipse, Shape, Group, Anchor } = Zdog;

const element = document.querySelector('canvas');

const illustration = new Illustration({
    element,
    dragRotate: true,
});


const i = new Group({
    addTo: illustration,
})

new Shape({
    addTo: i,
    stroke: 15,
    path: [{ x: 0, y: -60 }, { x: 0, y: 60 }]
})


new Ellipse({
    addTo: i,
    diameter: 25,
    stroke: 25,
    color: '#fff',
});


new Ellipse({
    addTo: i,
    diameter: 60,
    stroke: 15,
    color: '#3E3A39',
});

new Ellipse({
    addTo: i,
    stroke: 15,
    color: '#3E3A39',
});


function animate() {
    illustration.updateRenderGraph();
    requestAnimationFrame(animate);
}
animate();