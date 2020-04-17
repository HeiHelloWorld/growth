/**
 *  包含用于间接更新状态数据的方法的对象、
 *  可以包含异步/逻辑代码
 */ 

export default {
  // eslint-disable-next-line
  yyy ({commit, state}) { // state是总的state
    commit('xxx') // 找到所有匹配的mutation执行
  }
}
