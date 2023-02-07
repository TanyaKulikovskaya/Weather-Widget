<template>
  <div>
    <form class="add-location-form" @submit.prevent="addLocation()">
      <input
        type="text"
        v-model.trim="location.city"
        placeholder="City"
        class="add-location-form__input"
      />
      <input
        type="text"
        v-model.trim="location.country"
        placeholder="Country"
        class="add-location-form__input"
      />

      <button type="submit" :disabled="!location.country || !location.city">
        Add Location
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddLocation",
  data() {
    return {
      location: {
        city: "",
        country: "",
      },
    };
  },
  methods: {
    ...mapActions(["setLocation", "fetchWeather"]),
    addLocation() {
      this.setLocation(this.location);
      this.fetchWeather(this.location);
      this.clearInputs();
    },
    clearInputs() {
      this.location = {
        country: "",
        city: "",
      };
    },
  },
};
</script>

<style lang="scss">
.add-location-form {
  display: flex;
  flex-direction: column;
  &__input {
    margin-bottom: 12px;
  }
}
</style>
