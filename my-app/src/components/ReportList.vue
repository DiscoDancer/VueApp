<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="4"
        v-for="report in $store.getters.reportsFiltered"
        :key="report.id"
      >
        <report
          :report="report"
        >
        </report>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Report from '@/components/Report.vue';

export default {
  name: 'ReportList',
  components: {
    report: Report,
  },
};
</script>

<style scoped>

</style>
