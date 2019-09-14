// data describing the members of the AC/DC band
const band = [
  {
    name: 'Angus Young',
    role: 'guitar',
    active: [
      {
        beginning: 1973,
      },
    ],
  },
  {
    name: 'Chris Slade',
    role: 'drums',
    active: [
      {
        beginning: 1989,
        end: 1994,
      },
      {
        beginning: 2015,
      },
    ],
  },
  {
    name: 'Steve Young',
    role: 'guitar',
    active: [
      {
        beginning: 2014,
      },
    ],
  },
  {
    name: 'Axl Rose',
    role: 'vocals',
    active: [
      {
        beginning: 2016,
      },
    ],
  },
  {
    name: 'Malcolm Young',
    role: 'guitar',
    active: [
      {
        beginning: 1973,
        end: 2014,
      },
    ],
  },
  {
    name: 'Dave Evans',
    role: 'vocals',
    active: [
      {
        beginning: 1973,
        end: 1974,
      },
    ],
  },
  {
    name: 'Bon Scott',
    role: 'vocals',
    active: [
      {
        beginning: 1974,
        end: 1980,
      },
    ],
  },
  {
    name: 'Phil Rudd',
    role: 'drums',
    active: [
      {
        beginning: 1975,
        end: 1983,
      },
      {
        beginning: 1994,
        end: 2015,
      },
    ],
  },
  {
    name: 'Mark Evans',
    role: 'bass',
    active: [
      {
        beginning: 1975,
        end: 1977,
      },
    ],
  },
  {
    name: 'Cliff Williams',
    role: 'bass',
    active: [
      {
        beginning: 1977,
        end: 2016,
      },

    ],
  },
  {
    name: 'Brian Johnson',
    role: 'vocals',
    active: [
      {
        beginning: 1980,
        end: 2016,
      },
    ],
  },
  {
    name: 'Simon Wright',
    role: 'drums',
    active: [
      {
        beginning: 1983,
        end: 1989,
      },
    ],
  },
];

// sort the array according to the starting year and according to the role
const bandYears = [...band].sort((a, b) => a.active[0].beginning > b.active[0].beginning ? 1 : -1);
// role starting from the sorted array and considering the alphabetical order
const bandRoles = [...bandYears].sort((a, b) => a.role >= b.role ? 1 : -1);

// scale used to compute the % percentages to position the .details element
// starting from the oldest year
const startingYear = bandYears[0].active[0].beginning;

const timeScale = d3
  .scaleTime()
  .domain([new Date(`${startingYear}`), new Date()])
  .range([0, 100]);

// add a div container for each member
const viz = d3.select('.viz');

function displayBandMembers(data) {
  const update = viz
    .selectAll('div.member')
    .data(data);

  const enter = update
    .enter();

  const exit = update
    .exit();

  exit.remove();

  const member = enter
    .append('div')
    .attr('class', 'member');

  // add an icon matching the role
  member
    .append('svg')
    .attr('viewBox', '0 0 100 100')
    .attr('width', '60')
    .attr('height', '60')
    .append('use')
    .attr('href', ({ role }) => `#${role}`);

  update
    .select('svg use')
    .attr('href', ({ role }) => `#${role}`);

  // add a container in which to describe the name and years of acivity
  const details = member
    .append('div')
    .attr('class', 'details')
    .style('flex-grow', '1')
    .style('min-height', '60px')
    .style('position', 'relative');

  // absolute position the heading in the middle of the active years
  details
    .append('h2')
    .text(({name}) => name)
    .style('position', 'absolute')
    .style('font-size', '0.85rem')
    .style('color', 'hsl(0, 0%, 15%)')
    .style('white-space', 'nowrap')
    .style('top', '15%')
    .style('left', ({ active }) => {
      const beginning = new Date(`${active[0].beginning}`);
      const end = active[active.length - 1].end ? new Date(`${active[active.length - 1].end}`) : new Date();
      const midPoint = timeScale(beginning) + (timeScale(end) - timeScale(beginning)) / 2;
      return `${midPoint}%`;
    })
    // change the alignment of the text to avoid overlaps
    .style('transform', ({ active }) => {
      const beginning = new Date(`${active[0].beginning}`);
      const end = active[active.length - 1].end ? new Date(`${active[active.length - 1].end}`) : new Date();
      const midPoint = timeScale(beginning) + (timeScale(end) - timeScale(beginning)) / 2;
      if(midPoint < 10) {
        return 'translate(0%, 0%)';
      } else if(midPoint > 90) {
        return 'translate(-100%, 0%)';
      }
      return 'translate(-50%, 0%)';
    });

  update
    .select('.details h2')
    .text(({name}) => name)
    .style('left', ({ active }) => {
      const beginning = new Date(`${active[0].beginning}`);
      const end = active[active.length - 1].end ? new Date(`${active[active.length - 1].end}`) : new Date();
      const midPoint = timeScale(beginning) + (timeScale(end) - timeScale(beginning)) / 2;
      return `${midPoint}%`;
    })
    // change the alignment of the text to avoid overlaps
    .style('transform', ({ active }) => {
      const beginning = new Date(`${active[0].beginning}`);
      const end = active[active.length - 1].end ? new Date(`${active[active.length - 1].end}`) : new Date();
      const midPoint = timeScale(beginning) + (timeScale(end) - timeScale(beginning)) / 2;
      if(midPoint < 10) {
        return 'translate(0%, 0%)';
      } else if(midPoint > 90) {
        return 'translate(-100%, 0%)';
      }
      return 'translate(-50%, 0%)';
    });

  // absolute position each .years container according to the starting year
  // ! have the container take as much space as described by the beginning and end year values
  const years = details
    .selectAll('div.years')
    .data(({active}) => active)
    .enter()
    .append('div')
    .attr('class', 'years')
    .style('position', 'absolute')
    .style('top', '35%')
    .style('left', ({ beginning }) => {
      return `${timeScale(new Date(`${beginning}`))}%`;
    })
    .style('width', ({ beginning, end }) => {
      const endValue = end ? new Date(`${end}`) : new Date();
      return `${timeScale(endValue) - timeScale(new Date(`${beginning}`))}%`;
    })
    .style('height', '65%');

  update
    .select('div.details')
    .selectAll('div.years')
    .data(({active}) => active)
    .style('left', ({ beginning }) => {
      return `${timeScale(new Date(`${beginning}`))}%`;
    })
    .style('width', ({ beginning, end }) => {
      const endValue = end ? new Date(`${end}`) : new Date();
      return `${timeScale(endValue) - timeScale(new Date(`${beginning}`))}%`;
    });


    update
    .select('div.details')
    .selectAll('div.years')
    .select('span.end')
    .style('opacity', ({ end }) => end ? '1' : '0');


  const newYears = update
    .select('div.details')
    .selectAll('div.years')
    .data(({active}) => active)
    .enter()
    .append('div')
    .attr('class', 'years')
    .style('position', 'absolute')
    .style('top', '35%')
    .style('left', ({ beginning }) => {
      return `${timeScale(new Date(`${beginning}`))}%`;
    })
    .style('width', ({ beginning, end }) => {
      const endValue = end ? new Date(`${end}`) : new Date();
      return `${timeScale(endValue) - timeScale(new Date(`${beginning}`))}%`;
    })
    .style('height', '65%');

  update
    .select('div.details')
    .selectAll('div.years')
    .data(({active}) => active)
    .exit()
    .remove();


  // include span elements to create a |---| line encompassing the container
  years
    .append('span')
    .style('position', 'absolute')
    .style('top', '50%')
    .style('left', '0%')
    .style('background', 'currentColor')
    .style('border-radius', '5px')
    .style('width', '2px')
    .style('height', '18px')
    .style('transform', 'translate(-50%, -50%)');

  years
    .append('span')
    .style('position', 'absolute')
    .style('top', '50%')
    .style('left', '0%')
    .style('background', 'currentColor')
    .style('border-radius', '5px')
    .style('width', '100%')
    .style('height', '2px')
    .style('transform', 'translate(0%, -50%)');

  // conceal the final tick in case the member is still active
  years
    .append('span')
    .attr('class', 'end')
    .style('position', 'absolute')
    .style('top', '50%')
    .style('left', '100%')
    .style('background', 'currentColor')
    .style('border-radius', '5px')
    .style('width', '2px')
    .style('height', '18px')
    .style('transform', 'translate(-50%, -50%)')
    .style('opacity', ({ end }) => end ? '1' : '0');

  newYears
    .append('span')
    .style('position', 'absolute')
    .style('top', '50%')
    .style('left', '0%')
    .style('background', 'currentColor')
    .style('border-radius', '5px')
    .style('width', '2px')
    .style('height', '18px')
    .style('transform', 'translate(-50%, -50%)');

  newYears
    .append('span')
    .style('position', 'absolute')
    .style('top', '50%')
    .style('left', '0%')
    .style('background', 'currentColor')
    .style('border-radius', '5px')
    .style('width', '100%')
    .style('height', '2px')
    .style('transform', 'translate(0%, -50%)');

  // conceal the final tick in case the member is still active
  newYears
    .append('span')
    .attr('class', 'end')
    .style('position', 'absolute')
    .style('top', '50%')
    .style('left', '100%')
    .style('background', 'currentColor')
    .style('border-radius', '5px')
    .style('width', '2px')
    .style('height', '18px')
    .style('transform', 'translate(-50%, -50%)')
    .style('opacity', ({ end }) => end ? '1' : '0');


}

displayBandMembers(bandYears);

// following the input event on the checkbox, sort the elements according to the role, considering the alphabetical order
function handleInput() {
  const { checked: sortByRole } = this;
  console.log(sortByRole)
  if(sortByRole) {
    displayBandMembers(bandRoles);
  } else {
    displayBandMembers(bandYears);
  }
}
d3
  .select('input[type="checkbox"]')
  .on('input', handleInput);