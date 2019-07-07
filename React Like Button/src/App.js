import React, { useState } from 'react';
import './App.css';

function App() {
  // state to keep track of the number of hearts attributed to the button
  const [hearts, setHearts] = useState(0);

  // max values set for the hearts, before the counter is reset, as well as the extreme values given to the svg
  const limit = {
    hearts: 3,
    scale: 0.6,
    saturation: 70,
    lightness: 100,
  };

  // have the scale progressively reach the maximum value
  const scale = `scale(${limit.scale - (limit.hearts - hearts) * 0.05})`;
  // have the fill benefit from a red hue with an increasing saturation and decreasing lightness
  const fill = `hsl(0, ${limit.saturation + hearts * 5}%, ${limit.lightness - hearts * 15}%)`;

  return (
    <div className="App">

      {/* on click have the button update the counter variable and reset its value when reaching the maximum */}
      <button
        onClick = {() => setHearts(hearts === limit.hearts ? 0 : hearts + 1)}
        aria-labelledby="button-label">
        {/* hide the label from view */}
        <span
          id="button-label"
          hidden>
            Like
        </span>

        {/* describe the heart icon through a path element */}
        <svg xmlns="http://www.w3.org/2000/svg" id="heart" viewBox="0 0 10 8.5" width="50" height="37.5">
            {/* specify the computed fill */}
            <g
                stroke="none"
                fill={fill}>
                {/* include groups to modify the transform origin
                this to have the scale occur from the center of the heart
                */}
                <g transform="translate(5 3.75)">
                  <g transform={scale}>
                    <g transform="translate(-5 -3.75)">
                      <path
                          d="M 5 7.5 c 2.5 -1 5 -2.5 5 -5 a 2.5 2.5 0 0 0 -5 0 a 2.5 2.5 0 0 0 -5 0 c 0 2.5 2.5 4 5 5">
                      </path>
                    </g>
                  </g>
                </g>
            </g>
        </svg>
      </button>

    </div>
  );
}

export default App;
