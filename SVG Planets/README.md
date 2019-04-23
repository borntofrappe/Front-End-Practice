# SVG Planets

## [Live Demo](https://codepen.io/borntofrappe/full/qwKwoV)

## Goal

Practice with SVG syntax trying to re-create a few of the icons showcased on [this inspiring set](https://dribbble.com/shots/4193533-Best-Icons-Of-The-Month).

## Notes

This project was inspired by the cited design, but also the expanded curriculum @freecodecamp. I could see a similar effort as a solid proposal for the project titled "Learn SVG by building a solar system". Hopefully, I'll be able to come up with a valid proposition and have the courage to ask for validation on [this very issue](https://github.com/freeCodeCamp/CurriculumExpansion/issues/109).

## Update

As I discovered with a later SVG icon, created for the UI Button Kit project, `transform-origin` seems to malfunction in firefox. In order to fix this, it is possible to wrap whichever element with the attribute in a group element and translate said group in the location where the transformation needs to take place. I updated the code to allow for the rotation of the moons in firefox as well.