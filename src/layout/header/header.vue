<template>
  <div class="container">
      <!-- <router-link to="/">Home</router-link>&nbsp;&nbsp;&nbsp; -->
      <!-- <router-link to="/main/tianfu">Main</router-link>&nbsp;&nbsp;&nbsp; -->
      <!-- <router-link :to="{name: 'Main', params: { username }}">Main</router-link>&nbsp;&nbsp;&nbsp;
      <router-link :to="{name: 'Aa' }">Aa</router-link> -->
    <div class="nav" v-for="(item, index) in asyncRouter" :key="index" @click="changeHeader(index)">
      <router-link :to="item.path">{{item.meta.title}}</router-link>
    </div>
    <div class="avat">
      <el-avatar :size="50" :src="circleUrl"></el-avatar>
    </div>
  </div>
</template>

<script>

// import { EventBus } from '@/event_bus.js'

export default {
  name: 'Header',
  data() {
    return{
      username: 'tianfu',
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      asyncRouter: []
    }
  },
  computed: {},
  created() {},
  mounted() {
    this.asyncRouter = this.$router.options.routes.slice(0, -1)
  },
  methods: {
    changeHeader(e) {
      console.log(e)
      const current_router = this.$router.options.routes[e]
      if(current_router.children) {
        console.log('子路由', current_router.children)
        // EventBus.$emit('asideRouter', {
        //   secondRouter: current_router.children
        // })
        this.$store.commit('CHANGE_ASIDE', {
          chlidrenRouterArr: current_router.children
        })
      } else {
        // EventBus.$emit('asideRouter', {
        //   secondRouter: []
        // })
        this.$store.commit('CHANGE_ASIDE', {
          chlidrenRouterArr: []
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  .nav {
    // margin-right: 30px;
    a {
      text-decoration: none;
      font-weight: bold;
      color: #2c3e50;
      margin-right: 20px;
      &.router-link-exact-active {
        border-bottom: 2px solid #42b983;
      }
    }
  }
  .avat {
    text-align: center;
    line-height: 115px;
  }
}

</style>
