// function animating the line drawing
// delay describes the lapse between each path and circle element
function animate(duration = 800, delay = 800) {
  anime({
      targets: '.triangle path',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration,
      delay: anime.stagger(delay),
      easing: 'linear',
    });

  anime({
      targets: '.hexagon path',
      strokeDashoffset: [anime.setDashoffset, 0],
      delay: anime.stagger(delay / 2),
      duration: duration / 2,
      easing: 'linear',
    });

  anime({
      targets: '.hexagon use',
      scale: [0, 1],
      delay: anime.stagger(delay / 2),
      duration: duration / 2,
      // make the circles describing the vertices of both shapes more bouncy
      easing: (d, i) =>
        i % 2 === 0 ? 'easeOutElastic(2)' : 'easeOutElastic(1.2)',
    });
}

// dat.gui settings
const Animation = function() {
  // divide between the settings dedicated to the animation and those dedicated to the svg
  this.duration = 800;
  this.delay = 800;

  // it seems dat.gui doesn't like hsl
  this.color = '#e60099';

  // animate the svg with default values
  animate(this.duration, this.delay);
};

// function setting up dat.gui with the necessary controllers
window.onload = function() {
  const animation = new Animation();
  const gui = new dat.GUI();

  // animation settings
  const range = [500, 2500];
  const folder = gui.addFolder('Animation');
  const updateDuration = folder.add(animation, 'duration', ...range);
  const updateDelay = folder.add(animation, 'delay', ...range);
  folder.open();

  // run the animation once a setting has been updated
  updateDuration.onFinishChange(d => {
    // d is d the same of animation.duration?
    animate(d, animation.delay);
  });

  updateDelay.onFinishChange(d => {
    // d is d the same of animation.delay?
    animate(animation.duration, d);
  });

  // svg settings
  const updateColor = gui.addColor(animation, 'color');
  updateColor.onChange(d => {
    const svg = document.querySelector('svg');
    svg.style.color = d;
  });
};
