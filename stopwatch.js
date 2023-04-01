var stopwatch = document.getElementById("stopwatch");
var startButton = document.getElementById("startButton");
var stopButton = document.getElementById("stopButton");
var resetButton = document.getElementById("resetButton");
var seconds = 0;
var minutes = 0;
var hours = 0;
var displaySeconds = 0;
var displayMinutes = 0;
var displayHours = 0;
var interval = null;

startButton.addEventListener("click", function () {
  interval = setInterval(function () {
    seconds++;
    if (seconds / 60 === 1) {
      seconds = 0;
      minutes++;
      if (minutes / 60 === 1) {
        minutes = 0;
        hours++;
      }
    }

    if (seconds < 10) {
      displaySeconds = "0" + seconds.toString();
    } else {
      displaySeconds = seconds;
    }

    if (minutes < 10) {
      displayMinutes = "0" + minutes.toString();
    } else {
      displayMinutes = minutes;
    }

    if (hours < 10) {
      displayHours = "0" + hours.toString();
    } else {
      displayHours = hours;
    }

    stopwatch.innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}`;
  }, 1000);
});

stopButton.addEventListener("click", function () {
  clearInterval(interval);
});

resetButton.addEventListener("click", function () {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  stopwatch.innerHTML = "00:00:00";
});
