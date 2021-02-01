<template>
  <div>
    <report
      v-for="report in $store.state.reports"
      :key="report.id"
      :report="report"
    >
    </report>
  </div>
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
