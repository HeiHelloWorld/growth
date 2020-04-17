<template>
  <div class="nav">
    <router-link to="/">Home</router-link>&nbsp;&nbsp;&nbsp;
    <!-- <router-link to="/main/tianfu">Main</router-link>&nbsp;&nbsp;&nbsp; -->
    <router-link :to="{name: 'Main', params: { username }}">Main</router-link>&nbsp;&nbsp;&nbsp;
    <router-link :to="{name: 'Aa' }">Aa</router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return{
      username: 'tianfu'
    }
  }

}
</script>

<style lang="scss" scoped>

.nav {
  a {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
