// colors used for the dots
const colors = {
    red: '#E74239',
    blue: '#4284F7',
    green: '#39AD52',
    yellow: '#FFBD00'
}
// array describing the color values
const values = Object.values(colors);

// target the single container
const loading = document.querySelector('.loading');

// absolute position the element in the center of the viewport
loading.style.position = 'absolute';
loading.style.left = '50%';
loading.style.top = '50%';
loading.style.transform = 'translate(-50%, -50%)';
loading.style.width = '100%';
loading.style.height = '100%';
// for each color value add a circle through a div element
values.forEach((color, index) => {
    const dot = document.createElement('div');

    dot.style.width = '26px';
    dot.style.height = '26px';
    dot.style.borderRadius = '50%';
    // use the color from the array of values
    dot.style.background = color;
    // display the dots side by side, absolute positioned in the container
    dot.style.position = 'absolute';
    dot.style.top = '50%';
    dot.style.left = `50%`;
    dot.style.transform = `translateX(${-50 + (index - Math.floor(values.length / 2) + 0.5) * 250}%) translateY(-50%)`;
    dot.classList.add('dot');

    loading.appendChild(dot);
});


// for the animation chain a series of function each with its own purpose
// first animation: translate the dots up and down
function translateDots() {
    anime({
        targets: '.dot',
        easing: 'spring(1, 80, 10, 0)',
        loop: 2,
        duration: 1500,
        // ! remember the dots already have a vertical translation of 50%
        translateY: ['-50%', '0%', '-100%', '-50%'],
        delay: (element, index) => 170 * index,
        // when completed, call the function to increase the height of the dots
        complete: rectangleDots
    });
}

// increase the height of each dot, with a bit of randomness, while reducing the radius of the border
function rectangleDots() {
    anime({
        targets: '.dot',
        height: (element, index) => `${Math.random() * (80 - 50) + 50}px`,
        width: '18px',
        borderRadius: '20px',
        delay: (element, index) => 40 * index,
        // when complete call the function to translate the rounded rectangles vertically
        complete: translateRectangles
    })
}

// move the rectangles up and down, animating the elements in a rather random order
function translateRectangles() {
    anime({
        targets: '.dot',
        easing: 'linear',
        loop: 2,
        duration: 700,
        translateY: ['-50%', '-25%', '-75%', '-50%'],
        delay: (element, index, length) => 60 * Math.floor(Math.random() * length),
        // when complete call the function to circle the rectangles
        complete: dotsRectangles
    })
}

// return the shape back to a circle
function dotsRectangles() {
    anime({
        targets: '.dot',
        height: '26px',
        width: '26px',
        borderRadius: '50%',
        delay: (element, index) => 20 * index,
        // when complete have the dots come together in the center of the container
        complete: centerDots
    })
}

// position the dots side by side, in a 2x2 grid
function centerDots() {
    anime({
        targets: '.dot',
        duration: 1000,
        /*
        the first two items are pushed to the left
        then even elements are pushed to the top
            0 2
            1 3
        */
        translateX: (element, index) => index < 2 ? '-100%' : '0',
        translateY: (element, index) => index % 2 === 0 ? '-100%' : '0',
        // when complete call a function to rotate the entire container
        complete: rotateContainer
    })
}

// rotate the .loading container
function rotateContainer() {
    anime({
        targets: '.loading',
        rotate: '360deg',
        duration: 2000,
        // when complete expand the squares to cover the entirety of the viewport
        complete: expandSquares
    })
}

// increase the width and height of the dots, as to have them occupy the entirety of the viewport
function expandSquares() {
    // scale the dots relative to the container
    anime({
        targets: '.dot',
        width: '50%',
        height: '50%',
        delay: 100,
        duration: 300,
        // set border radius to 0 showing the viewport covered by four colored rectangles
        borderRadius: 0,
        complete: function() {
            const dots = document.querySelectorAll('.dot');
            dots.forEach(dot => {
                dot.style.display = 'flex';
                dot.style.justifyContent = 'center';
                dot.style.alignItems = 'center';

                const heading = document.createElement('h2');
                heading.textContent = dot.style.background;
                heading.style.textShadow = `2px 2px 10px rgba(0, 0, 0, 0.3)`;
                heading.style.transform = 'scale(0)';
                dot.appendChild(heading);
                anime({
                    targets: heading,
                    scale: 1,
                })
            });
        }
    })
}

// initiate the chain of functions calling the first one
translateDots();