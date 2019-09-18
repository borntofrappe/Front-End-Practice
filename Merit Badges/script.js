// include multiple copies of the element created for the border around the graphic
const border = document.querySelector('#border');
for (let i = 0; i < 360; i += 4) {
  border.innerHTML += `<use href="#rect" transform="rotate(${i}) translate(0 -43)"></use>`;
}
