/**
 * 异步的经典场景：
 * I/O操作，（文件，网络请求）
 * 计时器setTimeout，setInterval
 * 异步API Promise，async/await
 * 
 * 有回调函数不代表着一定是异步，例如forEach，map等
 * 
 * 同步的经典场景：
 * 内存中的快速操作，例如数学运算，字符串处理
 * 同步API，例如fs.readFileSync
 */

/**
 * 目标：基于 fs 模块读写文件内容
 *  1. 加载 fs 模块对象
 *  2. 写入文件内容
 *  3. 读取文件内容
 */
// 1. 加载 fs 模块对象
const fs = require('fs')
// 2. 写入文件内容
fs.writeFile('./test.txt', 'hello, Node.js', (err) => {
  if (err) console.log(err)
  else console.log('写入成功')
})
// 3. 读取文件内容
fs.readFile('./test.txt', (err, data) => {
  if (err) console.log(err)
  // data 是 buffer 16 进制数据流对象
  // .toString() 转换成字符串
  else console.log(data.toString())
})

// buffer和blob是node.js和浏览器中分别用于处理二进制数据的核心对象。

// Buffer主要用于Node.js中的二进制数据处理，如文件读写，网络通信。类似二进制数组
// 使用场景：操作文件流，处理加密数据，解析网络协议。
const buf = Buffer.from([1, 2, 3]);
console.log(typeof buf);//object
// console.log(buf instanceof Array);//false
// console.log(buf instanceof Function);//false
// console.log(buf instanceof Object);//true
console.log(buf.toJSON());
console.log(buf.keys());
console.log(buf.values().next());
//每次调用buf.values()都会创建一个新的迭代器对象，所以如果想迭代的话需要保持迭代器对象


// 创建指定大小的 Buffer
const buf2 = Buffer.alloc(10); // 分配一个长度为10的缓冲区
buf2.write('12345'); // 写入数据
buf2[5] = 0x61;
console.log(buf2.toString()); // 12345

// 操作二进制数据
buf2[0] = 0x61; // 修改第一个字节
console.log(buf2.toString()); // a2345


// Blob主要是浏览器中用于处理二进制数据的对象，常用于文件上传，下载，图像处理。全称binary large object
// 使用场景：文件展示，数据存储或前端传输
// 一旦创建，Blob的数据是无法修改的，支持大文件的分段存储，不需要一次性加载到内存中。可以表示文件数据，并于浏览器的文件api无缝结合。

//创建blob
console.log('blob');

const blob = new Blob(['Hello world!'], { type: 'text/plain' });
console.log(blob);

const sliceBlob = blob.slice(0, 5);
console.log(sliceBlob);//分割前五个字符，但是没有类型type

const mergeBlob = new Blob([blob, sliceBlob], { type: "text/plain" });//合并blob
console.log(mergeBlob);


const binaryData = new Uint8Array([72, 101, 108, 108, 111]);// 创建包含二进制数据的Blob
// console.log(binaryData.valueOf());
const blob2 = new Blob([binaryData], { type: 'application/octet-stream' });//表示任意一种二进制数据，适用于未知类型的文件。
console.log(blob2);

const url = URL.createObjectURL(blob);//创建URL
console.log(url);

//浏览器环境下获取文件的三个方法：
//1. 通过<input type='file'>接口读取文件。当用户选择文件后，浏览器会返回File对象，这个对象继承自Blob
// const input=document.querySelector('input[type="file"]');
// input.addEventListener('change',(event)=>{
//   const file = event.target.files[0];
//   console.log(file.name);
//   console.log(file.size);
// })


// 2. 可以用这个URL在网页中直接访问或者下载文件,但是要在浏览器环境下才能下载。
// const link = document.createElement('a');
// link.href = url;
// link.download = 'example.txt';
// link.click();


// 3. 读取blob，可以通过fileReader对象读取。浏览器环境下能使用
// const reader = new FileReader();
// reader.onload = function (event) {
//   console.log(event);
//   console.log(event.target);
//   console.log(event.target.result);
// }
// reader.readAsText(blob);//以文本格式读取，实际上在这一步才正式读取blob
