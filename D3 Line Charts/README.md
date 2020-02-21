# D3 Line Charts

## [Live Demo]()

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
- data massaging with array methods

## 3. Line Charts +

This is more as a proof of concept to take the logic developed in #2 and test if the code works with more than two sets of data.

Data retrieved from Google Trends, considering three of the four seasons. I skipped autumn since [it has a lackluster search history](https://trends.google.com/trends/explore?date=2016-01-01%202020-02-21&q=spring,summer,autumn,winter).
