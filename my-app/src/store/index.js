import Vue from 'vue';
import Vuex from 'vuex';
import { nanoid } from 'nanoid';
import router from '../router/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: null,
    tags: [],
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
        tags: ['Invest', 'Daily'],
      },
      {
        id: nanoid(),
        name: 'Wait',
        description: 'Now',
        tags: ['Customer'],
      },
    ],
  },
  mutations: {
    setSearch(state, value) {
      state.search = value;
    },
    setTags(state, value) {
      state.tags = value;
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
      let reports;

      if (!state.search) {
        reports = state.reports;
      } else {
        reports = state.reports
          .filter((x) => x.name.toLowerCase().includes(state.search.toLowerCase()));
      }

      if (state.tags && state.tags.length > 0) {
        reports = reports
          .filter(
            (report) => report.tags.length > 0
              && state.tags.every((tag) => report.tags.includes(tag)),
          );
      }

      return reports;
    },
  },
});
