// target the link element
const link = document.querySelector('a');
// boolean to manage the state of the tooltip
let isShowing = false;

/* function called to update the tooltip
- when the three dots have done animating the function updates the tooltip with the informative text and scales the tooltip up
- when the tooltip is scaled down following the blur/mouseout event the function resets the tooltip's html and removes the inline transform property
*/
function updateTooltip() {
  const tooltip = link.querySelector('.tooltip');
  tooltip.innerHTML = isShowing ? link.getAttribute('data-tip') : Array(3).fill('').map(dot => '<span class="tool">•</span>').join('');
  tooltip.style.transform = isShowing ? 'scale(1)' : '';

  // remove the event listener to be able to fire it once more through the showTooltip/hideTooltip functions
  tooltip.removeEventListener('transitionend', updateTooltip);
}

// function called following the mouseenter/focus events
function showTooltip() {
  // proceed only if the tooltip is not in the process of being shown
  // avoid repetition possibly due to mouseenter/focus overlap
  if (!isShowing) {
    isShowing = true;

    // target the .tooltip container, the nested span elements
    const tooltip = link.querySelector('.tooltip');
    const spans = tooltip.querySelectorAll('span');
    // identify the last span (last to be animated)
    const lastSpan = spans[spans.length - 1];

    // when the last span has done animating, scale the tooltip back to 0
    lastSpan.addEventListener('animationend', () => {
      tooltip.style.transform = 'scale(0)';
      // as the tooltip finishes its transition, update its text with the data-tip attribute
      // scale it back to full size
      tooltip.addEventListener('transitionend', updateTooltip);
    });
  }
}

// function called following the mouseout/blur events
function hideTooltip() {
  // ! proceed only if the tooltip is in the process of being shown
  if (isShowing) {
    isShowing = false;

    // target the tooltip
    const tooltip = link.querySelector('.tooltip');
    // scale the tooltip to 0
    tooltip.style.transform = 'scale(0)';
    // as the tooltip disappears from sight re-populate the container with three span describing the dots
    tooltip.addEventListener('transitionend', updateTooltip);
  }
}

link.addEventListener('focus', showTooltip);
link.addEventListener('mouseenter', showTooltip);

link.addEventListener('blur', hideTooltip);
link.addEventListener('mouseout', hideTooltip);
