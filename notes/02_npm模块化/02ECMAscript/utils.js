/**
 * 目标：基于 ECMAScript 标准语法，封装属性和方法并"默认"导出
 */
const baseURL = 'http://hmajax.itheima.net'
const getArraySum = arr => arr.reduce((sum, item) => sum += item, 0)

// 默认导出，可以以任意命名导入
//注意没有等于号
export default {
  url: baseURL,
  arraySum: getArraySum
}