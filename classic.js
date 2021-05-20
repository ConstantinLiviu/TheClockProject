const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(clock, 1000);
function clock() {
    const date = new Date();
    const seconds = date.getSeconds()/60;
    const minutes = (seconds + date.getMinutes())/60;
    const hours = (minutes + date.getHours())/12;
    elegantRotation(sec, seconds);
    elegantRotation(min, minutes);
    elegantRotation(hr, hours);
}

function elegantRotation(hand, time) {
    hand.style.setProperty("--rotation", time * 360);
}

clock();