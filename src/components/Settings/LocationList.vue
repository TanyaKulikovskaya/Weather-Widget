<template>
  <ul>
    <li
      v-for="(item, index) in locations"
      :key="index"
      class="location-list__item"
    >
      {{ item.city }}, {{ item.country }}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LocationList",
  computed: {
    ...mapGetters(["locations"]),
  },
};
</script>

<style lang="scss">
.location-list__item {
  padding: 6px 8px;
  background-color: #dee2e6;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
}
</style>
