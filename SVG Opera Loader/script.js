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

// function called to display the message in the heading
function displayMessage() {
  // retrieve the item from the generator
  const { value, done } = loopMessages.next();

  // if the generator returns an item display it through span elements animated to fade in and out of sight (have the animation run twice, with an alternate value)
  if(!done) {
    heading.innerHTML = value
      .split('')
      .map((letter, index) => `<span style="animation: fadeIn 1.25s ${0.1 * index + 1}s 2 alternate both;">${letter}</span>`)
      .join('');

      // following a delay matching the duration of the svg animation call the function once more
      // the generator will give the following item to display
      const timeoutID = setTimeout(() => {
        displayMessage();
        clearTimeout(timeoutID);
      }, 6000);
  } else {
    // if the generator has gone through the array display an arbitrary string of text
    heading.innerHTML = 'All done'
      .split('')
      .map((letter, index) => `<span style="animation: fadeIn 1s ${0.1 * index}s 1 both;">${letter}</span>`)
      .join('');
  }
}

// call the function to trigger the loop set up through the generator and the setTimeout() function
displayMessage();