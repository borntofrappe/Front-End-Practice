// target the path elements in the main svg
const lines = document.querySelectorAll('svg#drawing .line');

// number of seconds for the duration of the removeOffset animation
const duration = 2;

// loop through every element and set stroke-dash properties to hide the stroke
lines.forEach((line, index) => {
  const length = Math.ceil(line.getTotalLength());
  line.setAttribute('stroke-dasharray', length);
  line.setAttribute('stroke-dashoffset', length);
  line.style.animation = `removeOffset ${duration}s ${duration * index}s linear forwards`;
});

// once the removeOffset animation for the last element is complete remove the drawing lines
const delay = lines.length * duration;
const timeoutID = setTimeout(() => {
  [...lines].slice(0, -1).forEach((line) => {
    // ! by setting a new animation the previous one is ovewritten, and the dashoffset property goes back to its initial value, hiding the path elements immediately
    line.setAttribute('stroke-dashoffset', 0);
    line.style.animation = 'eraseLine 0.5s 1s linear both';
  });
  clearTimeout(timeoutID);
}, delay * 1000);
