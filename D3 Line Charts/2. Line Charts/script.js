// data describing the annual growth in GDP since 1990 for frnce and germany
// https://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG?end=2018&locations=FR-DE&start=1990
const data =  [
  {
    country: 'France',
    values: [
      2.9239351370326,
      1.04817582672602,
      1.59934268998583,
      -0.62866637130098,
      2.35834220730796,
      2.10669523353155,
      1.41299368494035,
      2.33629649806078,
      3.58865943785973,
      3.42137381630556,
      3.92366920384049,
      1.98372140247594,
      1.13553148770353,
      0.823160777839419,
      2.82975292855139,
      1.66322000049641,
      2.44932360050809,
      2.42473623791508,
      0.254945945817809,
      -2.87331385206255,
      1.94943763326869,
      2.1927006520261,
      0.313134741678468,
      0.576326679441848,
      0.956183047683851,
      1.1129123405747,
      1.09546439462306,
      2.26020272081131,
      1.72488062714211,
    ],
  },
  {
    country: 'Germany',
    values: [
      5.25500608859595,
      5.10826150765951,
      1.92807343038962,
      -0.979339906561634,
      2.398049086341,
      1.5347974754814,
      0.820953826499334,
      1.7836372384923,
      2.01904748909297,
      1.89195900764383,
      2.89518694712132,
      1.69773236086638,
      -0.198459062728844,
      -0.713533477235572,
      1.18991490034335,
      0.721853764966724,
      3.81458790454661,
      2.98407727316592,
      0.96226644174557,
      -5.69715162828702,
      4.1789690378929,
      3.92413341771297,
      0.41955108005358,
      0.428243261672193,
      2.22568874914928,
      1.73974982269824,
      2.22999996699747,
      2.46503002917808,
      1.52744629830981,
    ],
  }
];

// for the y scale consider the minimum and maximum values from every set of data
const dataValues = data.reduce((acc, curr) => [...acc, ...curr.values] , []);

// for the masks consider the name of the countries
const dataCountries = data.map(({country}) => country);

const margin = 40;
const width = 500;
const height = 350;

const container = d3.select('body').append('article');
container.append('h1').text('D3 Lines');
container.append('p').text('Highlighting the difference between two sets of data.');

const svg = container
  .append('svg')
  .attr('viewBox', `0 0 ${width + margin * 2} ${height + margin * 2}`)

const visualization = svg
  .append('g')
  .attr('transform', `translate(${margin} ${margin})`);


const yScale = d3
  .scaleLinear()
  .domain(d3.extent(dataValues))
  .range([height, 0])
  .nice();

// horizontally map the values according to their index and with an point scale
// not ordinal as that one would require a discrete range
const xScale = d3
  .scalePoint()
  .domain(d3.range(dataValues.length / data.length))
  .range([0, width]);


// line function
// ! be sure to parse the string describing the year to a date object
const line = d3
  .line()
  .x((d, i) => xScale(i))
  .y(d => yScale(d))
  .curve(d3.curveCatmullRom);

visualization
  .selectAll('path.line')
  .data(data)
  .enter()
  .append('path')
  .attr('class', 'line')
  .attr('d', d => line(d.values))
  .attr('stroke', (d, i) => d3.schemeSet1[i])
  .attr('stroke-width', '3')
  .attr('stroke-linecap', 'round')
  .attr('fill', 'none');

// area function
// the idea is to color the curve under the line, and use a mask to hide the color when another area function has a higher value
const area = d3
  .area()
  .x((d, i) => xScale(i))
  .y0(d => height)
  .y1(d => yScale(d))
  .curve(d3.curveCatmullRom);

const masks = svg
  .append('defs')
  .selectAll('mask')
  .data(data)
  .enter()
  .append('mask')
  .attr('id', ({country}) =>`mask-${country}`);

masks.append('rect').attr('width', width).attr('height', height).attr('fill', 'hsl(0, 0%, 100%)');

// for each country that is not the current one, add a mask in the form of the designated area
masks
  .selectAll('path')
  .data(({country}) => dataCountries.filter(d => d !== country))
  .enter()
  .append('path')
  .attr('d', d => area(data.find(({country}) => country === d).values))
  .attr('fill', 'hsl(0, 0%, 0%)')
  .attr('stroke', 'none');

visualization
  .selectAll('path.area')
  .data(data)
  .enter()
  .append('path')
  .attr('class', 'area')
  .attr('d', d => area(d.values))
  .attr('fill', (d, i) => d3.schemeSet1[i])
  .attr('stroke', 'none')
  .attr('opacity', '0.2')
  .attr('mask', ({country}) => `url(#mask-${country})`);


  // axes
const xAxis = d3.axisBottom(xScale).tickPadding(10).tickFormat((d, i) => i + 1990);
const yAxis = d3
  .axisLeft(yScale)
  .tickPadding(8)
  .tickFormat(d => `${d}%`);

const axes = visualization.append('g').attr('class', 'axes');

axes
  .append('g')
  .attr('transform', `translate(0 ${height})`)
  .call(xAxis)
  // remove every other tick
  // nth-of-type :p works
  .selectAll('.tick:nth-of-type(even)')
  .remove();

axes
  .append('g')
  .call(yAxis)
  // add grid lines for every other tick
  .selectAll('.tick:nth-of-type(even)')
  .append('path')
  .attr('d', `M 0 0 h ${width}`)
  .attr('stroke', 'currentColor')
  .attr('stroke-width', '1')
  .attr('stroke-linecap', 'round')
  .attr('stroke-dasharray', '3 6')
  .attr('fill', 'none')
  .attr('opacity', '0.25');

axes.selectAll('text').attr('font-size', '16');