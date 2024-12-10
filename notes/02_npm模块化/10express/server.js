/**
 * 目标：基于 express 软件包，开发提供省份列表的数据接口
 * 要求：get 请求方法，/api/province 的请求路径
 */
const fs = require('fs')
const path = require('path')
const express = require('express')
const server = express()

// 监听 get 请求方法，监听资源路径 /api/province，就读取 province.json 省份数据返回
server.get('/api/province', (req, res) => {
  fs.readFile(path.join(__dirname, 'data/province.json'), (err, data) => {

  //   res.end()
  // Express 的底层 res.end() 方法用于直接结束响应，不发送任何数据。
  //   不常直接使用，因为 send 和 json 已经封装了该功能。
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
// 1. res.send()
// 用于发送响应数据，可以是字符串、对象、Buffer 等。
// 自动设置 Content-Type，例如字符串为 text/html，对象为 application/json。

// res.send('Hello, World!');

// 2. res.json()
// 用于发送 JSON 响应，自动将对象转换为 JSON 字符串，并设置 Content-Type 为 application/json。

// res.json({ message: 'Hello, JSON!' });

// 3. res.status()
// 用于设置 HTTP 状态码，通常与 send 或 json 方法链式调用。

// res.status(404).send('Not Found');

// 4. res.redirect()
// 用于重定向到另一个 URL，默认状态码为 302。

// res.redirect('/new-url');

// 5. res.sendFile()
// 用于发送文件，通常用于提供静态资源。

// res.sendFile(path.join(__dirname, 'index.html'));

// 6. res.set()
// 设置 HTTP 响应头，用于指定内容类型、缓存控制等。

// res.set('Content-Type', 'text/plain');

// 7. res.end()
// Express 的底层 res.end() 方法用于直接结束响应，不发送任何数据。
// 不常直接使用，因为 send 和 json 已经封装了该功能。

// res.status(200);
// res.end(); // 结束响应

// 8. res.render()
// 用于渲染模板文件，并将 HTML 内容返回给客户端，通常与模板引擎（如 EJS、Pug）一起使用。

// res.render('index', { title: 'Home Page' });