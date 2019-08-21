# SVG Racing Loader

## [Live Demo](https://codepen.io/borntofrappe/full/qBWqJYK)

## Goal

Replicate [this design](https://dribbble.com/shots/3395665-F1-Aerodynamics) and animate the stroke's dashes to create a loading screen.

## Notes

In the **res** folder you find two `.svg` files describing the visuals behind the project. Please note that in the **racing-car** file the syntax is slightly different. To animate the car and the dashes I had to adjust a few attributes, and most prominently remove path elements with pre-existing `stroke-dasharray` attributes.

## Cross Browser

On Edge it seems the `calc()` function doesn't play nicely with custom properties. I had to therefore create another custom property for the negative offset.

On Firefox and Edge finally, setting the `stroke-dash` properties to match doesn't seem enough to hide the stroke. I included a rapid change in the `opacity` value to hide the dashes as needed.