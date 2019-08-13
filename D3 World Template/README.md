# D3 World

## [Live Demo](https://codepen.io/borntofrappe/full/mdbVBJP)

## Goal

Create a template for data visualization relying on a map of the world.

## Notes

This is meant to be a stepping stone for any D3 project relying on a map of the world. It renders the world atlas and differentiates between the different countries by name.

It relies on [the world atlas package](https://unpkg.com/browse/world-atlas@1.1.4/) and specifically:

- a JSON file describing the topography of the world;

- a TSV file detailing general information regarding the countries of the world.

By merging the two it is possible to have an object describing a feature for every country, detailing its name alongside the geographical coordinates.

Bear in mind: the JSON file provides coordinates in a topoJSON format, and not geoJSON. As geoJSON is what is ultimately understood by the D3 library and the `d3-geo` module, it is therefore essential to convert the topoJSON values. This is achieved through yet another library, namely `topojson`. The library is imported in the `HTML` document _before_ the d3 library and the script benefiting from the D3 logic.

```html
<!-- import topojson to convert topojson to geojson -->
<script src="https://unpkg.com/topojson@3.0.2/dist/topojson.min.js"></script>
<!-- import d3 -->
<script src="https://unpkg.com/d3@5.9.7/dist/d3.min.js"></script>
<script src="script.js"></script>
```