// get elements
const btn = document.querySelector("button");
// variables
const key = "user your api key here";

// functions
function handleClick() {
  const userCity = document.querySelector("input");
  const city = userCity.value;
  getWeather(city);
}

async function getWeather(city) {
  try {
    const container = document.querySelector("#info");
    const errorP = document.querySelector("#error");

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    );
    const data = await response.json();
    // api data
    const APIfeelsLike = data.main.feels_like;
    const APIhumidity = data.main.humidity;
    const APItemperature = data.main.temp;
    const APIwindSpeed = data.wind.speed;
    const APIweather = data.weather[0].main;
    const APIicon = data.weather[0].icon;
    const APIcity = data.name;
    const APIcountry = data.sys.country;
    // get elements
    const img = document.querySelector("img");
    const temperature = document.querySelector("#temperature");
    const condition = document.querySelector("#condition");
    const feels = document.querySelector("#feels");
    const humidity = document.querySelector("#humidity");
    const speed = document.querySelector("#speed");
    const userCity = document.querySelector("#citySearched");
    const country = document.querySelector("#country");
    const input = document.querySelector("input");

    // give values
    img.src = `http://openweathermap.org/img/wn/${APIicon}.png`;
    temperature.textContent = Math.floor(APItemperature);
    condition.textContent = APIweather;
    feels.textContent = Math.floor(APIfeelsLike);
    humidity.textContent = APIhumidity;
    speed.textContent = APIwindSpeed;
    userCity.textContent = APIcity;
    country.textContent = APIcountry;
    input.value = "";

    // css
    container.classList.remove("hidden");
    errorP.classList.add("hidden");
  } catch (err) {
    const errorP = document.querySelector("#error");
    errorP.classList.remove("hidden");
    console.error(err);
  }
}
// eventListeners
btn.addEventListener("click", handleClick);

// init
// getWeather();
