# SVG Pretend Movement

## [Live Demo](https://codepen.io/borntofrappe/full/XWWzxPb)

## Goal

Animate a series of SVG elements to fake vertical and horizontal movement.

## Notes

With this project I set out to practice using the `requestAnimationFrame` method to animate a series of SVG element. It is inspired by [this recent 404 page](https://codepen.io/jkantner/pen/QWWqXKw) developed by [Jon Kantner](https://codepen.io/jkantner) and also [this popular game from way back then](https://en.wikipedia.org/wiki/F-1_Race).

The goal of the project is two have a "screen" displaying the road, a few clouds and mountains in the background, behind the horizon line. Below this screen, two input of type range detail how fast the animation should run as well as the twisty-ness of the road.

The input elements of type range are inspired by the design offered by the Mozilla' Firefox browser when somebody toggles the reader mode and intends to change the rate of the audio narrating the page.

## Graphics

The screen itself is an SVG element, and the road is made of nothing but `<path>` elements with a single curve command. For the rest of the page however, a few graphics are necessary:

-   for the input element modifying the speed of the animation: a tortoise and a hare;

-   for the input element altering the direction and intensity of the bend: a road sign pointing in the respective direction.

The icons are made available in the **res** folder. Notice that there's only one road sign pointing in a fixed direction. A mirrored version is obtained with CSS and the `transform` property.
