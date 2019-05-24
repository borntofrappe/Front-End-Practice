/* script purpose
1. include the 12 numbers in the clock, around the SVG circle
1. rotate the hands of the clock as well as the mask to show the current time in the svg
1. include the current time in the span describing the controls
1. react to a click on the buttons to update the time on the clock and on the buttons also
*/

// utility functions
// function returning the input number as a string _and_ adding a 0 to numbers smaller than 10
const zeroPadded = number => ((number >= 10) ? number.toString() : `0${number}`);

// function taking as input an hour value in the [0-23] range and returning the 12 hours format
const twelveClock = (twentyFourClock) => {
  if (twentyFourClock === 0) {
    return 12;
  } if (twentyFourClock > 12) {
    return twentyFourClock - 12;
  }
  return twentyFourClock;
};

// 1. SVG clock face
const clockFace = document.querySelector('svg g.clock-face');
// add the twelve numbers by rotating, translating and then rotating back text elements
// ! add a zero to the numbers smaller than 10 through the utility function
for (let i = 0; i < 12; i += 1) {
  clockFace.innerHTML += `
    <text
        transform="rotate(${-90 + 30 * (i + 1)}) translate(34 0) rotate(${90 - 30 * (i + 1)})" >
        ${zeroPadded(i + 1)}
    </text>
  `;
}


// SVG & BUTTONS current time
// retrieve the current number of hours, minutes and seconds

const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

// as hours in the 0-23 range, normalize the values in the 1-12 range
const time = {
  hours: twelveClock(hours), // 1-12
  minutes, // 0-59
  seconds, // 0-59
};

const rotation = {
  hours: twelveClock(hours),
  minutes,
  seconds,
};

// use the values to update the svg and the text of the span elements
const entries = Object.entries(time);

entries.forEach(([key, value]) => {
  anime({
    targets: `g.${key}`,
    transform: (key === 'hours') ? `rotate(${-15 + value * 30})` : `rotate(${value * 6})`,
    duration: 2000,
  });

  const span = document.querySelector(`span.control--${key}`);
  span.textContent = zeroPadded(value);
});


// BUTTONS click event
const buttons = document.querySelectorAll('button');


function updateTime(currentTime) {
  const { key, operation } = currentTime;
  const { timeValue, rotationValue } = currentTime;

  const degrees = operation === '+' ? rotationValue + 1 : rotationValue - 1;
  let value = operation === '+' ? timeValue + 1 : timeValue - 1;

  if (key === 'hours') {
    value = value > 12 ? 1 : value === 0 ? 12 : value;
  } else {
    value = value > 59 ? 0 : value < 0 ? 59 : value;
  }

  return { value, degrees };
}


function handleClick() {
  const key = this.parentElement.getAttribute('data-control');
  const operation = this.textContent;
  const timeValue = time[key];
  const rotationValue = rotation[key];

  const currentTime = {
    key,
    operation,
    timeValue,
    rotationValue,
  };
  console.log(rotationValue);
  const { value, degrees } = updateTime(currentTime);

  // update the object
  time[key] = value;
  rotation[key] = degrees;

  // update the position of the matching hand
  anime({
    targets: `g.${key}`,
    transform: (key === 'hours') ? `rotate(${-15 + degrees * 30})` : `rotate(${degrees * 6})`,
    duration: 800,
  });

  const span = document.querySelector(`span.control--${key}`);
  span.textContent = zeroPadded(value);
}

buttons.forEach(button => button.addEventListener('click', handleClick));
