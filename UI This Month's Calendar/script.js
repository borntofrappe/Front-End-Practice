const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// right now
const date = new Date();

// this month
const month = date.getMonth();

// go to the first of the month
date.setUTCDate(0);
// which day was it?
// 0-6 starting on Sunday
const day = date.getDay();

// go to the following month
date.setMonth(month + 1);
// go to the previous day
date.setDate(date.getDate() - 1)
// how many days?
// 0-31
const days = date.getDate();

// markup
const root = document.querySelector('#root');
root.innerHTML = Array(days).fill("").map((v, i) => `<div style="grid-column: ${i === 0 ? day : 'initial'}">
  <h2>${weekDays[(day + i) % weekDays.length]}</h2>
</div>`).join("");