function timer() {
  const deadline = '2022-08-5';

  function getTimeRemaining(endTime) {
    let days, hours, minutes, seconds;
    const time = Date.parse(endTime) - Date.parse(new Date());
    if (time <= 0) {
      days, hours, minutes, (seconds = 0);
    } else {
      days = Math.floor(time / (1000 * 24 * 60 * 60));
      hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((time / (1000 * 60)) % 60);
      seconds = Math.floor((time / 1000) % 60);
    }

    return {
      time,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function checkZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      daysElem = timer.querySelector('#days'),
      hoursElem = timer.querySelector('#hours'),
      minutesElem = timer.querySelector('#minutes'),
      secondsElem = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      const { time, days, hours, minutes, seconds } = getTimeRemaining(endtime);

      daysElem.textContent = checkZero(days);
      hoursElem.textContent = checkZero(hours);
      minutesElem.textContent = checkZero(minutes);
      secondsElem.textContent = checkZero(seconds);

      if (time <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);
}

module.exports = timer;
