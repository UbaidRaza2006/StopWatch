var hours = 0;
var min = 0;
var sec = 0;
var milliSec = 0;
var timer;
var stop = "stop";
function start() {
    timer = setInterval(() => {
        milliSec++
        if (milliSec > 100) {
            sec++
            sec = (sec < 10) ? "0" + sec : sec;
            milliSec = 0
        }
        if (sec > 60) {
            min++
            min = (min < 10) ? "0" + min : min;
            sec = 0
        }
        if (min > 60) {
            hours++
            hours = (hours < 10) ? "0" + hours : hours;  
            min = 0
        }
        document.getElementById("show").innerHTML = `${hours}<span>:</span>${min}<span>:</span>${sec}<span>:</span>${milliSec}`
    }, 10)
}
function restart() {
    location.reload()
}
function pause() {
    if (stop == "stop") {
        clearInterval(timer);
        stop = "start";
    }
    else {
        start();
        stop = "stop";
    }
}