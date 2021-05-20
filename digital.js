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
  let startingSeconds = startingDate.getSeconds().toString();
  let startingMinutes = startingDate.getMinutes().toString();
  let startingHours = startingDate.getHours().toString();

  if (startingHours.length <2) {
    startingHours = "0" + startingDate.getHours();
  }
    if (startingSeconds.length < 2) {
    startingSeconds = "0" + startingDate.getSeconds();
  }
  if (startingMinutes.length < 2) {
    startingMinutes = "0" + startingDate.getMinutes();
  }
  if (startingHours>12&&startingHours<22) {
    startingHours = "0" + (startingDate.getHours().toString() - 12);
    meridiem.innerHTML = "PM";
  } else if (startingHours>=22) {
    startingHours = startingDate.getHours().toString() - 12;
    meridiem.innerHTML = "PM";
  } else {
    meridiem.innerHTML = "AM";
  }

  dayOfWeek[today].classList.add("active");
  if (dayOfWeek[today] == dayOfWeek[0]) {
    dayOfWeek[dayOfWeek.length-1].classList.remove("active");
  } else {
    dayOfWeek[today-1].classList.remove("active");
  }
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
