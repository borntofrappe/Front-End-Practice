# UI Tweet Component

## [Live Demo](https://codepen.io/borntofrappe/full/gOOvbQp)

## Goal

Create a reusable component loosely based on the UI provided by Twitter when describing an individual message.

## Notes

This project was originally meant to be an excuse to brush up with React, but it ended up describing a journey through several front-end concepts. Among these concepts:

-   SVG syntax; the icons are included through an "SVG" block and `<symbol>` elements, later used in the markup. In the stylesheet another SVG element is also used to describe a repeating pattern;

-   semantic markup; the information connected with the "tweet" is presented through a series of headings, with a decreasing hierarchy. On top of this, the project makes use of the `<time>` element;

-   CSS layout properties; the stylesheet describes a one column layout, thanks to `block` elements. For viewports large enough and devided supporting CSS grid however, the design is modified to display the information in a grid;

There are also a couple of extra properties to tinker with a bit of UX, when selecting the text or hovering on the SVG icons. The project is far from perfect, but it might make for a neat article describing the different choices.
