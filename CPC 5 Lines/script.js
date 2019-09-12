const colors = [['#000000', '#FFFFFF'], ['#E66241', '#E6F1D9'], ['#D51C56', '#080F2B'], ['#FFD35A', '#435783'], ['#315653', '#E08B81']];
document.querySelector('body').innerHTML += colors.map(([color, background]) => `
  <svg viewBox="0 0 400 400" style="background: ${background}; color: ${color}"><use href="#g"></use></svg>
  <svg viewBox="0 0 400 400" style="background: ${color}; color: ${background}"><use href="#g"></use></svg>
`).join('');