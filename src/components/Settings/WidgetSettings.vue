<template>
  <div class="settings">
    <p class="settings__title">Settings</p>
    <add-location />
  </div>
</template>

<script>
import AddLocation from "./AddLocation.vue";

export default {
  name: "WidgetSettings",
  components: {
    AddLocation,
  },
};
</script>

<style lang="scss">
.settings {
  min-width: 260px;
  &__title {
    line-height: 36px;
  }
}
</style>
