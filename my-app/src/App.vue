<template>
  <v-app id="inspire">
    <v-navigation-drawer
      app
      v-model="drawer"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Demo
          </v-list-item-title>
          <v-list-item-subtitle>
            Vue app
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      color="primary"
      dark
      src="purple.jpg"
      app
      prominent
      height="170"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container fluid>
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search></search>
        </v-row>
        <v-row>
          <v-app-bar-title class="ml-4 text-h4">Vue app</v-app-bar-title>
        </v-row>
        <v-row>
          <live-date-time></live-date-time>
        </v-row>
      </v-container>

    </v-app-bar>
    <v-main>
      <router-view></router-view>
      <snackbar/>
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from '@/components/Snackbar.vue';
import LiveDateTime from '@/components/LiveDateTime.vue';
import Search from '@/components/Search.vue';

export default {
  name: 'App',
  data: () => ({
    drawer: null,
    items: [
      { title: 'Browse', icon: 'mdi-format-list-checks', to: '/' },
      { title: 'Create', icon: 'mdi-plus', to: '/create' },
    ],
  }),
  components: {
    snackbar: Snackbar,
    'live-date-time': LiveDateTime,
    search: Search,
  },
};
</script>
