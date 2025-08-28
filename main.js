const inputVal = document.querySelector('#cityinput');
const submitBtn = document.querySelector('#submitBtn');
const city = document.querySelector('#cityoutput');
const description = document.querySelector('#description');
const temp = document.querySelector('#temp');
const wind = document.querySelector('#wind');


const API_KEY = "aea251f5369cdb705bfbe31791d3a603";

submitBtn.addEventListener('click', () => {
  const cityName = inputVal.value.trim();
  if (!cityName) {
    alert("Please enter a city name!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.cod !== 200) {
        alert(`Error: ${data.message}`);
        return;
      }

      city.textContent = `📍 ${data.name}, ${data.sys.country}`;
      description.textContent = `🌦️ ${data.weather[0].description}`;
      temp.textContent = `🌡️ ${data.main.temp} °C`;
      wind.textContent = `💨 ${data.wind.speed} km/h`;
    })
    .catch(err => {
      console.error(err);
      alert("Error fetching weather data! Please try again later.");
    });
});
