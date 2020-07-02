TweenMax.to("#leaf--solid", {
	morphSVG: { shape: "M 0 0 v -50 a 25 25 0 0 1 0 50" },
	duration: 1,
	repeat: -1,
	yoyo: true,
	delay: 2,
	repeatDelay: 3,
	ease: Power1.easeInOut
});
TweenMax.to("#leaf--shadow", {
	morphSVG: { shape: "M 0 0 a 25 25 0 0 0 25 -25 25 25 0 0 1 -25 25" },
	opacity: 0,
	duration: 1,
	repeat: -1,
	yoyo: true,
	delay: 2,
	repeatDelay: 3,
	ease: Power2.easeInOut
});
