# D3 Band Members

<!-- ## [Live Demo]() -->

## Goal

Inspired by [this visualization](https://www.lemonde.fr/les-decodeurs/article/2019/09/09/municipales-2020-tous-les-candidats-et-les-candidates-declarees-a-la-mairie-de-paris_5508250_4355770.html) sort the members of a popular rock band according to different criteria.

## Notes

Making use of only HTML, `div` and `span` elements mostly, I had to tinker with `relative` and `absolute` positioning. Including one line at a time with JavaScript proved to be rather unintuitive and for this reason I decided to create a smaller project.

You find the helper project in the **Test Layout folder**. Is uses hard-coded values and a lot of selectors, but it achieves the desired output. Using it as a starting point allows to focus the script on the values which change according to the input data.

In addition to this folder, you also find the static visualization in the **Static Viz** folder. I decided to keep the first version sans the enter-update-exit loop, to focus on the different parts of the visualization. This is also helpful to see how to implement the aforementioned loop, which is still something I need to practice.