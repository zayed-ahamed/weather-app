const apiKey = "53c65808e370957d63aaf1c1dda95b04";

const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


// ==========================
// SELECT HTML ELEMENTS
// ==========================

const searchBox =
    document.querySelector("#searchInput");

const searchBtn =
    document.querySelector("#searchBtn");

const weatherIcon =
    document.querySelector(".weather-icon");

const city =
    document.querySelector(".city");

const temp =
    document.querySelector(".temp");

const humidity =
    document.querySelector(".humidity");

const wind =
    document.querySelector(".wind");


// ==========================
// WEATHER FUNCTION
// ==========================

async function checkWeather(cityName) {

    try {

        // API request
        const response = await fetch(
            apiUrl +
            cityName +
            `&appid=${apiKey}`
        );


        // Check response
        if (!response.ok) {

            throw new Error("City not found");

        }


        // Convert response to JSON
        const data = await response.json();

        console.log(data);


        // ==========================
        // DISPLAY WEATHER DATA
        // ==========================

        city.innerHTML =
            data.name;


        temp.innerHTML =
            Math.round(data.main.temp) + "°C";


        humidity.innerHTML =
            data.main.humidity + "%";


        wind.innerHTML =
            data.wind.speed + " km/h";


        // ==========================
        // WEATHER ICON
        // ==========================

        if (data.weather[0].main === "Clouds") {

            weatherIcon.innerHTML = "☁️";

        }

        else if (data.weather[0].main === "Clear") {

            weatherIcon.innerHTML = "☀️";

        }

        else if (data.weather[0].main === "Rain") {

            weatherIcon.innerHTML = "🌧️";

        }

        else if (data.weather[0].main === "Drizzle") {

            weatherIcon.innerHTML = "🌦️";

        }

        else if (data.weather[0].main === "Mist") {

            weatherIcon.innerHTML = "🌫️";

        }

        else if (data.weather[0].main === "Snow") {

            weatherIcon.innerHTML = "❄️";

        }

        else if (data.weather[0].main === "Thunderstorm") {

            weatherIcon.innerHTML = "⛈️";

        }

        else {

            weatherIcon.innerHTML = "🌤️";

        }

    }


    catch (error) {

        console.log(error);

        city.innerHTML = "City not found";

        temp.innerHTML = "--°C";

        humidity.innerHTML = "--%";

        wind.innerHTML = "-- km/h";

        weatherIcon.innerHTML = "❌";

    }

}


// ==========================
// SEARCH BUTTON
// ==========================

searchBtn.addEventListener("click", () => {

    const cityName =
        searchBox.value.trim();


    if (cityName === "") {

        alert("Please enter a city name");

        return;

    }


    checkWeather(cityName);

});


// ==========================
// ENTER KEY
// ==========================

searchBox.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {

        searchBtn.click();

    }

});


// ==========================
// DEFAULT CITY
// ==========================

checkWeather("Kozhikode");