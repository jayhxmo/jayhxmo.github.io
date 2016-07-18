console.log(-$('#sidr').height() * 1.25);
$('body').plusAnchor({
    easing: 'easeInOutExpo',
    offsetTop: -$('#sidr').height() * 1.25,
    speed: 1000,
    onInit: null,
    onSlide: null,
    performance: false
});