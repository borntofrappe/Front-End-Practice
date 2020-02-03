# D3 Line Marker

## [Live Demo](https://codepen.io/borntofrappe/full/RwPbbpz)

## Goal

Create a line chart with and highlight the connections with the marker element.

## Links

- [Wiki Page for the list of highest mountains on Earth](https://en.wikipedia.org/wiki/List_of_highest_mountains_on_Earth#Data_plots)

- [Data Plots in the Wiki Page](https://en.wikipedia.org/wiki/List_of_highest_mountains_on_Earth#Data_plots). For some reason I end up with one more mountain in Nepal than in the column chart

- [MDN page for the marker element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/marker)

- [Google Icons](https://material.io/resources/icons/?icon=outlined_flag&style=baseline) inspiring the flag design

## SVG Pattern

In the background I repeated the SVG making up the flag, modified to show a smaller version of the icon.

```html
<svg viewBox="0 0 73 95" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(36.5 47.5) scale(0.4)">
    <g transform="translate(-36.5 -47.5)">
      <g fill="none" stroke="currentColor" stroke-width="10">
        <path d="M 10 95 v -75 h 25 l 8 8 h 25 v 35 h -25 l -8 -8 h -25 m 0 -42 l -3 -3 3 -3 3 3 -3 3z" />
      </g>
    </g>
  </g>
</svg>
```
