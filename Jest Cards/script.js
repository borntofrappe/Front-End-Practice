/* functions included in the project
pass, fail, jest for the front of the card
back for the other end
*/
const icons = {
  pass: `
  <svg class="front--icon" viewBox="0 0 100 94">
    <g>
      <path d="M 0 47 l 50 -47 l 50 47 l -50 47 z" fill="#15c213"></path>

      <g>
          <path  d="M 36 55 q 4 6 12 12 q 8 -20 18 -35" fill="none" stroke-width="10" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></path>
      </g>
    </g>
  </svg>`,
  fail: `
  <svg class="front--icon" viewBox="0 0 100 94">
    <g>
        <rect x="10" y="7" width="80" height="80" fill="#C21325"></rect>

        <g>
            <g transform="translate(49 57)">
                <path  d="M -12 -29 q 15 21 32 42" fill="none" stroke-width="7" stroke="#fff" stroke-linecap="round"></path>
                <path transform="translate(-3 3)" d="M -12 -29 q 15 21 32 42" fill="none" stroke-width="7" stroke="#fff" stroke-linecap="round"></path>
            </g>

            <g transform="translate(42 47) rotate(70)">
                <path  d="M -12 -29 q 15 21 32 42" fill="none" stroke-width="7" stroke="#fff" stroke-linecap="round"></path>
                <path transform="translate(-2 3)" d="M -12 -29 q 15 21 32 42" fill="none" stroke-width="7" stroke="#fff" stroke-linecap="round"></path>
            </g>


        </g>
    </g>
  </svg>`,
  jest: `
  <svg class="front--icon" viewBox="0 0 100 94">
    <g transform="matrix(1.1996 0 0 1.2006 -17.343 2.4012)" stroke="#15c213" stroke-width="4">
      <path d="m45 0h50l-12.25 35-12.25-18-12.25 18z" fill="none"/>
      <path d="m57.25 35h24.5a12.5 12.5 0 0 1 0 25q-20 2-35 12a20.797 20.797 0 0 1-19-37q0 12.5 7.5 14.5t17-14.5" fill="none"/>
      <g fill="#fff">
          <circle cx="57.25" cy="35" r="8"/>
          <circle cx="81.75" cy="35" r="8"/>
          <circle cx="27.75" cy="35" r="8"/>
      </g>
    </g>
  </svg>`,
  back: `
  <svg class="back--icon" viewBox="0 0 100 100">
    <g transform="translate(50 50)">
        <circle cx="0" cy="0" r="50" fill="#fff"></circle>
        <circle cx="0" cy="0" r="46" fill="#c2a813"></circle>
        <circle cx="0" cy="0" r="30" fill="#fff"></circle>
        <circle cx="0" cy="0" r="26" fill="#c2a813"></circle>
        <circle class="pulse" cx="0" cy="0" r="18" fill="#fff"></circle>
        <circle class="pulse" cx="0" cy="0" r="12" fill="#c2a813"></circle>
        <circle cx="0" cy="0" r="6" fill="#fff"></circle>
    </g>

    <path transform="translate(50 50) rotate(0)" id="path" d="M -42 0 a 42 42 0 0 1 84 0 a 42 42 0 0 1 -84 0" fill="none"></path>

    <text dy="10" fill="#fff" style="text-transform: uppercase; font-weight: bold; letter-spacing: 0.2rem;">
        <textPath xlink:href="#path">
            Runs
        </textPath>
        <textPath startOffset="25%" xlink:href="#path">
            Runs
        </textPath>
        <textPath startOffset="50%" xlink:href="#path">
            Runs
        </textPath>
        <textPath startOffset="75%" xlink:href="#path">
            Runs
        </textPath>
    </text>
  </svg>
  `,
};

// target the node in which to add the cards
const deck = document.querySelector('.deck');
// create a function returning either pass or fail
const randomSuit = () => (Math.random() > 0.5 ? 'pass' : 'fail');

// create an array to include 5 cards
// all of them random expect for the central one
const suit = [randomSuit(), randomSuit(), 'jest', randomSuit(), randomSuit()];

// length of the array to apply a z-index unevenly to the cards, and have the central one stand atop the rest
const { length } = suit;
const halfpoint = Math.floor(length / 2);

// function toggling the class of .flip on the input element
const flip = element => element.classList.toggle('flip');

// render function, including a card with a front and back side
// accepting as input a string determining the correct icon for the front
// accepting also an integer describing the z-index value
const card = (test = 'jest', z = 0) => `
<div class="card flip" onclick="flip(this)" style="z-index: ${z};">
  <div class="card__front">
    <p class="front--text" style="background: ${test === 'fail' ? '#C21325' : '#15c213'}">${test}</p>
      ${icons[test]}
    <p class="front--text" style="background: ${test === 'fail' ? '#C21325' : '#15c213'}">${test}</p>
  </div>

  <div class="card__back">
    ${icons.back}

  </div>
</div>
`;

// for each suit of the array add a card making use of the render function
suit.forEach((test, index) => {
  // specify the z-index giving the central card a higher index
  const z = index < halfpoint ? index : length - index - 1;
  deck.innerHTML += card(test, z);
});
