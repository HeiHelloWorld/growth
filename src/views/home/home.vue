<template>
  <div class="container">
    <router-link to="/a">go to A</router-link> |
    <router-link to="/b">go to B</router-link>
    <div class="wrap"><router-view></router-view></div>
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

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  /* background: #ff8899; */
  .wrap {
    height: 510px;
  }
}
</style>