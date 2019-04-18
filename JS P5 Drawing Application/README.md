# JS P5.js Drawing App

## [Live Demo](https://codepen.io/borntofrappe/full/QPQPrv)

## Goal

Create an entry for the fifth episode of the #weeklycodingchallenge, with a drawing app using the canvas API and the [P5.js](http://p5js.org/) library.

## Notes

In terms of UI, the project features a sidebar on the left of the application. This is made to look similar to the sidebar present on [@codepen](https://codepen.io). In terms of dimensions, I made a choice to have the canvas occupy the width of the window, meaning that horizontal scroll does occur, but it is removed as the sidebar is toggled out of sight. Also in the realm of UI, the cursor is complemented by the SVG icon of a pencil, whenever hovering on the canvas element. I picked a design I previously created for the **SVG Process** project and resized the icon to match.

In terms of JavaScript and logic, the project allows to draw a line, change its color and width, and continue with the new picks. In addition to this evident feature, the application allows to translate the sidebar and canvas to have this last element prominently feature the viewport. Finally, the project allows to resize the entire window, while preserving the existing lines; this required a bit more JavaScript than expected, as it made it necessary to store in a data structure the coordinates of the existing lines, as well as the styles depicting them.