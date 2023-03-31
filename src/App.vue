<!-- https://api.openweathermap.org/data/2.5/weather?q=vilnius&units=metric&appid=1e2b86cf54738780e8c4b844c277a71a -->
<!-- api:  1e2b86cf54738780e8c4b844c277a71a -->
<!-- :class="!weatherInfo.isLoading ? 'open' : '' -->
<template>
  <the-favorites
    key="1"
    :favorites="favorites"
    @fetch-favorite="cityRequest"
  ></the-favorites>

  <the-header :image="setHeaderImage"></the-header>
  <div
    class="main-app"
    key="2"
    v-auto-animate="{ duration: 500, easing: 'ease-out' }"
  >
    <display-weather
      v-if="showWeather"
      :weather-info="weatherInfo"
      :is-toggled="isToggled"
      @toggle-favorite="toggleFavorite"
    ></display-weather>

    <the-search
      @look-for-city="cityRequest"
      :is-error="errorState.isError"
      :error-message="errorState.errorMessage"
    ></the-search>
  </div>

  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import DisplayWeather from "./components/DisplayWeather.vue";
import TheSearch from "./components/TheSearch.vue";
import TheFavorites from "./components/TheFavorites.vue";
if (localStorage.getItem("cachedfavorites") === null) {
  localStorage.setItem("cachedfavorites", "[]");
}

export default {
  components: {
    "the-header": TheHeader,
    "display-weather": DisplayWeather,
    "the-search": TheSearch,
    "the-favorites": TheFavorites,
  },

  data() {
    return {
      favorites: JSON.parse(localStorage.getItem("cachedfavorites")),
      weatherInfo: {
        isLoading: undefined,
        weatherData: {
          temp: undefined,
          feelsLike: undefined,
          weatherStatus: undefined,
          windSpeed: undefined,
          weatherDesc: undefined,
          icon: undefined,
          city: undefined,
          flag: undefined,
        },
      },
      showWeather: undefined,
      errorState: {
        isError: false,
        errorMessage: "",
      },
    };
  },
  computed: {
    setHeaderImage() {
      let image;
      if (this.weatherInfo.isLoading) {
        image = require("./assets/images/loading.gif");
      } else if (
        !this.weatherInfo.isLoading ||
        this.weatherInfo.isLoading === undefined
      ) {
        image = require("./assets/images/rainbow.png");
      }
      return image;
    },
    isToggled() {
      const savedCities = this.favorites;
      const findCity = savedCities.find(
        (c) => c === this.weatherInfo.weatherData.city
      );
      if (findCity) {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    toggleFavorite(city) {
      console.log(city);
      let savedCities = this.favorites;
      const findCity = savedCities.find((c) => c === city);
      if (findCity) {
        const updated = savedCities.filter((c) => c !== city);
        this.favorites = updated;
      } else {
        this.favorites.push(city);
      }
      localStorage.setItem("cachedfavorites", JSON.stringify(this.favorites));
    },
    cityRequest(city) {
      this.showWeather = false;
      this.weatherInfo.isLoading = true;
      this.errorState.isError = false;
      this.errorState.errorMessage = "";
      setTimeout(async () => {
        try {
          const request = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1e2b86cf54738780e8c4b844c277a71a`
          );
          const response = await request.json();
          console.log(response);
          const sunrise = new Date(response.sys.sunrise * 1000);
          const sunset = new Date(response.sys.sunset * 1000);
          this.weatherInfo.isLoading = false;
          this.weatherInfo.weatherData = {
            temp: response.main.temp,
            feelsLike: response.main.feels_like,
            weatherStatus: response.weather[0].main,
            windSpeed: response.wind.speed,
            weatherDesc: response.weather[0].description,
            sunrise: sunrise,
            sunset: sunset,
            city: response.name,
            icon: response.weather[0].icon,
            flag: response.sys.country,
          };
          this.showWeather = true;
        } catch (er) {
          this.errorState = {
            isError: true,
            errorMessage: "Oops, maybe wrong city?",
          };
        } finally {
          this.weatherInfo.isLoading = false;
        }
      }, 1500);
    },
  },
  // watch: {
  //   errorState() {
  //     if (this.errorState.isError) {
  //       alert(this.errorState.errorMessage);
  //     }
  //   },
  // },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600&display=swap");
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: "Cabin", sans-serif;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #defffc;
}

#app {
  min-height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
}

.main-app {
  /* min-width: 600px; */
  min-width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 20px;
  background-color: #e2e4f6;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  transition: 1s all linear;
  /* max-height: 10rem; */
}

.main-app li {
  list-style: none;
}

@media (max-width: 50.75em) {
  html {
    font-size: 56.25%;
  }
}
</style>
