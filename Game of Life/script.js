// split the heading to include one tile for each letter
const target = document.querySelector('h1');
target.setAttribute('aria-label', target.textContent);

Splitting({ target }).forEach(({ words, chars }) => {
  words.forEach(word => {
    word.setAttribute('aria-hidden', 'true');
  });
  chars.forEach((char, index, { length }) => {
    char.style.padding = '0.25rem 1rem';
    char.style.background = `hsl(${280 - (295 / length) * index}, 65%, 50%)`;
    /* for each character add a border with opposing colors for the top-left and bottom-right sides */
    char.style.border = '5px inset';
    char.style.borderColor =
      'hsla(0, 0%, 100%, 0.25) hsla(0, 0%, 0%, 0.15) hsla(0, 0%, 0%, 0.15) hsla(0, 0%, 100%, 0.25)';
  });
});
