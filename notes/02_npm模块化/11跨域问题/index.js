/**
 * 目标：了解浏览器中的同源策略 same-origin policy "SOP"
 * 同源策略：是一种安全策略，限制一个源的文档/脚本与另外一个源的资源交互
 * 好处：保护网站的安全，减少被攻击的媒介
 * 限制：浏览器限制 AJAX 只能访问同源的 URL 网址！
 * 源：指的 URL 中的协议，域名，端口号
 * 同源：网页加载所在的源，与 AJAX 请求的源完全相同即为同源
 * 协议，域名，端口号完全相同。
 */

// CORS 跨域资源共享，主要是通过HTTP请求和响应头进行控制的。
// Access-Control—Allow—Origin，这个头部决定了哪些源跨域访问该资源，*表示所有域名都可以访问，https://www.example.com 表示只允许该域名的请求访问该资源。
// Access-Control-Allow-Methods：GET,POST，PUT，DELETE表示允许客户端使用的HTTP方法。
// Access-Control-Allow-Headers：允许客户端法案送自定义的请求头，常用于设置自定义的Authorizatiion
// Access-Control-Allow-Credentials，Access-Control-Max-Age

// CORS 的工作原理
// 简单请求： 如果浏览器发起的请求符合简单请求的条件（比如使用 GET、POST 等方法，不带自定义头部），那么浏览器会直接发送请求。如果服务器支持跨域，它会在响应中添加 Access-Control-Allow-Origin 头部。


// 预检请求（Preflight Request）： 如果请求包含复杂的操作（如自定义的请求头，或使用 PUT、DELETE 等方法），浏览器会先发送一个 OPTIONS 请求，询问服务器是否允许跨域。服务器返回的响应会包含相应的 CORS 头部。

const express = require('express');
const cors = require('cors');
const app = express();

// 使用 CORS 中间件，允许所有域名跨域请求
app.use(cors());

// 或者，你可以配置特定的域名访问权限
app.use(cors({
  origin: 'https://www.example.com',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.get('/data', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});


// 纯http服务器上设置cors
const http = require('http');

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // 允许所有域名跨域请求
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Hello, world!' }));
}).listen(3000);


