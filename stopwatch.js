let playBtn = document.getElementById("timer_play_button");
let pauseBtn = document.getElementById("timer_pause_button");
let resetBtn = document.getElementById("timer_reset_button");
let timeDisplay = document.getElementById("stopwatch_clock");
let breaktimeDisplay = document.getElementById("breaktime_clock");
let matchTimeMax = document.getElementById("match_time_input");
let breakTimeMax = document.getElementById("break_time_input");
let breakTimeStart = false;
let timer = false;

//for test, put submit button to pass on variable
// matchTimeMax.value = 2; 
// breakTimeMax.value = 5;

let totalSecondsIndicator = document.getElementById("total_seconds_indicator");

let totalSeconds = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

function twoChForTimeFormat() {
    let ms = millisecond;
    let s = second;
    let min = minute;    
    let ts = totalSeconds;

    if (minute <= 9) {
        min = "0"+min;
    }
    if (second <= 9) {
        s = "0"+s;
    }
    if (millisecond <= 9) {
        ms = "0"+ms;
    }

    timeDisplay.textContent = `${min}:${s}:${ms}`;
    totalSecondsIndicator.textContent = `${ts}`;
};

function breakTimeWatch() {
    let ms = millisecond;
    let s = second;
    let min = minute;    
    let ts = totalSeconds;

    if (minute <= 9) {
        min = "0"+min;
    }
    if (second <= 9) {
        s = "0"+s;
    }
    if (millisecond <= 9) {
        ms = "0"+ms;
    }

    breaktimeDisplay.textContent = `${min}:${s}:${ms}`;
    totalSecondsIndicator.textContent = `${ts}`;
}

function stopWatch() {
    if (timer) {
        millisecond++;

        if (millisecond == 100) {
            second++;
            millisecond = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            minute = 0;
            second = 0;
        }

        totalSeconds = minute * 60 + second;

        if (!breakTimeStart) {
            twoChForTimeFormat();
        }

        if (breakTimeStart) {
            if (totalSeconds == breakTimeMax.value) {
                audio2.play();
                timer = false;
                resetBtn.disabled = false;
                pauseBtn.disabled = true;
            }
            breakTimeWatch();
        }
        
        if (!breakTimeStart && totalSeconds == matchTimeMax.value) {
            audio2.play();
            timer = false;
            if (breakTimeMax.value == 0) {
                resetBtn.disabled = false;
                pauseBtn.disabled = true;
            }
            if (breakTimeMax.value > 0) {
                // console.log("testBreak");
                breakTimeStart = true;
                second = 0;
                stopWatch2();
            }
        }
        
        setTimeout(stopWatch, 10);
    }
};
twoChForTimeFormat();
console.log(minute, second, millisecond);

function stopWatch2() {    
    let counter = 0;
    playBtn.disabled = true;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;
    const timeout = setInterval(() => {        
        counter++;
        // console.log(counter);
        // Stop the interval after 5 seconds
        if (counter === 5) {
            clearInterval(timeout);
            console.log('Starting break time now');
            setTimeout(() => {                
                audio1.play();
                timer = true;
                pauseBtn.disabled = false;
                stopWatch();
            }, 1000);
        }
    }, 1000);
}

//event listener
//
playBtn.disabled = false;
pauseBtn.disabled = true;
resetBtn.disabled = true;

playBtn.addEventListener("click", () => {
    if (matchTimeMax.value == "") {
        alert("Please input match time!");
    } else if (breakTimeMax.value == "") {
        alert("Please input break time!");
    } else {
        audio1.play();
        timer = true;
        stopWatch();
        matchTimeMax.readOnly = true;
        breakTimeMax.readOnly = true;
        playBtn.disabled = true;
        pauseBtn.disabled = false;
        resetBtn.disabled = true;
    }    
});

pauseBtn.addEventListener("click", () => {
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = false;
    timer = false;
});

resetBtn.addEventListener("click", () => {
    if (window.confirm("Are you sure you want to reset?")) {
        timer = false;
        breakTimeStart = false;
        minute = 0;
        second = 0;
        millisecond = 0;
        totalSeconds = 0;
        twoChForTimeFormat();
        // breakTimeWatch();
        breaktimeDisplay.textContent = "";
        matchTimeMax.readOnly = false;
        breakTimeMax.readOnly = false;
        playBtn.disabled = false;
        pauseBtn.disabled = true;
        resetBtn.disabled = true;
    }
});

var audio1 = new Audio("audio/start.mov");
var audio2 = new Audio("audio/timesup.mov");
//
//

// const closeBannerBtn = document.getElementById("closeBannerBtn");
const popupBanner = document.getElementById("popupBanner");
const popupBanner2 = document.getElementById("popupBanner2");
const overlay = document.getElementById("overlay");

// closeBannerBtn.addEventListener("click", function () {
//     popupBanner.classList.remove("show");
//     overlay.classList.remove("show");
// });

// Optionally, close the banner when clicking on the overlay
overlay.addEventListener("click", function () {
    popupBanner.classList.remove("show");
    popupBanner2.classList.remove("show");
    overlay.classList.remove("show");
});

function showTime() {
    // Getting current time and date
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let time = new Date();
    let date = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    let day = time.getDay();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = " AM";

    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = " PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = " AM";
    }

    // hour = hour < 10 ? "0" + hour : hour;
    hour = hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime =
        hour +
        ":" +
        min +
        ":" +
        sec +
        am_pm;

    let currentDay = weekday[day];
    let currentMonth = monthNames[month];
    // Displaying the time
    document.getElementById(
        "currentDate"
    ).innerHTML = `${`Local time:`} ${currentTime} - ${currentDay} - ${currentMonth} ${date}, ${year}`;
}
showTime();
setInterval(showTime, 1000);