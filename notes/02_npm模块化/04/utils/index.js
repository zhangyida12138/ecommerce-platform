/**
 * 本文件是，utils 工具包的唯一出口
 * 作用：把所有工具模块方法集中起来，统一向外暴露
 */
//解构赋值，require返回的是一个对象
//const { getArraySum:getArraySum } = require('./lib/arr.js')可以简写

const { getArraySum } = require('./lib/arr.js')
const { checkUser, checkPwd } = require('./lib/str.js')

// 统一导出所有函数
module.exports = {
  getArraySum,
  checkUser,
  checkPwd
}
