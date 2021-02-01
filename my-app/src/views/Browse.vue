<template>
  <div>
    <v-container>
      <v-row class="pb-5">
        <v-col cols="12">
          <h1 class="text-center">Reports Browser</h1>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            :value="$store.state.tags"
            :items="items"
            outlined
            dense
            chips
            small-chips
            label="Tag filter"
            multiple
            @input="$store.commit('setTags', $event)"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
    <report-list v-if="$store.getters.reportsFiltered.length"/>
    <no-reports v-else></no-reports>
  </div>
</template>

<script>
import ReportList from '@/components/ReportList.vue';
import NoReports from '@/components/NoReports.vue';
import { reportTags } from '@/data/reportTags';

export default {
  name: 'Browse',
  components: {
    'report-list': ReportList,
    'no-reports': NoReports,
  },
  data: () => ({
    items: reportTags,
  }),
};
</script>

<style scoped lang="scss">
  h1 {
    color: rgba(0, 0, 0, 0.87);
  }
</style>
