$(window).load(function () {
	$.stellar({
		horizontalScrolling: false,
		verticalOffset: $(window).height(),

		responsive: true,
		positionProperty: 'transform',

		hideDistantElements: false
	});
});