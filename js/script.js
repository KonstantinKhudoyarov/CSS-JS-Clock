'use strict'

var hoursArrow = document.querySelector('.clock__hours'),
minutesArrow = document.querySelector('.clock__minutes'),
secondsArrow = document.querySelector('.clock__seconds'),
digitalHours = document.querySelector('.clock__digital-hours'),
digitalMinutes = document.querySelector('.clock__digital-minutes'),
digitalSeconds = document.querySelector('.clock__digital-seconds');

function setCurrentTime(arrow, digitalValue, degree, time) {
    arrow.style.transform = 'translateY(-50%) rotate(' + degree + 'deg)';
    digitalValue.innerHTML = (time < 10) ? '0' + time : time;
}

function getDegree(value, maxValue) {
    return ((value / maxValue) * 360) + 90;
}

function setDate() {

    var current = new Date();
    
    var seconds = current.getSeconds();
    var secondsDegree = getDegree(seconds, 60);
    setCurrentTime(secondsArrow, digitalSeconds, secondsDegree, seconds);

    var minutes = current.getMinutes();
    var minutesDegree = getDegree(minutes, 60);
    setCurrentTime(minutesArrow, digitalMinutes, minutesDegree, minutes);

    var hours = current.getHours();
    var hoursDegree = getDegree(hours, 12);
    setCurrentTime(hoursArrow, digitalHours, hoursDegree, hours);
}

setInterval(setDate, 1000);