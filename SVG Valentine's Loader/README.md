# SVG Valentine's Loader

## [Live Demo](https://codepen.io/borntofrappe/full/RwbXawa)

## Goal

Create a loading screen for a hypothetical Valentine's themed application, inspired by [this design](https://dribbble.com/shots/6019167-Valentine-s-Day).

## Color Palette

The project is based on four colors, using a red color with different saturation and lightness values.

-   lighter shade, for the background: `hsl(40, 100%, 95%)`;

-   slightly darker shade, for the clouds: `hsl(40, 85%, 70%)`;

-   darker shade, for the arrow: `hsl(25, 85%, 15%)`;

-   saturated shade, for the heart: `hsl(15, 100%, 60%)`.

## Animation

The animation occurs through `keyframes` and `animation` properties. I decided to define a path for the cloud and wrap a couple of clouds in an additional group to have the shapes move in different directions despite having the same horizontal translation. This is achieved by literally flipping the shapes around the y axis, so that a translation occurs in the opposite direction.
