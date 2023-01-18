import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const timerHtml = document.querySelector('.timer');
const timerSeconds = document.querySelector('span[data-seconds]');
const timerMinutes = document.querySelector('span[data-minutes]');
const timerHours = document.querySelector('span[data-hours]');
const timerDays = document.querySelector('span[data-days]');

let timer = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      btnStart.disabled = false;
    console.log(selectedDates[0]);
  },
};

btnStart.disabled = true;
flatpickr(input, options);

btnStart.addEventListener('click', timeStartCount);

function timeStartCount() {
    btnStart.disabled = true;
    let timer = setInterval(() => {
    const countDate = new Date(input.value) - new Date();
    const { days, hours, minutes, seconds } = convertMs(countDate);

    timerDays.textContent = addLeadingZero(days);
    timerHours.textContent = addLeadingZero(hours);
    timerMinutes.textContent = addLeadingZero(minutes);
    timerSeconds.textContent = addLeadingZero(seconds);

    console.log(`${days}:${hours}:${minutes}:${seconds}`);

    if (countDate <= 1000) {
      clearInterval(timer);
    }
  }, 1000);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

// Розрахунок значень

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}