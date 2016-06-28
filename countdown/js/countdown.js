function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor((t / (1000 * 60 * 60 * 24)) % 7);
    var weeks = Math.floor(t / (1000 * 60 * 60 * 7 * 24));

    return {
        'total': t,
        'weeks': weeks,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(endtime) {
    var weeksSpan = document.querySelector('#weeks h1');
    var daysSpan = document.querySelector('#days h1');
    var hoursSpan = document.querySelector('#hours h1');
    var minutesSpan = document.querySelector('#minutes h1');
    var secondsSpan = document.querySelector('#seconds h1');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        weeksSpan.innerHTML = t.weeks;
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

// var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
var deadline = 'June 20 2016 12:00:00 GMT-04:00';
initializeClock(deadline);
