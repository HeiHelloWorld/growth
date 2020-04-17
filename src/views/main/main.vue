<template>
  <div class="container">
    main.vue
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
const item = {
  date: '2020-05-20',
  name: 'username',
  address: '上海市徐汇区宜山路700号 普天科创产业园B2座'
};
export default {
  name: 'Main',
  data() {
    return {
      tableData: Array(20).fill(item)
    }
  }
}

</script>

<style scoped>
.container {
  width: 100%;
  height: 1000px;
}
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

</style>
