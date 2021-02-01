<template>
  <report-list v-if="$store.getters.reportsFiltered.length"/>
  <no-reports v-else></no-reports>

</template>

<script>
import ReportList from '@/components/ReportList.vue';
import NoReports from '@/components/NoReports.vue';

export default {
  name: 'Browse',
  components: {
    'report-list': ReportList,
    'no-reports': NoReports,
  },
};
</script>

<style scoped>

</style>
