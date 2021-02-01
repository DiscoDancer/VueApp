<template>
  <div class="no-tasks">
    <v-icon color="primary" size="100">
      mdi-magnify
    </v-icon>
    <div class="text-h5 primary--text">No reports found</div>
  </div>
</template>

<script>
export default {
  name: 'NoReports',
};
</script>

<style lang="scss">

.no-tasks {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
}
</style>
