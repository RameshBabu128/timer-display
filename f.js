let hour = 0;
let minute = 0;
let second = 0;
let milisec = 0;

let timer = false;

function start() {
    timer = true;
    stopwatch();
}

function stop() {
    timer = false;
}

function reset() {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    milisec = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("ms").innerHTML = "00";
}

function stopwatch() {
    if (timer === true) {
        milisec += 1;

        if (milisec === 100) {
            second += 1;
            milisec = 0;
        }
        if (second === 60) {
            minute += 1;
            second = 0;
        }
        if (minute === 60) {
            hour += 1;
            minute = 0;
            second = 0;
        }
        const hrStr = hour < 10 ? "0" + hour : hour;
        const minStr = minute < 10 ? "0" + minute : minute;
        const secStr = second < 10 ? "0" + second : second;
        const msStr = milisec < 10 ? "0" + milisec : milisec;
       

        document.getElementById("hr").innerHTML = hrStr;
        document.getElementById("min").innerHTML = minStr;
        document.getElementById("sec").innerHTML = secStr;
        document.getElementById("ms").innerHTML = msStr;

        // Call stopwatch again after 10 milliseconds
        setTimeout(stopwatch, 10);
    }
}
