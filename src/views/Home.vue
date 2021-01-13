<template>
  <div class="home">
    <div>home</div>
    <router-link to="/about">about</router-link>
    <router-link to="/adminA">adminA</router-link>
    <router-link to="/adminB">adminB</router-link>
    <router-link to="/devA">devA</router-link>
    <router-link to="/devB">devB</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { routesAdmin, routesDev } from '@/router'

export default {
  computed: {
    ...mapState([
      'role'
    ])
  },

  watch: {
    role: {
      handler: function(val) {
        console.log(val)
        if (val === 1) {
          this.$router.addRoutes(routesAdmin)
        } else if (val === 2) {
          this.$router.addRoutes(routesDev)
        }
      },
      immediate: true
    },
  }
}
</script>

<style>
a {
  margin: 10px;
}
</style>
