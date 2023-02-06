<template>
  <div class="wrapper">
    <weather-list />
  </div>
</template>

<script>
import WeatherList from "./components/Weather/WeatherList.vue";

export default {
  name: "App",
  components: {
    WeatherList,
  },
};
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
