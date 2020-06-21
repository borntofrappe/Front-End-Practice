/*
after checking the for prefers-reduced-motion media query

hide **and then** show the SVG elements behind the logo
*/
const { matches } = window.matchMedia('prefers-reduced-motion: reduce');

if (!matches) {
  const text = document.querySelector('svg text');
  // it seems it is necessary to reiterate the textLength attribute of the parent text
  const textLength = text.getAttribute('textLength');
  text.innerHTML = text.textContent
    .split('')
    .map(letter => `<tspan textLength="${textLength}">${letter}</tspan>`)
    .join('');

  const animation = anime.timeline();

  animation.add({
    targets: 'text tspan',
    opacity: [0, 1],
    duration: 425,
    easing: 'easeInOutQuad',
    delay: (d, i) => 150 * i + 500,
  });

  animation.add(
    {
      targets: 'mask circle',
      scale: [1, 0],
      duration: 2000,
      easing: 'easeInOutSine',
    },
    500
  );

  window.addEventListener('click', () => animation.restart());
}
