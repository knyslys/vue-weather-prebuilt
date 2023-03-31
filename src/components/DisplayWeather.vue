<template>
  <div class="weather-info">
    <svg
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      class="toggle-weather"
      :class="isToggled ? 'alreadyFavorite' : ''"
      @click="$emit('toggle-favorite', city)"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
      ></path>
    </svg>

    <div class="weather-image">
      <img :src="getWeatherIcon" alt="test" />
    </div>
    <div class="desc">
      <span>{{ weatherDesc }} <img :src="icon" /></span>
    </div>
    <div class="weather-stats">
      <ul>
        <li>
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="icon"
          >
            <path
              d="M14.916 2.404a.75.75 0 01-.32 1.012l-.596.31V17a1 1 0 01-1 1h-2.26a.75.75 0 01-.75-.75v-3.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5H2V9.957a.75.75 0 01-.596-1.372L2 8.275V5.75a.75.75 0 011.5 0v1.745l10.404-5.41a.75.75 0 011.012.32zM15.861 8.57a.75.75 0 01.736-.025l1.999 1.04A.75.75 0 0118 10.957V16.5h.25a.75.75 0 110 1.5h-2a.75.75 0 01-.75-.75V9.21a.75.75 0 01.361-.64z"
            ></path>
          </svg>

          <span class="city-info"
            >City: {{ city }} <img :src="flag" class="icon" alt="Country Flag"
          /></span>
        </li>
        <li>
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="icon"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
            ></path>
          </svg>
          <span>Temperature: {{ temperature }} °C</span>
        </li>
        <li>
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="icon"
          >
            <path
              d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z"
            ></path>
          </svg>

          <span>Feels like: {{ feelsLike }} °C</span>
        </li>
        <li>
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="icon"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z"
            ></path>
          </svg>

          <span>Wind speed: {{ windSpeed }} m/s</span>
        </li>
        <li>
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="icon"
          >
            <path
              d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z"
            ></path>
          </svg>

          <span
            >Sunrise: {{ sunrise.getHours() }} h,
            {{ sunrise.getMinutes() }} m</span
          >
        </li>
        <li>
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="icon"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
            ></path>
          </svg>

          <span
            >Sunset: {{ sunset.getHours() }} h,
            {{ sunset.getMinutes() }} m</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<!-- Clear, Rain, Mist, Clouds -->
<script>
export default {
  emits: ["toggle-favorite"],
  props: ["weather-info", "is-toggled", "set-display"],

  data() {
    return {
      city: this.weatherInfo.weatherData.city,
      temperature: this.weatherInfo.weatherData.temp,
      feelsLike: this.weatherInfo.weatherData.feelsLike,
      weatherStatus: this.weatherInfo.weatherData.weatherStatus,
      weatherDesc: this.weatherInfo.weatherData.weatherDesc,
      windSpeed: this.weatherInfo.weatherData.windSpeed,
      sunrise: this.weatherInfo.weatherData.sunrise,
      sunset: this.weatherInfo.weatherData.sunset,
      icon:
        "https://openweathermap.org/img/wn/" +
        this.weatherInfo.weatherData.icon +
        "@2x.png",
      flag: `http://purecatamphetamine.github.io/country-flag-icons/3x2/${this.weatherInfo.weatherData.flag}.svg`,
    };
  },

  methods: {},

  computed: {
    getWeatherIcon() {
      let icon;
      if (this.weatherStatus === "Clear") {
        icon = require("../assets/images/weather-clear.png");
      }
      if (this.weatherStatus === "Rain") {
        icon = require("../assets/images/weather-rain.png");
      }
      if (this.weatherStatus === "Mist") {
        icon = require("../assets/images/weather-mist.png");
      }

      if (this.weatherStatus == "Clouds") {
        icon = require("../assets/images/weather-cloud.png");
      }
      if (this.weatherStatus == "Thunderstorm") {
        icon = require("../assets/images/weather-thunderstorm.png");
      }
      if (this.weatherStatus == "Drizzle") {
        icon = require("../assets/images/weather-drizzle.png");
      }
      if (this.weatherStatus == "Snow") {
        icon = require("../assets/images/weather-snow.png");
      }
      if (this.weatherStatus == "Smoke") {
        icon = require("../assets/images/weather-smoke.png");
      }
      if (this.weatherStatus == "Haze") {
        icon = require("../assets/images/weather-haze.png");
      }
      if (this.weatherStatus == "Fog") {
        icon = require("../assets/images/weather-fog.png");
      }
      if (this.weatherStatus == "Sand") {
        icon = require("../assets/images/weather-sand.png");
      }
      if (this.weatherStatus == "Dust") {
        icon = require("../assets/images/weather-dust.png");
      }
      if (this.weatherStatus == "Ash") {
        icon = require("../assets/images/weather-dust.png");
      }
      if (this.weatherStatus == "Squall") {
        icon = require("../assets/images/weather-squall.png");
      }
      if (this.weatherStatus == "Tornado") {
        icon = require("../assets/images/weather-tornado.png");
      }

      return icon;
    },
  },
};
</script>

<style scoped>
.hide {
  display: none;
}
.weather-info {
  position: relative;
}
.weather-image {
  width: clamp(10rem, 20%, 30rem);
  margin: 0 auto;
  background-color: #655a7c;
  border-radius: 500%;
  padding: 2rem;
  /* animation: displayStats 0.4s linear;
  animation-fill-mode: backwards;
  animation-delay: 1s; */
}

.weather-image img {
  max-width: 100%;
}

.desc {
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 1.5rem;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* animation: displayStats 0.4s linear;
  animation-fill-mode: backwards;
  animation-delay: 1s; */
}

.desc span {
  background-color: #655a7c;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 3rem;
  border-radius: 10px;
  text-transform: capitalize;
  color: #fff;
}

.desc span img {
  max-width: 5rem;
}
.city-info {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
}

@keyframes displayStats {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

li {
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 1.6rem;
}
.icon {
  max-width: 3rem;
}

.toggle-weather {
  position: absolute;
  top: 0;
  right: 0;
  max-width: 3rem;
  fill: #777777;
  cursor: pointer;
  /* animation: displayStats 0.4s linear;
  animation-fill-mode: backwards;
  animation-delay: 1s; */
}

.toggle-weather.alreadyFavorite {
  fill: #ffc400;
}
</style>
