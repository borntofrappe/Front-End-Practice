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

// find if the CSS supports grid
const supportsGrid = getComputedStyle(document.body).getPropertyValue('--supports-grid');
if(supportsGrid) {
  const calendar = document.querySelector('div');
  calendar.innerHTML = Array(days).fill("").map((v, i) => `
    <p style="grid-column: ${i === 0 ? day : 'initial'}">${i + 1}</p>`).join("");

}