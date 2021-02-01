import Vue from 'vue';
import Vuex from 'vuex';
import { nanoid } from 'nanoid';
import router from '../router/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: null,
    reports: [
      {
        id: nanoid(),
        name: 'Wake up',
        description: 'Now',
        tags: [],
      },
      {
        id: nanoid(),
        name: 'All by myself',
        description: 'I just want to be with you. I just want to have something to do. Tonight.',
        tags: [],
      },
      {
        id: nanoid(),
        name: 'Wait',
        description: 'Now',
        tags: ['want'],
      },
    ],
  },
  mutations: {
    addReport(state, { name, description, tags }) {
      state.reports.push({
        name,
        description,
        tags,
        id: nanoid(),
      });
    },
  },
  actions: {
    addReport({ commit }, payload) {
      commit('addReport', payload);
      router.push('/');
    },
  },
  modules: {
  },
});
