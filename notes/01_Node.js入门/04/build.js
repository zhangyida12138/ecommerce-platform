/**
 * 目标1：压缩 html 代码
 * 需求：把回车符 \r，换行符 \n 去掉，写入到新 html 文件中
 *  1.1 读取源 html 文件内容
 *  1.2 正则替换字符串
 *  1.3 写入到新的 html 文件中
 */
// 1.1 读取源 html 文件内容
const fs = require('fs')
const path = require('path')
fs.readFile(path.resolve('./04/public/index.html'), (err, data) => {//建议还是使用join更加简单，不容易出错
  if (err) console.log(err)
  else {
    const htmlStr = data.toString()
    // 1.2 正则替换字符串
    const resultStr = htmlStr.replace(/[\r\n]/g, '')
    console.log(resultStr)
    // 1.3 写入到新的 html 文件中
    fs.writeFile(path.join(__dirname, 'dist/index.html'), resultStr, err => {
      if (err) console.log(err)
      else console.log('写入成功')
    })
  }
})

//resolve中的文件名得是运行时命令行的路径+到文件的相对路径

//__dirname直接是以当前文件的路径为初始位置