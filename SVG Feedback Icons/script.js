// target the button element and the svg icons
const button = document.querySelector('button');
const icons = document.querySelectorAll('svg');

// create an array describing the possible states of the button
const options = [
  // starting with the text and color of the button
  {
    value: button.innerText.toLowerCase(),
    color: getComputedStyle(button).backgroundColor,
  },
  // continuing with the SVG elements, using their class name and color of the path elements
  ...[...icons].map(icon => ({
    value: icon.className.baseVal,
    color: icon.querySelector('g path').getAttribute('stroke'),
    icon,
  })),
];
// console.log(options);

// function to animate the icons
function animateIcon(icon) {
  // show the SVG icons updating the default's opacity and visibility
  icon.style.opacity = 1;
  icon.style.visibility = 'visible';

  // animate the details of each icon appropriately
  const { baseVal } = icon.className;
  if (baseVal === 'correct') {
    // for the correct icon animate the path element to progressively show a checkmark
    const check = icon.querySelector('g path');
    // out of the d attribute retrieve the length of the line elements making up the checkmark
    // this to draw in the path and show the final portion
    const dCheck = check.getAttribute('d');
    const linesRegex = /l.+/gi;
    const dLines = dCheck.match(linesRegex)[0];

    const linesPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    linesPath.setAttribute('d', `M 0 0 ${dLines}`);
    const linesLength = linesPath.getTotalLength();
    // retrieve the total length of the path to completely hide it from view
    const length = check.getTotalLength();
    check.setAttribute('stroke-dasharray', length);
    check.setAttribute('stroke-dashoffset', length);

    // after a brief delay animate the path to show the checkmark
    const showTimeout = setTimeout(() => {
      check.style.transition = 'stroke-dashoffset 1s cubic-bezier(0.22,0.8,0.67,1)';
      check.setAttribute('stroke-dashoffset', -length + linesLength * 0.7);

      // once the transition is complete remove it to start anew if the button is continuously clicked
      const resetTimeout = setTimeout(() => {
        check.style.transition = 'none';
        clearTimeout(resetTimeout);
      }, 1000);
      clearTimeout(showTimeout);
    }, 300);

    // ! the same process of resetting the transition is applied to all icons
  } else if (baseVal === 'warning') {
    // for the warning icon animate the path element to show it completely
    // animate the circle element to show it increasing in radius
    const exclamation = icon.querySelector('g path');
    // hide the element
    const length = exclamation.getTotalLength();
    exclamation.setAttribute('stroke-dasharray', length);
    exclamation.setAttribute('stroke-dashoffset', length);

    // retrieve the circle making up the exclamation point
    const point = icon.querySelector('g circle');
    // hide the element
    const r = point.getAttribute('r');
    point.setAttribute('r', 0);

    // after a brief delay animate the path and the circle element
    const showTimeout = setTimeout(() => {
      exclamation.style.transition = 'stroke-dashoffset 0.3s cubic-bezier(0.22,0.8,0.67,1)';
      exclamation.setAttribute('stroke-dashoffset', 0);

      point.style.transition = 'r 0.2s cubic-bezier(.2,.8,.81,1.6)';
      point.style.transitionDelay = '0.15s';
      point.setAttribute('r', r);

      const resetTimeout = setTimeout(() => {
        exclamation.style.transition = 'none';
        point.style.transition = 'none';
        clearTimeout(resetTimeout);
      }, 1000);
      clearTimeout(showTimeout);
    }, 300);
  } else {
    // retrieve the group element describing the x sign
    const groupX = icon.querySelector('g');
    // hide it by default
    groupX.style.opacity = 0;
    // after a brief delay show the path with a shaky translation

    const showTimeout = setTimeout(() => {
      groupX.style.transition = 'all 0.3s cubic-bezier(0.22,0.8,0.67,1)';
      groupX.style.opacity = 1;

      // horrendous series of timeouts to have the shake from right to left, and back
      const shakeOne = setTimeout(() => {
        groupX.style.transform = 'translateX(3.5px)';
        clearTimeout(shakeOne);
      }, 75);
      const shakeTwo = setTimeout(() => {
        groupX.style.transform = 'translateX(-3.5px)';
        clearTimeout(shakeTwo);
      }, 150);
      const ShakeThree = setTimeout(() => {
        groupX.style.transform = 'translateX(2px)';
        clearTimeout(ShakeThree);
      }, 225);
      const shakeFour = setTimeout(() => {
        groupX.style.transform = 'translateX(-2px)';
        clearTimeout(shakeFour);
      }, 300);
      const shakeFive = setTimeout(() => {
        groupX.style.transform = 'translateX(0px)';
        clearTimeout(shakeFive);
      }, 375);
      const resetTimeout = setTimeout(() => {
        groupX.style.transition = 'none';
        clearTimeout(resetTimeout);
      }, 1000);
      clearTimeout(showTimeout);
    }, 300);
  }
}

// function called when a click is registered on the button
// loop through the options on the basis of the current text described by the button
function submitOption() {
  const startingValue = button.innerText.toLowerCase();
  const startingIndex = options.findIndex(({ value }) => value === startingValue);
  const { value, color, icon } = (startingIndex + 1 === options.length) ? options[0] : options[startingIndex + 1];

  // if the array provide an icon, call the function to animate the specific icon
  if (icon) {
    animateIcon(icon);
  } else {
    // else loop through the svg icons and hide them back
    icons.forEach((svg) => {
      svg.style.opacity = 0;
      svg.style.visibility = 'hidden';
    });
  }

  // in both instances update the button in text and color to match the new value
  button.textContent = value;
  button.style.backgroundColor = color;
}
button.addEventListener('click', submitOption);
