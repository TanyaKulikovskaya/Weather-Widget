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

      <button
        type="submit"
        :disabled="!location.country || !location.city"
        class="add-location-form__btn"
      >
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
@import "../../assets/styles/variables.scss";

.add-location-form {
  display: flex;
  flex-direction: column;
  &__input {
    margin-bottom: 12px;
  }
  &__btn {
    padding: 6px 12px;
    font-size: 12px;
    line-height: 16px;
    border-radius: 6px;
    text-transform: uppercase;
    background-color: $dark-gray;
    color: $white;
    transition-duration: 0.2s;
    &:hover {
      background-color: $accent;
      color: $main-font-color;
      transition-duration: 0.3s;
    }
    &:disabled {
      background-color: $gray;
      color: $main-font-color;
    }
  }
}
</style>
