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
import { mapGetters, mapActions } from "vuex";

import WeatherItem from "./WeatherItem.vue";

export default {
  name: "WeatherList",
  components: {
    WeatherItem,
  },
  computed: {
    ...mapGetters(["weatherList"]),
  },
  methods: {
    ...mapActions(["fetchWeather"]),
  },
  mounted() {
    this.fetchWeather({
      city: "Bangkok",
      country: "Thailand",
    });
  },
};
</script>

<style lang="scss">
.weather-list {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 12px 8px;
}
</style>
