<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          outlined
          dense
          chips
          small-chips
          label="Tag filter"
          multiple
        ></v-autocomplete>
      </v-col>
    </v-row>
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
import { reportTags } from '@/data/reportTags';

export default {
  name: 'ReportList',
  components: {
    report: Report,
  },
  data: () => ({
    items: reportTags,
    values: [],
  }),
};
</script>

<style scoped>

</style>
