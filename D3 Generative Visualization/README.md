# D3 Generative Visualization

## [Live Demo](https://codepen.io/borntofrappe/full/eYYQwvz)

## Goal

Develop a visualization inspired by [this video](https://www.learnwithjason.dev/generative-data-visualization-design-and-planning) and using [this illustration](https://codepen.io/borntofrappe/pen/abbQgOp).

## Update

Following a rewrite of the original illustration, I updated the script to include multiple drawing elements instead of relying on the `<use>` tags. This is preferable in a situation when the SVG is repeated multiple times on the page, which is exactly what happens in this project.

Let me try to explain why:

- the `<use>` element relies on a drawing element with an `id` attribute. It is this identifier which is specified in the `href` attribute;

- when the SVG is repeated, so are all its nested elements. This means there are multiple elements with the same id, and there's a potential conflict between references.

I realized this annoyance when I noticed that the wings in the same vector graphic had a different scale.

There might be a way to avoid repeating the syntax in the form of an `<svg>` element defining the shapes once, before the visualization, and then take advantage of the `<use>` tags with only the reference to those "global" elements, but currently, I decided to have each vector graphic responsible for its own drawing.