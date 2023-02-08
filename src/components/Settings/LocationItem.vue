<template>
  <li class="location-item">
    <p>{{ location.city }}, {{ location.country }}</p>
    <button
      type="button"
      class="location-item__btn"
      @click.prevent="removeItem"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-trash-x"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-labelledby="remove-location-label"
        focusable="false"
      >
        <title id="remove-location-label">Remove location</title>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 7h16" />
        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        <path d="M10 12l4 4m0 -4l-4 4" />
      </svg>
    </button>
  </li>
</template>

<script>
export default {
  name: "LocationItem",
  props: {
    location: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    removeItem() {
      this.$emit("removeItem");
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/variables.scss";

.location-item {
  display: flex;
  justify-content: space-between;
  padding: 6px 8px;
  background-color: $gray;
  &__btn {
    background-color: transparent;
    color: $dark-gray;
    width: 24px;
    height: 24px;
  }
  &:not(:last-child) {
    margin-bottom: 16px;
  }
}
</style>
