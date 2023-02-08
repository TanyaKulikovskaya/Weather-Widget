<template>
  <ul v-show="weatherList.length > 0" class="weather-list">
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
  methods: {
    ...mapActions(["checkLocations"]),
  },
  computed: {
    ...mapGetters(["weatherList"]),
  },
  mounted() {
    this.checkLocations();
  },
};
</script>
