function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600;
}

setInterval(function () {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    const value = (time / 60) * 360 + 90;
    seconds.style.transform = `rotate(${value}deg)`;
}, 1000);