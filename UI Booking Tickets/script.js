// target the grid of seats
const seats = document.querySelector('.seats');

// possible values to differentiate the seats
const possibleSeats = [
  'available',
  'reserved',
  'selected',
];
// function to return a random item from the possibleSeats array
const randomSeat = () => possibleSeats[Math.floor(Math.random() * possibleSeats.length)];

// add 88 seats as buttons with the svg icon matching the possible seat
for (let i = 0; i < 88; i += 1) {
  const seat = document.createElement('button');
  const possibleSeat = randomSeat();
  seat.innerHTML = `
    <svg class="${possibleSeat}" width="20" height="20">
      <use href="#${possibleSeat}"></use>
    </svg>
    `;
  seats.appendChild(seat);
}
