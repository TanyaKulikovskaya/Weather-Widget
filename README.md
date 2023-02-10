# Embeddable Vue.js Weather Widget

### Built with

* [Vue.JS](https://vuejs.org/)
* [Vuex](https://vuex.vuejs.org/) (state management)
* [Axios](https://axios-http.com/) (making an HTTP requests)
* [Vue Draggable](https://sortablejs.github.io/Vue.Draggable/#/simple) (drag-and-drop component based on Sortable.js)
* [Vue Custom Element](https://karol-f.github.io/vue-custom-element/#//) (render Vue.JS app as an HTML custom element)

### Features

This project implements the following features:

* Fetching data from [Open Weather API](https://openweathermap.org/api)
* Adding new locations
* Removing previously added locations
* Reordering added locations by dragging and dropping them

### Project setup
```
Create .env file in the root directory that contains key/value pair defining the project's required environment variable.

key - VUE_APP_WEATHER_API_KEY
value - your [Open Weather API](https://openweathermap.org/api) key.

npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
