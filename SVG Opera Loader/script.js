const heading = document.querySelector('h1');
// array of describing the messages shown in the heading
const messages = [
  'Sending request',
  'Receiving response',
  'Requesting assets',
  'HTML',
  'CSS',
  'JavaScript',
];

// generator function returning the items of an array one at a time
function* loopArray(arr) {
  for(const item of arr) {
    yield item;
  }
}

// reference to the generator applied to the messages array
const loopMessages = loopArray(messages);

/* by calling loopMessages.next() the function returns the items one after the other
{
  value, // the actual item
  done // boolean describing the end of the generator
}
*/

function displayMessage() {
  const { value, done } = loopMessages.next();
  console.log(value);
  if(!done) {
    heading.innerHTML = value
      .split('')
      .map((letter, index) => `<span style="animation: fadeInOut 2s ${0.1 * index}s 2 alternate both;">${letter}</span>`)
      .join('');

      const timeoutID = setTimeout(() => {
        displayMessage();
        clearTimeout(timeoutID);
      }, 6000);
  } else {
    heading.innerHTML = 'All done'
      .split('')
      .map((letter, index) => `<span style="animation: fadeInOut 1s ${0.1 * index}s 1 both;">${letter}</span>`)
      .join('');
  }
}

displayMessage();