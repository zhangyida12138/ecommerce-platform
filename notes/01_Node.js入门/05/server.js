/**
 * Node.js 的 http 模块支持所有标准的 HTTP 方法，包括但不限于：
    GET：获取资源。
    POST：提交资源（如表单数据）。
    PUT：更新资源。
    DELETE：删除资源。
    PATCH：部分更新资源。
    HEAD：只获取响应头。
    OPTIONS：获取服务器支持的通信选项。

 * 目标：基于 http 模块创建 Web 服务程序
 *  1.1 加载 http 模块，创建 Web 服务对象
 *  1.2 监听 request 请求事件，设置响应头和响应体
 *  1.3 配置端口号并启动 Web 服务
 *  1.4 浏览器请求（http://localhost:3000）测试
 */
// 1.1 加载 http 模块，创建 Web 服务对象
const http = require('http')
// 对于https协议，使用https模块和http模块几乎一致。
const https = require('https')

const server = http.createServer()

// 1.2 监听 request 请求事件，设置响应头和响应体

// 使用server.on监听request事件适合更复杂的需求，可以监听多个事件，绑定多个事件处理逻辑例如close，分离了服务器的创建和事件处理逻辑。
server.on('request', (req, res) => {
  // 设置响应头-内容类型-普通文本以及中文编码格式
  res.setHeader('Content-Type', 'text/plain;charset=utf-8')
  // 设置响应体内容，结束本次请求与响应
  res.end('欢迎使用 Node.js 和 http 模块创建的 Web 服务')
  
})//但是如果有多个request事件，只会监听最后一个。


// 直接在createServer中传入回调函数，
// 只能处理request事件!!!!!!
// 在初始化时直接指定回调。
const server1 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
  // 可以使用res.write进行返回数据，返回数据类型要和header里面一致，以便客户端进行解析。
});

//server.on监听其他事件
// request	收到 HTTP 请求时触发
// connection	每当一个新的 TCP 连接建立时触发
// close	服务器关闭时触发
// error	服务器发生错误时触发
// listening	server.listen 成功后触发，表示服务器开始监听端口

server.on('connection', (socket) => {
  console.log('新的连接已建立');//连接上服务器时出现
  server.getConnections((err, count) => {// 获取当前活动连接数
    console.log('当前活动连接数:', count);
  });
});

// 监听 close 事件
server.on('close', () => {
  console.log('服务器已关闭');//关闭 服务器前出现
});

// 监听 error 事件
server.on('error', (err) => {
  console.error('服务器发生错误:', err.message);
});



server.setTimeout(5000, () => {// 设置超时时间
  console.log('请求超时');
});


// 1.3 配置端口号并启动 Web 服务
server.listen(3000, () => {
  console.log('Web 服务启动成功了')
})


// 手动关闭服务器 5 秒后
setTimeout(() => {
  server.close(); // 触发 close 事件
}, 20000);



// server.on

// const http = require('http');

// // 创建 HTTP 服务器
// const server = http.createServer();

// // 监听 'request' 事件
// server.on('request', (req, res) => {
//   if (req.method === 'GET') {
//     handleGet(req, res);
//   } else if (req.method === 'POST') {
//     handlePost(req, res);
//   } else if (req.method === 'DELETE') {
//     handleDelete(req, res);
//   } else {
//     res.writeHead(405, { 'Content-Type': 'text/plain' }); // Method Not Allowed
//     res.end('Method Not Allowed');
//   }
// });

// // 处理 GET 请求
// function handleGet(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Handled GET request');
// }

// // 处理 POST 请求
// function handlePost(req, res) {
//   let body = '';
//   req.on('data', (chunk) => {
//     body += chunk.toString();
//   });
//   req.on('end', () => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ message: 'Handled POST request', data: body }));
//   });
// }

// // 处理 DELETE 请求
// function handleDelete(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Handled DELETE request');
// }

// // 启动服务器
// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });
