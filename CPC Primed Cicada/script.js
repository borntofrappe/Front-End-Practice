// include the SVG drawing crafted in the HTML through a function which specifies the different colors
// ! give default values if the function were to be called without parameters
const cicada = (
  {
    contour = '#603814', wings = '#EDF5F7', chest = '#FA9000', bands = '#B1C754', eyes = '#01A453', head = '#D3DCE3', growth = '#C69B79',
  } = {},
) => `
  <svg viewBox="0 0 120 120" width="500" height="500" stroke=${contour}>
    <g class="main" transform="translate(10 10)">
      <!-- <g class="background">
        <circle stroke="none" fill="#E5E8EF" cx="50" cy="50" r="50"/>
        <circle stroke="none" fill="#D3DCE3" cx="50" cy="50" r="35"/>
      </g> -->

      <g class="cicada">

        <g class="wings" stroke-width="1" fill=${wings}>

          <g>
            <path d="M 38 30 l -35 40 a 35 35 0 0 0 35 0 z" stroke-width="2"/>
            <line x1="10" x2="31" y1="73" y2="49" />
            <line x1="23" x2="33.5" y1="75" y2="63"/>
          </g>

          <g transform="translate(100 0) scale(-1 1)">
            <path d="M 38 30 l -35 40 a 35 35 0 0 0 35 0 z" stroke-width="2"/>
            <line x1="10" x2="31" y1="73" y2="49"/>
            <line x1="23" x2="33.5" y1="75" y2="63"/>
          </g>
        </g>


        <g class="body" stroke-width="2">
          <g class="chest" fill=${chest} >
            <path d="M 38 30 v 45 a 12 12 0 0 0 24 0 v -45 z"/>

            <g class="bands" fill=${bands}>
              <circle cx="50" cy="75" r="8"/>
              <rect x="38" y="57" height="5" width="24"/>
              <rect x="38" y="47" height="5" width="24"/>
            </g>

            <circle cx="50" cy="75" r="4"/>
          </g>

          <g class="head">
            <path d="M 38 30 v -10 h 24 v 10 z" fill=${head} />
            <path d="M 42 20 v 15 a 8 8 0 0 0 16 0 v -15 z" fill=${growth} />

            <g class="eyes" fill=${eyes}>
              <circle cx="39" cy="20" r="2.5" />
              <circle cx="61" cy="20" r="2.5"/>
            </g>
          </g>

        </g>
      </g>
    </g>


    <g class="sound" stroke-width="1.5" stroke-linecap="round" fill="none">
      <g>
        <path d="M 42 25 a 8 8 0 0 1 8 -4" />
        <path d="M 38.5 20.5 a 10 10 0 0 1 10 -5"/>
        <path d="M 34 15 a 12 12 0 0 1 12 -6"/>
      </g>


      <g transform="translate(120 0) scale(-1 1)">
        <path d="M 42 25 a 8 8 0 0 1 8 -4"/>
        <path d="M 38.5 20.5 a 10 10 0 0 1 10 -5"/>
        <path d="M 34 15 a 12 12 0 0 1 12 -6"/>
      </g>
    </g>
  </svg>
`;

// describe different colors for a selection of prime numbers
// choice could be improved
const cicadaPatterns = {
  11: {
    wings: '#516391',
    chest: '#ADC88F',
    bands: '#5F50FA',
    eyes: '#193B3D',
    head: '#42457D',
    growth: '#C79B79',
  },
  7: {
    wings: '#AB9682',
    chest: '#AE111C',
    bands: '#6B7A27',
    eyes: '#570A00',
    head: '#7D8B96',
    growth: '#32727A',
  },
  5: {
    wings: '#93A6AB',
    chest: '#F0D501',
    bands: '#6C98D0',
    eyes: '#F0A30E',
    head: '#969684',
    growth: '#4E457A',
  },
  3: {
    wings: '#A4E8F9',
    chest: '#7A4700',
    bands: '#C6D096',
    eyes: '#37B375',
    head: '#A4ABB0',
    growth: '#47382C',
  },
  2: {
    wings: '#93631B',
    chest: '#014339',
    bands: '#BFB603',
    eyes: '#A51E24',
    head: '#280B21',
    growth: '#242EAA',
  },
};

// number of cicadas to add
const specimens = 100;
// node in which to inject the specimens
const body = document.querySelector('body');

// starting from 1 as to avoid an immediate true condition
for (let i = 1; i <= specimens; i += 1) {
  // retrieve the property-value pairs of the cicada object
  // ! sort the entries by the value of the property, to have them considered in order
  const sortedEntries = Object.entries(cicadaPatterns).sort(([keyA], [keyB]) => (keyA > keyB ? -1 : 1));
  // initialize an object in which to describe the pattern
  let pattern = {};

  // loop through the sorted entries and if the index finds a multiple of the prime numbers, add the connected pattern to the initialized variable
  for (const [key, value] of sortedEntries) {
    if (i % key === 0) {
      isPattern = true;
      pattern = value;
      // break out of the loop to consider only the first match
      break;
    }
  }

  // add the cicada specified by the pattern
  body.innerHTML += cicada(pattern);
}
