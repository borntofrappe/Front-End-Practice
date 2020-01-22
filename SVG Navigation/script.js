const button = document.querySelector('button');
const nav = document.querySelector('nav');

// toggle a class of open on the button and nav element
button.addEventListener('click', () => {
  nav.classList.toggle('open');
  button.classList.toggle('open');
  const isOpen = nav.classList.contains('open');

  // animate the text path to move in/out
  anime({
    targets: 'textPath',
    startOffset: (d, i) => {
      if (isOpen) {
        return i % 2 === 0 ? '60%' : '40%';
      }
      return i % 2 === 0 ? '0%' : '100%';
    },
    duration: 2500,
    // slight delay for the opening animation, to follow the hamburger menu
    delay: isOpen ? 200 + anime.stagger(50) : anime.stagger(50),
    // considering the class on the nav element, toggle its visibility to prevent focus events
    begin: () => {
      if (nav.classList.contains('open')) {
        nav.style.visibility = 'visible';
      }
    },
    complete: () => {
      if (!nav.classList.contains('open')) {
        nav.style.visibility = 'hidden';
      }
    },
  });
});
