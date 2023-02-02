import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";

import vueCustomElement from "vue-custom-element";

Vue.use(vueCustomElement);

App.store = store;

Vue.customElement("weather-widget", App);
