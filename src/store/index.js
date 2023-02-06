import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weatherList: [],
  },
  getters: {
    weatherList(state) {
      return state.weatherList;
    },
  },
  mutations: {
    ADD_WEATHER(state, item) {
      state.weatherList.push(item);
    },
  },
  actions: {
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
  },
  modules: {},
});
