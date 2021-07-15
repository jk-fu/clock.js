const digitalClock = document.getElementById("digital_time");

// Inject the time into the UI 
const renderDigitalClock = function () {
  const time = new Date();
  digitalClock.textContent = time.toLocaleString('en-US', {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true 
  });
};

// Render the time upon load
renderDigitalClock();

// Update the time each second
setInterval(renderDigitalClock, 1000);