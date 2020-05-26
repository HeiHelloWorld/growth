// 获取markdown文件
const path = require('path')
const fs = require('fs')
const md = require('markdown-it')()

let tplPath = path.join(__dirname, '/src/views/es5/js/aa.vue')  // 模板页面
let mdPath = path.join(__dirname, '../../../md/1.vue-router.md')  // md文件
let targetPath = path.join(__dirname, '/src/views/home/home.vue') // 展示页面

// 获取md文件
fs.readFile(mdPath, 'utf8', (err, data) => {
  if(err) {
    console.log('读取失败', err)
    return
  }
  console.log('dta', data)
  // 对md文件内容转换
  let result = md.render(data)
  // 读取模板内容, 异步读取文件全部内容
  fs.readFile(tplPath, 'utf8', (err, tplData) => {
    if (err) return
    tplData = tplData.replace('.md-content', result)
    // 生成的最终页面写入目标文件
    fs.writeFile(targetPath, tplData, (err) => {
      console.log('err', err)
      console.log('转换完成！')
    })
  })
})
