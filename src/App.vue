<template>
  <div id="app">
    <el-container>
      <el-header height="80px">
        <layout-header />
      </el-header>
      <el-container>
        <el-aside v-if="$route.meta.showAside" width="200px">
          <layout-aside />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
      <el-footer height="300px">
        <layout-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import LayoutHeader from '@/layout/header/header.vue'
import LayoutAside from '@/layout/aside/aside.vue'
import LayoutFooter from '@/layout/footer/footer.vue'
export default {
  name: 'App',
  components: {
    LayoutHeader,
    LayoutAside,
    LayoutFooter
  },
  data() {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-header {
  line-height: 80px;
  background-color: rgb(210, 227, 243);
  color: #333;
  /* text-align: center; */
}

.el-footer {
  line-height: 300px;
  background-color: rgb(210, 227, 243);
  color: #333;
  text-align: center;
}
  
.el-aside {
  /* background-color: #D3DCE6; */
  color: #333;
  text-align: center;
  /* line-height: 200px; */
}

.el-main {
  /* background-color: #E9EEF3; */
  color: #333;
  text-align: center;
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>
