// animate the prescribed nodes in sequence

const timeline = anime.timeline({
    easing: 'linear',
});

// show the x character
timeline.add({
    targets: '.start',
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 350,
    delay: anime.stagger(350),
})

// show the dashed line
timeline.add({
    targets: '.in-between',
    strokeDashoffset: [0, anime.setDashoffset],
    duration: 1500,
})

// ping, show the goalpost icon
timeline.add({
    targets: '.end',
    rotate: [20, 0],
    opacity: [0, 1],
    easing: 'easeOutBounce',
    duration: 400,
})