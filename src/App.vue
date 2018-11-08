<template>

  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <v-toolbar dark color="primary">
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

    <v-toolbar-title class="white--text" >BPM-LMS</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list class="pa-1">
        

          <v-list-tile-content>
            <v-list-tile-title>BPM-LMS</v-list-tile-title>
          </v-list-tile-content>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title @click="home()">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ]
    }
  },
  methods: {
    home: function () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
