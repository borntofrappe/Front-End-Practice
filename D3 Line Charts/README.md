# D3 Line Charts

## [Live Demo](https://codepen.io/borntofrappe/full/MWwboGL)

## Goal

Explore different visualization starting from a simple line chart.

## 1. Line Chart

Here, I set out to map data with a linear and a time scale. This to highlight the growth in an arbitrary measure retrieved from the [World Bank Open Data](https://data.worldbank.org/).

Topics covered:

- linearScale
- timeScale
- line
- axes
- least and greatest

It seems `d3.least` and `d3.greatest` are not included in the latest release of D3, and I need to import the specific package.

```js
<script src="https://unpkg.com/d3-array@2.4.0/dist/d3-array.min.js"></script>
```

## 2. Line Charts

The goal of this visualization is to highlight and compare two different line charts.

Topics covered:

- linearScale
- pointScale
- line
- area
- mask

## 3. Line Charts +

This visualization begun more as a proof of concept to take the logic developed in #2 and test if the code works with more than two sets of data. Eventually, it became its own project, and it improved a lot from the concepts laid down in the previous folders.

Topics covered:

- linearScale
- timeScale
- line
- area
- mask
- use
- data massaging
