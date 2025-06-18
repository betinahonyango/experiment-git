let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours().toString().padStart(2, "0");
let minutes = now.getMinutes().toString().padStart(2, "0");

let dateTimeElement = document.getElementById("date-time");
if (dateTimeElement) {
  dateTimeElement.innerHTML = `${day} ${hours}:${minutes}`;
}

let form = document.getElementById("weather-form");
let cityInput = document.getElementById("city");
let cityName = document.getElementById("city-name");

if (form && cityInput && cityName) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    cityName.innerHTML = cityInput.value;
  });
}
function displayTemperature(response) {
  let temperatureElement = document.getElementById("temperature");
  let temperatureNow = Math.round(response.data.temperature.current);
  let cityNameElement = document.getElementById("city-name");
  cityNameElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperatureNow;
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.getElementById("city");
  let citySearch = searchInput.value;

  let apiKey = "50do3122d9528t350cd40fbf4dc0035a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${citySearch}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

let searchForm = document.getElementById("weather-form");
if (searchForm) {
  searchForm.addEventListener("submit", searchCity);
}
