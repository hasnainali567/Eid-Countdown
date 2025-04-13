var month_display = document.getElementById("month");
var day_display = document.getElementById("day");
var hour_display = document.getElementById("hour");
var minute_display = document.getElementById("minute");
var second_display = document.getElementById("second");
var main_display = document.getElementById('main');

function getValue() {
    var currentTime = new Date().getTime();
    var eidTime = new Date('7 june 2025').getTime();

    var diff = eidTime - currentTime;

    var month = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44))
    var day = Math.ceil(diff / (1000 * 60 * 60 * 24) % 30)
    var hours = Math.floor(diff / (1000 * 60 * 60) % 24);
    var minute = Math.ceil(diff / (1000 * 60 ) % 60);
    var second = Math.ceil(diff / (1000) % 60);
    
    if (diff < 1) {
        main.innerHTML = '<h1 id="logo">Eid-ul-Adha</h1><br><h3>Mubarrak!</h3>'
    } else {
        month_display.innerText = month;
        day_display.innerText = day;
        hour_display.innerText = hours;
        minute_display.innerText = minute;
        second_display.innerText = second;
    }
    
}

setInterval(()=> {
    getValue()
}, 1000)


