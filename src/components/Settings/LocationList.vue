<template>
  <draggable tag="ul" v-model="locationList">
    <location-item
      v-for="(location, index) in locations"
      :key="index"
      :location="location"
      @removeItem="removeItem(index)"
    />
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import { mapGetters, mapActions } from "vuex";
import LocationItem from "./LocationItem.vue";

export default {
  name: "LocationList",
  components: {
    draggable,
    LocationItem,
  },
  computed: {
    ...mapGetters(["locations"]),
    locationList: {
      get() {
        return this.locations;
      },
      set(value) {
        this.updateLocations(value);
      },
    },
  },
  methods: {
    ...mapActions(["removeLocation", "updateLocations"]),
    removeItem(index) {
      this.removeLocation(index);
    },
  },
};
</script>
