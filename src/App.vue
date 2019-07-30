<template>
  <v-app id="app">
    <v-content>
    <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      a: require('./config.json')
    }
  },

}
</script>

<style>
</style>
