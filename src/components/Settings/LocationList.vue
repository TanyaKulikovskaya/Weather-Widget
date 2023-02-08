<template>
  <ul>
    <location-item
      v-for="(location, index) in locations"
      :key="index"
      :location="location"
      @removeItem="removeItem(index)"
    />
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import LocationItem from "./LocationItem.vue";

export default {
  name: "LocationList",
  components: {
    LocationItem,
  },
  computed: {
    ...mapGetters(["locations"]),
  },
  methods: {
    ...mapActions(["removeLocation"]),
    removeItem(index) {
      this.removeLocation(index);
    },
  },
};
</script>
