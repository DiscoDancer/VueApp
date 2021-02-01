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
        name: 'Golden Years',
        description: 'Don\'t let me hear you say life\'s taking you nowhere Angel Come get up, my baby',
        tags: [],
      },
      {
        id: nanoid(),
        name: 'Ziggy Stardust',
        description: 'Ziggy played guitar Jamming good with Weird and Gilly And the Spiders from Mars',
        tags: ['Invest', 'Daily'],
      },
      {
        id: nanoid(),
        name: 'Space Oddity',
        description: 'Ground Control to Major Tom  Ground Control to Major Tom Take your protein pills and put your helmet on',
        tags: ['Customer'],
      },
      {
        id: nanoid(),
        name: 'Heroes',
        description: 'I, I will be king And you, you will be queen Though nothing will drive them away We can beat them, just for one day',
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
