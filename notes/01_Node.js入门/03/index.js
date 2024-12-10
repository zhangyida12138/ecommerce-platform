/**
 * 目标：在 Node.js 环境的代码中，应使用绝对路径
 * 原因：代码的相对路径是以终端所在文件夹为起点，而不是 Vscode 资源管理器
 * 即是以外层的01_NODE.js入门作为起始地址
 *  容易造成目标文件找不到的错误
 */
const fs = require('fs')
// 1. 引入 path 模块对象
const path = require('path')
// 2. 调用 path.join() 配合 __dirname 组成目标文件的绝对路径
console.log(__dirname)
//不同系统的分隔符不一样，windows是反斜杠\，mac是斜杠/
//所以需要使用path.join(),它会使用特定于平台的分隔符作为定界符，将所有给定的路径片段连接起来
fs.readFile(path.join(__dirname, '../test.txt'), (err, data) => {
  if (err) console.log(err)
  else console.log(data.toString())
})
