<template>
  <li class="weather-item">
    <h4 class="weather-item__title">
      {{ weather.name }}, {{ weather.sys.country }}
    </h4>
    <div class="weather-item__subtitle">
      <img
        :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
        alt="weather"
      />
      <span>{{ weather.main.temp | round }}°C</span>
    </div>
    <div class="weather-item__content">
      <p>
        Feels like {{ weather.main.feels_like | round }}°C.
        {{ weather.weather[0].description | capitalize }}.
      </p>
      <p>
        {{ weather.wind.speed }}m/s. Pressure: {{ weather.main.pressure }}hPa.
      </p>
      <p>Humidity: {{ weather.main.humidity }}%</p>
      <p>Visibility: {{ weather.visibility / 1000 }}km</p>
    </div>
  </li>
</template>

<script>
export default {
  name: "WeatherItem",
  props: {
    weather: {
      type: Object,
      default: () => {},
    },
  },
  filters: {
    capitalize: (value) => {
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    round: (value) => {
      return Math.round(value);
    },
  },
};
</script>

<style lang="scss">
.weather-item {
  padding: 16px 22px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  &__title {
    margin-bottom: 12px;
  }
  &__subtitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    img {
      height: 100px;
      width: 100px;
    }
    span {
      font-size: 26px;
    }
  }
  &__content {
    font-size: 14px;
    p {
      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  }
}
</style>
