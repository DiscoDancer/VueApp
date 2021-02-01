<template>
  <div class="search-wrapper pt-3">
    <v-text-field
      :value="$store.state.search"
      @focus="searchClosed = false"
      @blur="searchClosed = true"
      @input="$store.commit('setSearch', $event)"
      :class="{closed: searchClosed && !$store.state.search}"
      placeholder="Search by name"
      prepend-inner-icon="mdi-magnify"
      filled
      dense
      clearable
      single-line
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchClosed: true,
    };
  },
};
</script>
