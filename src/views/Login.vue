<template>
  <div class="login">
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogin() {
      this.$store.commit('SET_ROLE', this.getRandomIntInclusive(1, 3))
      this.$router.push('/')
    },

    getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
}
</script>

<style>
</style>

