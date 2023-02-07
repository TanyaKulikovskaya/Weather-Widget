<template>
  <div class="settings">
    <p class="settings__title">Settings</p>
    <location-list class="settings__locations" />
    <add-location />
  </div>
</template>

<script>
import AddLocation from "./AddLocation.vue";
import LocationList from "./LocationList.vue";

export default {
  name: "WidgetSettings",
  components: {
    AddLocation,
    LocationList,
  },
};
</script>

<style lang="scss">
.settings {
  min-width: 260px;
  &__title {
    line-height: 36px;
  }
  &__locations {
    margin-bottom: 18px;
  }
}
</style>
