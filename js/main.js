const sectionsPages = new fullpage("#fullpage", {
    autoScrolling:true,
	scrollHorizontally: false,
	navigation: false,
	lockAnchors: false,
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
    anchors:['Inicio', 'Ejemplos', 'Conectores_Logicos','Credenciales'],
    sectionsColor: ['#f2f2f2', '#4BBFC3','$4BBFC3','$f2f2f2'],
	navigation: true,
	navigationTooltips: ['Inicio', 'Ejemplos', 'Conectores Logicos','Credenciales'],
	navigationPosition: 'right',
	css3: true,
	scrollingSpeed: 700,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	controlArrows: true,
	continuousHorizontal: false,
	responsiveSlides: false,
});
