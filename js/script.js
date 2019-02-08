'use strict'

var hoursArrow = document.querySelector('.clock__hours'),
minutesArrow = document.querySelector('.clock__minutes'),
secondsArrow = document.querySelector('.clock__seconds');

function setDate() {

    var current = new Date();
    
    var seconds = current.getSeconds();
    var secondsDegree = ((seconds / 60)*360) + 90;
    secondsArrow.style.transform = 'rotate(' + secondsDegree + 'deg)';

    var minutes = current.getMinutes();
    var minutesDegree = ((minutes / 60)*360) + 90;
    console.log(minutes);
    console.log(minutesDegree);
    minutesArrow.style.transform = 'rotate(' + minutesDegree + 'deg)';

    var hours = current.getHours();
    var hoursDegree = ((hours / 12)*360) + 90;
    hoursArrow.style.transform = 'rotate(' + hoursDegree + 'deg)';
}

setInterval(setDate, 1000);