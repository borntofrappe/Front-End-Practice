# SVG Solar System

## [Live Demo](https://codepen.io/borntofrappe/pen/gJpKxx)

Note: this is a work-in-progress, set out to be part of the curriculum expansion @freecodecamp.

## Goal

Through SVG syntax represent our solar system, detailing the scale of the planets _and_ their relative distance with respect to the central star.

## Notes

The project needs to consider the scale and distance from the sun for each planet. To maintain the correct ratio between the planets, a bit of research on the actual measures is needed.

|Celestial Body|Diameter (km)|Distance from the Sun (AU)|
|---|---|---|
|Sun|1 392 684|0|
|Mercury|4 879.4|0.4|
|Venus|12 103.6|0.7|
|Earth|12 756.3|1|
|Mars|6 792.4|1.5|
|Jupiter|142 984|5.2|
|Saturn|120 536|9.5|
|Uranus|51 118|19.2|
|Neptune|49 528|30.1|

As showing the scale _and_ the distance from the sun in a single visualization through both the size the position of the circle elements would be too overwhelming a choice (the circles would be incredibly small and would require considerable scrolling to show), it is helpful to look at [this graphic](https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Solar-System.pdf/page1-900px-Solar-System.pdf.jpg) and make the following decision:

- the circles are draw to show the scale of the planets only

- a line is included in the bottom right of the solar system to highlight the relative distance from the sun.

