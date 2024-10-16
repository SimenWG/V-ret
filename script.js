const apiKey = "2b82c53c3f0745e5866bacc652668b72";

function search() {
  const cityName = document.getElementById("input").value;
  const countryCode = "NO";
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${apiKey}&units=metric`;

  fetch(api)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        
      document.querySelector(".info").innerHTML = `
                <p>${data.name}, ${countryCode}</p>
                <h2>${data.main.temp}°C</h2>
                <p>${
                  data.weather[0].description.charAt(0).toUpperCase() +
                  data.weather[0].description.slice(1)
                }</p>
                <p>${data.main.temp_min}°C / ${data.main.temp_max}°C</p>
            `;
    })
    .catch((error) => {
      console.error("Error fetching the weather data:", error);
      document.querySelector(
        ".info"
      ).innerHTML = `<p>Could not fetch weather data. Please try again.</p>`;
    });
}

document.getElementById("input").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    search();
  }
});