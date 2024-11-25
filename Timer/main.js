import "./style.css";

(function () {
  const startButton = document.getElementById("start");
  const resetButton = document.getElementById("reset");
  const hourElement = document.getElementById("hours");
  const minuteElement = document.getElementById("minutes");
  const secondElement = document.getElementById("seconds");

  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  let intervalId = null;

  const timerFunction = () => {
    if (seconds > 60) {
      minutes += parseInt(seconds / 60);
      seconds %= 60;
      minuteElement.value = minutes;
      secondElement.value = seconds;
    }
    
    if (minutes > 60) {
      hours += parseInt(minutes / 60);
      minutes %= 60;
      hourElement.value = hours;
      minuteElement.value = minutes;
    }

    if (seconds != 0) {
      seconds--;
      secondElement.value = seconds;
    } else if (minutes != 0) {
      minutes--;
      minuteElement.value = minutes;
      seconds = 59;
      secondElement.value = seconds;
    } else if (hours != 0) {
      hours--;
      hourElement.value = hours;
      minutes = 59;
      minuteElement.value = minutes;
      seconds = 59;
      secondElement.value = seconds;
    } else {
      hourElement.value = "";
      minuteElement.value = "";
      secondElement.value = "";
      clearInterval(intervalId);
    }
  };

  startButton.addEventListener("click", () => {
    if(startButton.innerText === "Start" || startButton.innerText === "Continue") {
      hours = parseInt(hourElement.value|| "0");
      minutes = parseInt(minuteElement.value|| "0");
      seconds = parseInt(secondElement.value || "0");
      startButton.innerText = "Pause";
      intervalId = setInterval(timerFunction, 1000);
    }else if(startButton.innerText === "Pause") {
      startButton.innerText = "Continue";
      clearInterval(intervalId);
    }
  });

  resetButton.addEventListener("click", () => {
    hourElement.value = "";
    minuteElement.value = "";
    secondElement.value = "";
    clearInterval(intervalId);
  });
})();
