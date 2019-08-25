# CPC Connect the Dots

## [Live Demo](https://codepen.io/borntofrappe/full/LYPWLMv)

## Goal

Starting from an svg element include a canvas plotting a worksheet to to connect a few dots.

## Update

Following a bit of experimentation I decided to update the project as follows:

- the `<svg>` element is positioned on top of the `<canvas>` and shown through an `<input>` of type `checkbox`;

- the button to clear the canvas shows the trash can icon, but alongside a string of text explaining its purpose;

- instead of a repeating linear gradient, two svg elements are specified to describe a grid of dots;

- a header is included to introduce the project. Every letter `o` in the header is furthermore wrapped in a `<span>` element to enumerate the letters themselves (in line with the worksheet motif).