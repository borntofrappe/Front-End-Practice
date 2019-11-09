// INPUT DATA
// https://en.wikipedia.org/wiki/Template:Monopoly_board_layout
// the properties are described by objects with a fill
const board = [
    {
      name: 'Go (collect $200)',
    },
    {
      name: 'Mediterranean Avenue $60',
      fill: '#8B4513',
    },
    {
      name: 'Community Chest',
    },
    {
      name: 'Baltic Avenue $60',
      fill: '#8B4513',
    },
    {
      name: 'Income Tax (pay $200)',
    },
    {
      name: 'Reading Railroad $200',
    },
    {
      name: 'Oriental Avenue $100',
      fill: '#87CEEB',
    },
    {
      name: 'Chance',
    },
    {
      name: 'Vermont Avenue $100',
      fill: '#87CEEB',
    },
    {
      name: 'Connecticut Avenue $120',
      fill: '#87CEEB',
    },
    {
      name: 'In Jail/Just Visiting',
    },
    {
      name: 'St. Charles Place $140',
      fill: '#9932CC',
    },
    {
      name: 'Electric Company $150',
    },
    {
      name: 'States Avenue $140',
      fill: '#9932CC',
    },
    {
      name: 'Virginia Avenue $160',
      fill: '#9932CC',
    },
    {
      name: 'Pennsylvania Railroad $200',
    },
    {
      name: 'St. James Place $180',
      fill: '#FFA500',
    },
    {
      name: 'Community Chest',
    },
    {
      name: 'Tennessee Avenue $180',
      fill: '#FFA500',
    },
    {
      name: 'New York Avenue $200',
      fill: '#FFA500',
    },
    {
      name: 'Free Parking',
    },
    {
      name: 'Kentucky Avenue $220',
      fill: '#FF0000',
    },
    {
      name: 'Chance',
    },
    {
      name: 'Indiana Avenue $220',
      fill: '#FF0000',
    },
    {
      name: 'Illinois Avenue $240',
      fill: '#FF0000',
    },
    {
      name: 'B&O Railroad $200',
    },
    {
      name: 'Atlantic Avenue $260',
      fill: '#FFFF00',
    },
    {
      name: 'Ventnor Avenue $260',
      fill: '#FFFF00',
    },
    {
      name: 'Water Works $150',
    },
    {
      name: 'Marvin Gardens $280',
      fill: '#FFFF00',
    },
    {
      name: 'Go To Jail',
    },
    {
      name: 'Pacific Avenue $300',
      fill: '#008000',
    },
    {
      name: 'North Carolina Avenue $300',
      fill: '#008000',
    },
    {
      name: 'Community Chest',
    },
    {
      name: 'Pennsylvania Avenue $320',
      fill: '#008000',
    },
    {
      name: 'Short Line $200',
    },
    {
      name: 'Chance',
    },
    {
      name: 'Park Place $350',
      fill: '#0000FF',
    },
    {
      name: 'Luxury Tax (pay $100)',
    },
    {
      name: 'Boardwalk $400',
      fill: '#0000FF',
    },
  ];

// SVG CODE
// utility function creating the svg code for the properties
function svgProperty(name, fill, x, y) {
return `
    <g transform="translate(${x * 100} ${y * 100})">
        <rect x="0" y="0" width="100" height="100" stroke="hsl(0, 0%, 0%)" stroke-width="5" fill="hsl(0, 0%, 100%)" />
        <g>
            <rect x="2.5" y="2.5" width="95" height="20" stroke="none" fill="${fill}" />
            <g transform="translate(50 40)">
                <text text-anchor="middle" font-size="12">
                ${name
                .split(' ')
                .map(
                    (line, num) =>
                    `<tspan x="0" y="${num * 15}">${line}</tspan>`
                )
                .join('')}
                </text>
            </g>
        </g>
    </g>
    `;
}
// utility function creating the svg code for the other sections
function svgSection(name, x, y) {
return `
    <g transform="translate(${x * 100} ${y * 100})">
        <rect x="0" y="0" width="100" height="100" stroke="currentColor" stroke-width="5" fill="hsl(0, 0%, 100%)" />

        <g transform="translate(50 50)">
            <text text-anchor="middle" dominant-baseline="middle">
            ${name
            .split(' ')
            .map(
                (line, num, { length }) =>
                `<tspan x="0" y="${num * 15 -
                    ((length - 1) / 2) * 15}">${line}</tspan>`
            )
            .join('')}
            </text>
        </g>
    </g>
    `;
}

// utility function returning the x and y values of a section in the overall board
// ! remember to multiply the values by 100 to consider the full width / height of the individual elements
function translateSection(index) {
const i = index % board.length;
if (i < 11) {
    return { x: i * -1 };
}
if (i < 21) {
    return { x: -10, y: (i - 10) * -1 };
}
if (i < 31) {
    return { x: -10 + (i - 20), y: -10 };
}
return { y: -10 + (i - 30) };
}

// target the parent svg and add a group element for each element in the board
const svg = document.querySelector('svg');

svg.innerHTML = board
.map(({ name, fill }, i) => {
    const { x = 0, y = 0 } = translateSection(i);
    return fill ? svgProperty(name, fill, x, y) : svgSection(name, x, y);
})
.join('');


// ZDOG code
// based on a previous project
//   https://codepen.io/borntofrappe/pen/PooeQvG
const { Illustration, Group, Anchor, Rect, TAU, Ellipse } = Zdog;
const element = document.querySelector('canvas');
const illustration = new Illustration({
    element,
});

// anchor point used for the rotation
const dice = new Anchor({
    addTo: illustration,
});

// group describing the faces through rounded rectangles
const faces = new Group({
    addTo: dice,
});
// due to the considerable stroke, it is possible to fake the dice using four faces only
const face = new Rect({
    addTo: faces,
    stroke: 50,
    width: 50,
    height: 50,
    color: 'hsl(0, 0%, 100%)',
    translate: {
        z: -25,
    },
});

// rotate the faces around the center
face.copy({
    rotate: {
        x: TAU / 4,
    },
    translate: {
        y: 25,
    },
});

face.copy({
    rotate: {
        x: TAU / 4,
    },
    translate: {
        y: -25,
    },
});

face.copy({
    translate: {
        z: 25,
    },
});

// include the dots repeating as many shapes/groups as possible
// ! when copying an element be sure to reset the rotation/translation of the copied shape
const one = new Ellipse({
    addTo: dice,
    diameter: 15,
    stroke: false,
    fill: true,
    color: 'hsl(0, 0%, 0%)',
    translate: {
        z: 50,
    },
});

const two = new Group({
    addTo: dice,
    rotate: {
        x: TAU / 4,
    },
    translate: {
        y: 50,
    },
});

one.copy({
    addTo: two,
    translate: {
        y: 20,
    },
});

one.copy({
    addTo: two,
    translate: {
        y: -20,
    },
});

const three = new Group({
    addTo: dice,
    rotate: {
        y: TAU / 4,
    },
    translate: {
        x: 50,
    },
});

one.copy({
    addTo: three,
    translate: {
        z: 0,
    },
    });

    one.copy({
    addTo: three,
    translate: {
        x: 20,
        y: -20,
        z: 0,
    },
});

one.copy({
    addTo: three,
    translate: {
        x: -20,
        y: 20,
        z: 0,
    },
});

const four = new Group({
    addTo: dice,
    rotate: {
        y: TAU / 4,
    },
    translate: {
        x: -50,
    },
});

two.copyGraph({
    addTo: four,
    rotate: {
        x: 0,
    },
    translate: {
        x: 20,
        y: 0,
    },
});

two.copyGraph({
    addTo: four,
    rotate: {
        x: 0,
    },
    translate: {
        x: -20,
        y: 0,
    },
});

const five = new Group({
    addTo: dice,
    rotate: {
        x: TAU / 4,
    },
    translate: {
        y: -50,
    },
});

four.copyGraph({
    addTo: five,
    rotate: {
        y: 0,
    },
    translate: {
        x: 0,
    },
});

one.copy({
    addTo: five,
    translate: {
        z: 0,
    },
});

const six = new Group({
    addTo: dice,
    translate: {
        z: -50,
    },
});

two.copyGraph({
    addTo: six,
    rotate: {
        x: 0,
        z: TAU / 4,
    },
    translate: {
        x: 0,
        y: 0,
    },
});

four.copyGraph({
    addTo: six,
    rotate: {
        y: 0,
    },
    translate: {
        x: 0,
    },
});

// show the static illustration
illustration.updateRenderGraph();


// BUTTON CODE
// logic following a click on the button, to animate first the illustration, than the svg

const button = document.querySelector('button');

// object animated through anime.js to update the illustration
const rotation = {
    x: 0,
    y: 0,
    z: 0,
};

// array describing the rotation necessary to highlight the difference faces
const rotate = [
{},
{
    x: TAU / 4,
},
{
    y: TAU / 4,
},
{
    y: (TAU * 3) / 4,
},
{
    x: (TAU * 3) / 4,
},
{
    x: TAU / 2,
},
];

// utility function returning a positive integer up to a maximum value
const randomInt = (max = 10) => Math.floor(Math.random() * max);

// variable describing the position in the board
let position = 1;

// function updating the viewbox according to the number described by the dice
function crawlSVG(roll) {
    // the idea is to build an array of string describing viewBox values
    // each string using the x and y coordinates described by the translateSection function
    const steps = Array(roll + 1)
        .fill()
        .map((item, index) => translateSection(position + index));
    position += roll + 1;

    // ! include the existing viewBox to avoid a "jump" toward the first section
    const viewBox = [
        svg.getAttribute('viewBox'),
        ...steps.map(({ x = 0, y = 0 }) => `${x * 100} ${y * 100} 100 100`),
    ];
    anime({
        targets: svg,
        viewBox,
        duration: 1000,
        easing: 'easeOutQuad',
        // once the animation is complete allow to click the button once more
        complete() {
        button.removeAttribute('disabled');
        },
    });
}

// function animating the dice according to the number received as input
function rollDice(side) {
    // disable the button to avoid animating the dice before the board has had a chance to update itself
    button.setAttribute('disabled', true);

    const { x = TAU, y = TAU } = rotate[side];
    // animate the object toward the input values
    anime({
        targets: rotation,
        // ! increment the input rotation with a random number of additional rotations
        x: x + TAU * randomInt(),
        y: y + TAU * randomInt(),
        z: TAU * randomInt(),
        duration: 2000,
        // while the object is being updated update the rotation of the dice
        // ! remember to update the graphic with the updateRenderGraph() method
        update() {
            dice.rotate.x = rotation.x;
            dice.rotate.y = rotation.y;
            dice.rotate.z = rotation.z;
            illustration.updateRenderGraph();
        },
        // as the animation completes, call the function to update the viewBox
        complete() {
            crawlSVG(side);
        },
    });
}

// following a click on the button call the function to roll the dice with a random value from the rotate array
button.addEventListener('click', () => rollDice(randomInt(rotate.length)));
