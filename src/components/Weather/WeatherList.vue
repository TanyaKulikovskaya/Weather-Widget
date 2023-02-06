<template>
  <ul class="weather-list">
    <weather-item
      v-for="weather in weatherList"
      :key="weather.id"
      :weather="weather"
    />
  </ul>
</template>

<script>
import WeatherItem from "./WeatherItem.vue";

export default {
  name: "WeatherList",
  components: {
    WeatherItem,
  },
  props: {
    weatherList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
