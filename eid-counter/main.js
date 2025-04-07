var month_display = document.getElementById("month");
var day_display = document.getElementById("day");
var hour_display = document.getElementById("hour");
var minute_display = document.getElementById("minute");
var second_display = document.getElementById("second");
var main_display = document.getElementById("main");

function getValue() {
    var now = moment();
    var eid = moment('2025-06-07');

    var duration = moment.duration(eid.diff(now));

    if (duration.asMilliseconds() <= 0) {
        main_display.innerHTML = '<h1 id="logo">Eid-ul-Fitr</h1><br><h3>Mubarak!</h3>';
    } else {
        var months = Math.floor(duration.asMonths());
        var days = duration.days();
        var hours = duration.hours();
        var minutes = duration.minutes();
        var seconds = duration.seconds();

        month_display.innerText = months;
        day_display.innerText = days;
        hour_display.innerText = hours;
        minute_display.innerText = minutes;
        second_display.innerText = seconds;
    }
}

setInterval(getValue, 1000);
