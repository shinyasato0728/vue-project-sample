<template>
  <div>
    <Header />
    <h1>{{ hello }}</h1>
    <router-link to="/index">Index</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  data () {
    return {
      hello: 'Hello World!' + 'Vue.JS'
    }
  },
  components: {
    Header
  }
}
</script>

<style>
h1 {
  color: #ff0000;
}
</style>
