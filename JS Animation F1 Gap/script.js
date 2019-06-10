// retrieve the elements making up the cars
const cars = document.querySelectorAll('svg.gap use');
// retrieve the height of the svg container
const { height } = document.querySelector('svg.gap').getBoundingClientRect();

// the idea is to animate the cars with a series of keyframes
// each keyframe uses the transform property with a specific value for translateY
// starting a 0 and up to half the height of the container

// function to generate a random translation value
const randomTranslate = () => Math.floor(Math.random() * (height / 2));
// function to generate a pre-established number of keyframes with a random vertical translation
// the keyframes are included in the animate() function as an array of objects
const randomKeyframes = (numberKeyframes = 10) => Array(numberKeyframes).fill('').map(item => ({ transform: `translateY(${randomTranslate()}px)` }));

// object describing the animation properties (duration, timing-function, fill-mode)
const timing = {
  duration: 10000,
  easing: 'ease-in-out',
  fill: 'forwards',
};

// animate each car with a random series of keyframes and the selected timing object
// ! start with a translateY() value of 0 and end at 0 only for one of the two cars
const winner = Math.floor(Math.random() * 2);
cars.forEach((car, index) => {
  const keyframes = [
    { transform: 'translateY(0px)' },
    ...randomKeyframes(),
    { transform: `translateY(${winner === index ? 0 : randomTranslate()}px)` },
  ];
  car.animate(keyframes, timing);
});
