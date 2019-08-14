// retrieve the current date and include the information in the section's headings
const now = new Date();

// array matching the index retrieved through the getDay() function
const daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// retrieve the necessary information
const day = now.getDay();
const hours = now.getHours();
const minutes = now.getMinutes();

// create a function to zero-pad the hours and minutes if need be
const zeroPad = (int) => int >= 10 ? int.toString() : `0${int}`;

// add the content in the prescribed headings
document.querySelector('main section h3').textContent = daysOfTheWeek[day];
document.querySelector('main section h4').textContent = `${zeroPad(hours)}:${zeroPad(minutes)}`;