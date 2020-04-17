import router from './index'

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // console.log('router', router.currentRoute)
  // console.log('beforeEach_to', to)
  // console.log('beforeEach_from', from)
  next()
})

// 全局后置守卫
// router.afterEach((to, from) => {
//   console.log('afterEach_to', to)
//   console.log('afterEach_from', from)
// })
