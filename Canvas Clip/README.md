# Canvas Clip

<!-- ## [Live Demo]() -->

## Goal

Experiment with the Canvas API and specifically the possibility to clip parts of a canvas to show a subset of existing elements.

## Notes

This is a continuation of the deep dive started with a previous project using the Canvas API [to create a Pong game](https://codepen.io/borntofrappe/pen/QWWPBrV).

## Update

Originally, I thought about creating a project to highlight a section of a starry's sky with the clip element. While reviewing the documentation for the canvas API however, I decided to split the effort in two projects:

-   Microscope. Here I preserve the original intent and show a series of microbes, or viruses, only through the clip element;

-   Telescope. Here I actually draw two canvas elements, draw a starry's sky in the first one and a set of intriguing shapes in the second one. The clip is then applied only on the second one, with the idea to provide a more detailed view of the sky.
