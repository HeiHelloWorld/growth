<template>
  <!-- <div class="container">
    <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>导航二</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>导航三</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div> -->
  <div class="container1">
    <div class="every-router" v-for="(item, index) in currentChildrenRouter" :key="index">
      <router-link :to="item.path">{{item.meta.title}}</router-link>
    </div>
    <!-- <router-link to="/">Home</router-link>
    <router-link :to="{name: 'Main', params: { username }}">Main</router-link>
    <router-link :to="{name: 'Aa' }">Aa</router-link> -->
  </div>
</template>

<script>

// import { EventBus } from '@/event_bus.js'

export default {
  name: 'Aside',
  data() {
    return {
      username: 'tianfu',
      currentChildrenRouter: []
    }
  },
  computed: {

  },
  mounted() {
    // EventBus.$on('asideRouter', params => {
    //   console.log('children', params)
    //   this.currentChildrenRouter = params.secondRouter
    // })
    this.currentChildrenRouter = JSON.parse(window.sessionStorage.getItem('chlidrenRouterArr'))
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  .el-aside {
    color: #333;
  }
}
.container1 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  a {
    color: #000;
    text-decoration: none;
    &.router-link-exact-active {
      color: #4f97da;
    }
  }
}
</style>