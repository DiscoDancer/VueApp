import Vue from 'vue';
import Vuex from 'vuex';
import { nanoid } from 'nanoid';
import router from '../router/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: null,
    snackbar: {
      show: false,
      text: '',
    },
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
    setSearch(state, value) {
      state.search = value;
    },
    addReport(state, { name, description, tags }) {
      state.reports.push({
        name,
        description,
        tags,
        id: nanoid(),
      });
    },
    hideSnackbar(state) {
      state.snackbar.show = false;
    },
    showSnackbar(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }

      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, timeout);
    },
  },
  actions: {
    addReport({ commit }, payload) {
      commit('addReport', payload);
      router.push('/');
      commit('showSnackbar', 'Report added!');
    },
  },
  modules: {
  },
  getters: {
    reportsFiltered(state) {
      if (!state.search) {
        return state.reports;
      }

      return state.reports.filter((x) => x.name.toLowerCase().includes(state.search.toLowerCase()));
    },
  },
});
