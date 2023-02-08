import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weatherList: [],
    locations: JSON.parse(localStorage.getItem("locations") || "[]"),
  },
  getters: {
    weatherList(state) {
      return state.weatherList;
    },
    locations(state) {
      return state.locations;
    },
  },
  mutations: {
    ADD_WEATHER(state, item) {
      state.weatherList.push(item);
    },
    ADD_LOCATION(state, item) {
      state.locations.push(item);
      const locations = JSON.parse(localStorage.getItem("locations") || "[]");
      locations.push(item);
      localStorage.setItem("locations", JSON.stringify(locations));
    },
  },
  actions: {
    async checkLocations({ dispatch, commit, getters }) {
      if (getters.locations.length === 0) {
        let location = {
          city: "Minsk",
          country: "Belarus",
        };
        commit("ADD_LOCATION", location);
      }
      dispatch("getWeather");
    },
    async getWeather({ dispatch, getters }) {
      for (let location of getters.locations) {
        await dispatch("fetchWeather", {
          city: location.city,
          country: location.country,
        });
      }
    },
    async fetchWeather({ commit }, { city, country }) {
      try {
        const res = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${process.env.VUE_APP_WEATHER_API_KEY}`
        );
        commit("ADD_WEATHER", res.data);
      } catch (error) {
        console.log(error);
      }
    },
    setLocation({ commit }, item) {
      commit("ADD_LOCATION", item);
    },
  },
  modules: {},
});
