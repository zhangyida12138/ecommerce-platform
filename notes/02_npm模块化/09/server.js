/**
 * 目标：基于 express 本地软件包，开发 Web 服务，返回资源给请求方
 */
// 1. 下载 express 软件包
// 2. 导入并创建 Web 服务对象
const express = require('express')
const server = express()

/**
 * Express提供了一些方法来处理不同类型的HTTP请求：
 * app.geet(path,callback)
 * app.post(path,callback)
 * app.put(path,callback)
 * app.delete(path,callback)
 * app.all(path,callback)
 * 
 */

// 3. 监听请求的方法和请求的资源路径
server.get('/', (req, res) => {
  res.send('你好，欢迎使用 Express')
})


// 第一个回调
app.get('/path', (req, res, next) => {
  console.log('第一个回调');
  res.send('这是第一个回调');
  // 如果没有 res.send，next() 会继续执行下一个回调
  // next();
});

// 第二个回调
app.get('/path', (req, res) => {
  console.log('第二个回调');
  res.send('这是第二个回调');
});
// 请求 /path 时，Express 会先检查所有的路由定义。第一个回调函数会先被匹配。
// 因为第一个回调函数已经发送了响应 (res.send()或者res.json())，因此后续的回调不会被执行。
// 如果没有 res.send()，next() 被调用时会将请求传递给下一个回调函数。
// 如果第二个回调函数存在，它会在 next() 被调用时执行。


// 4. 监听任意请求的方法和请求的资源路径
server.all('*', (req, res) => {
  res.status(404)
  res.send('你要访问的资源路径不存在')
})

// 5. 监听端口号，启动 Web 服务
server.listen(3000, () => {
  console.log('Web 服务已启动')
})