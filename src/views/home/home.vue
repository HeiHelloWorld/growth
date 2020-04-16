<template>
  <div class="container">
    <router-link to="/a">go to A</router-link> |
    <router-link to="/b">go to B</router-link>
    <div style="height:800px;"><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {

    }
  }

}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  /* background: #ff8899; */
}
</style>