/**
 * 目标：项目上线时，可以让前后端在同一个源下访问
 * 需求：让 express 支持静态（网页）资源返回
 * 核心：使用 express 内置函数 express.static() 绑定静态资源文件夹向前端暴露
 */
const fs = require('fs')
const path = require('path')
const express = require('express')
const server = express()

// 暴露指定的文件夹，让前端可以直接拼接路径和资源名字来访问
// 为什么需要这个功能？
// 提高性能：将静态文件托管在服务器上，浏览器可以直接加载这些文件，不需要每次通过服务器处理和渲染，这样能减少服务器负担。

// 方便开发：你不需要为每个静态资源手动写路由。express.static 会自动处理静态文件的请求，非常方便。

// 假设public 文件夹中有一个图片 logo.png，那么如果在浏览器中访问：http://localhost:3000/logo.png

// 结构清晰：将静态文件放在 public 文件夹中符合常见的开发约定，结构清晰，容易理解和维护。

server.use(express.static(path.join(__dirname, 'public')))

server.get('/api/province', (req, res) => {
  fs.readFile(path.join(__dirname, 'data/province.json'), (err, data) => {
    res.send(data.toString())
  })
})

server.all('*', (req, res) => {
  res.status(404)
  res.send('你要访问的资源路径不存在')
})

server.listen(3000, () => {
  console.log('Web 服务已启动')
})