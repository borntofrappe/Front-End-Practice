// target the grid of seats
const seats = document.querySelector('.seats');

const possibleSeats = [
  'available',
  'reserved',
  'selected',
];
const randomSeat = () => possibleSeats[Math.floor(Math.random() * possibleSeats.length)];

// add 10 rows and 10 columns of buttons
for (let row = 0; row < 10; row += 1) {
  for (let column = 0; column < 10; column += 1) {
    const seat = document.createElement('button');
    const possibleSeat = randomSeat();
    seat.innerHTML = `
    <svg class="${possibleSeat}" viewBox="0 0 100 100" width="32" height="32">
      <use href="#${possibleSeat}"></use>
    </svg>
    `;
    seats.appendChild(seat);
  }
}
