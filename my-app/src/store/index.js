import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: null,
    reports: [
      {
        id: 1,
        name: 'Wake up',
        description: 'Now',
        tags: [],
      },
      {
        id: 2,
        name: 'All by myself',
        description: 'I just want to be with you. I just want to have something to do. Tonight.',
        tags: [],
      },
      {
        id: 3,
        name: 'Wait',
        description: 'Now',
        tags: ['want'],
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
