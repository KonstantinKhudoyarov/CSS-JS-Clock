'use strict'

var hoursArrow = document.querySelector('.clock__hours'),
minutesArrow = document.querySelector('.clock__minutes'),
secondsArrow = document.querySelector('.clock__seconds'),
digitalHours = document.querySelector('.clock__digital-hours'),
digitalMinutes = document.querySelector('.clock__digital-minutes'),
digitalSeconds = document.querySelector('.clock__digital-seconds');

function setDate() {

    var current = new Date();
    
    var seconds = current.getSeconds();
    var secondsDegree = ((seconds / 60)*360) + 90;
    secondsArrow.style.transform = 'translateY(-50%) rotate(' + secondsDegree + 'deg)';
    digitalSeconds.innerHTML = (seconds < 10) ? '0' + seconds : seconds;

    var minutes = current.getMinutes();
    var minutesDegree = ((minutes / 60)*360) + 90;
    minutesArrow.style.transform = 'translateY(-50%) rotate(' + minutesDegree + 'deg)';
    digitalMinutes.innerHTML = (minutes < 10) ? '0' + minutes : minutes;

    var hours = current.getHours();
    var hoursDegree = ((hours / 12)*360) + 90;
    hoursArrow.style.transform = 'translateY(-50%) rotate(' + hoursDegree + 'deg)';
    digitalHours.innerHTML = (hours < 10) ? '0' + hours : hours;
}

setInterval(setDate, 1000);