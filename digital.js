"use strict";

const currentMonth = document.getElementById("digitalmonth");
const currentDay = document.getElementById("digitalday");
const dayOfWeek = document.querySelectorAll(".day");
const firstHourDigit = document.getElementById("hour1");
// const secondHourDigit = document.getElementById("hour2");
const firstMinuteDigit = document.getElementById("min1");
// const secondMinuteDigit = document.getElementById("min2");
const firstSecondsDigit = document.getElementById("sec1");
// const secondSecondsDigit = document.getElementById("sec2");
const meridiem = document.getElementById("ampm");

setInterval(clock, 1000);

function clock() {
  const startingDate = new Date();
  const dayOfMonth = startingDate.getDate();
  const today = startingDate.getDay();
  const month = startingDate.getMonth() + 1;
  let startingSeconds = startingDate.getSeconds();
  let startingMinutes = startingDate.getMinutes();
  let startingHours = startingDate.getHours();
  let adjustHour = Number(startingHours);
  let adjustSeconds = Number(startingSeconds);
  let adjustMinutes = Number(startingMinutes);
  if (adjustHour < 10) {
    startingHours = "0" + startingDate.getHours();
    meridiem.innerHTML = "AM";
  } else if (adjustHour > 12) {
    startingHours = "0" + (startingDate.getHours() - 12);
    meridiem.innerHTML = "PM";
  }
  if (adjustSeconds < 10) {
    startingSeconds = "0" + startingDate.getSeconds();
  }
  if (adjustMinutes < 10) {
    startingMinutes = "0" + startingDate.getMinutes();
  }

  dayOfWeek[today].classList.add("active");
  editTime(firstHourDigit, startingHours);
  editTime(firstMinuteDigit, startingMinutes);
  editTime(firstSecondsDigit, startingSeconds);
  editTime(currentDay, dayOfMonth);
  editTime(currentMonth, month);
}

function editTime(change, update) {
  change.innerHTML = update;
}

clock();
