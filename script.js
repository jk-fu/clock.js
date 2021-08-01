// Import modules
import { handleGetUserLocation } from "./location.js";

// Access the html elements 
const digitalClock = document.getElementById("digital_time");
const analogClockHour = document.getElementById("analog_hour");
const analogClockMinute = document.getElementById("analog_minute");
const analogClockSecond = document.getElementById("analog_second");

// Inject the digital time into the UI 
const renderDigitalClock = function () {
  const time = new Date();
  digitalClock.textContent = time.toLocaleString('en-US', {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true 
  });
};

// Render the digital clock upon load
renderDigitalClock();

// Update the digital time each second
setInterval(renderDigitalClock, 1000);

// Multiplier for analogClock minutes and hours given a circle is 360deg 
const deg = 6;

// Render the analog clock into the UI
setInterval(() => {
  const time = new Date(); 
  let hh = time.getHours() * 30;
  let mm = time.getMinutes() * deg;
  let ss = time.getSeconds() * deg;

  analogClockHour.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
  analogClockMinute.style.transform = `rotateZ(${mm}deg)`;
  analogClockSecond.style.transform = `rotateZ(${ss}deg)`;
});

// Req User Location
handleGetUserLocation();