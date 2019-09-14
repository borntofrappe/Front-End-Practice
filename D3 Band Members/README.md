# D3 Band Members

## [Live Demo](https://codepen.io/borntofrappe/full/BaBPQmx)

## Goal

Inspired by [this visualization](https://www.lemonde.fr/les-decodeurs/article/2019/09/09/municipales-2020-tous-les-candidats-et-les-candidates-declarees-a-la-mairie-de-paris_5508250_4355770.html) sort the members of a popular rock band according to different criteria.

## Notes

The project turned out to be more complex than previous anticipated. For this reason, I decided to split the final visualization in helpful, more understandable helper projects:

- in **Test Layout** you find the markup and property-value pairs necessary for each band member. The values are hard-coded, but they prove to be incredibly useful to structure the desired output. Based on the layout, the instructions given through the `d3` library become much clearer;

- in **Static Viz** you find the visualization highlighting the band members according to their first year of activity. I decided to separate the visualization from the ultimate design, to focus on the enter-update-exit loop from a solid starting point.