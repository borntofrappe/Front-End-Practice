# SVG Unnerving Progress

## [Live Demo](https://codepen.io/borntofrappe/full/LKGWgp)

## Goal

Create a progress bar out of a thermometer and animate its appearance through anime.js.

## Notes

The project was originally scheduled to use the Web Animation API. I managed to make it work, changing the value of the `transform` property, but unfortunately the code seemed to run as predicted only on Chrome.

For posterity, here's the chrome-working code.

```js
// target the clip and describe the number of milliseconds the animation should take
const clip = document.querySelector('svg #clip rect');
const duration = Math.floor(Math.random() * 5 + 5) * 1000;

// array object describing the values ultimately picked up by the rectangle
const keyframes = [
  {
    transform: 'translate(0, 20px)',
  },
  {
    transform: 'translate(0, 0px)',
  },
  {
    transform: 'translate(0, 7px)',
  }
];

// object describing the option of the animation
const timing = {
  duration,
  easing: 'ease-in-out',
  fill: 'forwards',
};

// animate the clip with the first two keyframes
// ! store a reference to the animation to react when the animation is actually complete
const raiseTemperature = clip.animate(keyframes.slice(0,2), timing);

// function called when the animation is complete
// animate the clip to and from the latter two keyframes
// ! update the timing object to make the animation run indefinitely
function wobbleTemperature() {
  clip.animate(keyframes.slice(1), Object.assign(timing, {
    duration: duration / 2,
    iterations: Infinity,
    direction: 'alternate'
  }));
}

// when tge first animation is complete run the second
raiseTemperature.onfinish = wobbleTemperature;
```

If anything, it gave me an excellent chance to use `Object.assign`.