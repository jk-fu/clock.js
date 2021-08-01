// Access the html elements 
const msg = document.getElementById("msg_box");

function handleGetUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  } else { 
    msg.innerHTML = "Geolocation is not supported by this browser";
  }
}

// handle success case
function handleSuccess(position) {
  const {
      latitude,
      longitude
  } = position.coords;

  msg.classList.add('success');
  msg.textContent = `Your location: (${latitude},${longitude})`;
}

// handle error case
function handleError() {
  msg.classList.add('error');
  msg.textContent = `Failed to get your location`;
}

// Export variables and functions
export {
  msg, handleGetUserLocation
};