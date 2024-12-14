/**
 * 目标：基于 CommonJS 标准语法，封装属性和方法并导出
 */
const baseURL = 'http://hmajax.itheima.net'
const getArraySum = arr => arr.reduce((sum, item) => sum += item, 0)

console.log(arguments);//只有函数里面才有arguments
//打印内容刚好是require里面的辅助函数的参数。

console.log(exports===module.exports);//true
console.log(this===exports);//true


// 导出,注意是exports不是export
module.exports = {
  url: baseURL,
  arraySum: getArraySum
}
//补充知识，require函数，返回的不是this，也不是exports.
//如果被重新赋值，返回的一定是module.exports

//可以通过exports.b=2来添加属性。
//不能exports={b:2}，这样会exports就不指向module.exports了