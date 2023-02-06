<template>
  <div class="wrapper">
    <div v-show="isSettingsVisible" class="content">
      <widget-settings />
      <close-icon @closeSettings="toggleVisibility()" />
    </div>

    <div v-show="!isSettingsVisible && weatherList.length > 0" class="content">
      <weather-list :weatherList="weatherList" />
      <settings-icon @openSettings="toggleVisibility()" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import WeatherList from "./components/Weather/WeatherList.vue";
import SettingsIcon from "./components/Weather/SettingsIcon.vue";
import WidgetSettings from "./components/Settings/WidgetSettings";
import CloseIcon from "./components/Settings/CloseIcon.vue";

export default {
  name: "App",
  components: {
    WeatherList,
    SettingsIcon,
    WidgetSettings,
    CloseIcon,
  },
  data() {
    return {
      isSettingsVisible: false,
    };
  },
  methods: {
    ...mapActions(["fetchWeather"]),
    toggleVisibility() {
      this.isSettingsVisible = !this.isSettingsVisible;
    },
  },
  computed: {
    ...mapGetters(["weatherList"]),
  },
  mounted() {
    this.fetchWeather({
      city: "Minsk",
      country: "Belarus",
    });
  },
};
</script>

<style lang="scss">
@import "./assets/styles/main.scss";

.content {
  display: flex;
}
</style>
