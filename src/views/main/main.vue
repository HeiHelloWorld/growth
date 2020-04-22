<template>
  <div class="container">
    <h2>Main</h2>
    <p>计算结果：
      <strong>{{ count }}</strong>
    </p>
    <el-button size="small" @click="addFn">+</el-button>
    <el-button size="small" @click="subtractFn">-</el-button>
    <div style="margin: 30px 0">
      <router-link to="/main/a">go to A</router-link> |
      <router-link to="/main/b">go to B</router-link>
    </div>
    <div class="wrap"><router-view></router-view></div>
    <!-- <el-container style="height: 600px; border: 1px solid #eee">
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{$route.params.username}}</span>
        </el-header>
        
        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140" />
            <el-table-column prop="name" label="姓名" width="120" />
            <el-table-column prop="address" label="地址" />
          </el-table>
        </el-main>
      </el-container>
    </el-container> -->
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
const item = {
  date: '2020-05-20',
  name: 'username',
  address: '上海市徐汇区宜山路700号 普天科创产业园B2座'
};
export default {
  name: 'Main',
  computed: {
    ...mapState({ count: state => state.main.count })
  },
  data() {
    return {
      tableData: Array(20).fill(item)
    }
  },
  methods: {
    ...mapActions(['add', 'subtract']),
    ...mapMutations([ 'set_add_count' ]),
    addFn() {
      this.add()
      // this.set_add_count()
    },
    subtractFn() {
      this.subtract()
    }
  }
}

</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  .wrap {
    height: 510px;
  }
}
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

</style>
