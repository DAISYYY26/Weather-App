
const apiKey = "Your API KEY";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {


        var data = await response.json();



        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "https://media.istockphoto.com/id/1550325436/photo/3d-weather-cloud-with-rain-and-sun-rainy-day-icon-isolated-on-gray-background-3d-rendering.jpg?s=612x612&w=0&k=20&c=s6el6hAGRQyCxBF65UneiMl1xKRTLyZar3OS9RIFhUg="

        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "https://cdn-icons-png.freepik.com/256/3222/3222807.png?ga=GA1.1.790924945.1731121764&semt=ais_hybrid"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "https://cdn-icons-png.freepik.com/256/523/523551.png?uid=R172971764&ga=GA1.1.790924945.1731121764&semt=ais_hybrid"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "https://cdn-icons-png.freepik.com/256/9694/9694916.png?uid=R172971764&ga=GA1.1.790924945.1731121764&semt=ais_hybrid"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "https://cdn-icons-png.freepik.com/256/13882/13882534.png?uid=R172971764&ga=GA1.1.790924945.1731121764&semt=ais_hybrid"
        }

        document.querySelector(".weather").style.display = "block"; 
        document.querySelector(".error").style.display = "none";

    }

}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

});

