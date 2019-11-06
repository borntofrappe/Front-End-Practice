# Zdog Dice

## [Live Demo](https://codepen.io/borntofrappe/full/WNNJxwM)

## Goal

Use the pseudo-3d engine to draw a dice endlessly rolling around its center.

## Notes

This project follows along the path described by [this project with SVG syntax](https://codepen.io/borntofrappe/pen/JjjLxrx), in that it tries to re-use as many elements as possible to achieve the final result. To this end, the faces are a copy of one rectangle, and the dots are the copy of not only an ellipse, but groups of ellipses. It's slightly complicate to visualize it, but think of the two dots as being the accumulation of two one-dot, separated from each other. From this point you can think of the three dot as a two-dot united with a one-dot and so forth and so on, reaching the six dots as the union of two three-dot.
