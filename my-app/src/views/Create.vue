<template>
  <v-container>
    <v-row class="pb-5">
      <v-col cols="12">
        <h1 class="text-center" color="blue-grey lighten-1">Create report</h1>
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12">
        <report-form class="ma-3"></report-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ReportForm from '@/components/ReportForm.vue';

export default {
  name: 'Create',
  components: {
    'report-form': ReportForm,
  },
};
</script>

<style scoped lang="scss">
  h1 {
    color: rgba(0, 0, 0, 0.87);
  }
</style>
