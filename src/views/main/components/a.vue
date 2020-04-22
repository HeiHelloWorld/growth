<template>
  <div class="container">
    a.vue
    <p>计算结果：
      <strong>{{ count }}</strong>
    </p>
    <el-button size="small" @click="addFn">+</el-button>
    <el-button size="small" @click="subtractFn">-</el-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'A',
  computed: {
    ...mapState({
      count: state => state.main.count
    })
  },
  data() {
    return {

    }
  },
  methods: {
    ...mapActions(['add', 'subtract']),
    addFn() {
      this.add()
    },
    subtractFn() {
      this.subtract()
    }
  }
}
</script>

<style scoped>

</style>
