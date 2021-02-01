<template>
  <v-card
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card-title>{{report.name}}</v-card-title>

    <v-card-text>
      <div>{{report.description}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tags</v-card-title>

    <v-card-text>
      <v-chip
        v-for="tag in report.tags"
        :key="tag"
      >
        {{tag}}
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['report'],
  name: 'Report',
  data: () => ({
  }),
};
</script>

<style scoped>

</style>
