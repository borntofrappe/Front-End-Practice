# D3 Colorful Donut

## [Live Demo](https://codepen.io/borntofrappe/full/yWJWVV)

## Goal

Practice with a donut visualization inspired by [this design](https://dribbble.com/shots/5902025-Shopin-Marketing-Website-Design-Part-2).

## Update

I updated the project to fix an annoying visual bug, and improve the flow set up through the transition:

- use the actual length to transition the `stroke-dash` properties of the path elements

        ```diff
        -.attr('stroke-dasharray', radius * 3.14 * 2)
        +.attr('stroke-dasharray', function() { return this.getTotalLength(); })
        ```

- by default, show the visualization in full. Only when setting up the transition, set up the desired initial state. This is a more clear pattern, and allows to also consider the transition as a "progressive enhancement". On top of the existing visualization, and only if needed.
