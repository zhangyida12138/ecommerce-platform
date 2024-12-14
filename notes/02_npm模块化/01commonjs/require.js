//commonjs 里面的require本质上是一个函数。

// comonjs和ESM（ES module）的区别之一是
// commonjs是运行时加载。意味着模块在代码执行时才调用require，然后动态加载模块。所以require可以在if语句中条件导，而ESM不行。在编译阶段无法得知实际加载了那些模块，限制了对模块依赖关系的优化和代码分割。例如摇树优化

// ESM是编译时加载也是运行时，是通过import静态声明模块的，在代码执行前（编译阶段）就解析了模块依赖关系，提前加载所需的模块。所以可以进行代码分割，摇树优化。支持异步加载，适用于浏览器环境。

//为什么说ESM既是运行时也是编译时，代码的执行是发生在运行时，但是依赖关系是在编译阶段。便于优化加载和执行。
function require(modulePath) {
    //根据传递的模块路径，得到模块完整的绝对路径。
    var moduleId = getModuleId(modulePath);
    //判断缓存
    if (cache[moduleId]) {
        return cache[moduleId];
    }
    //真正运行模块代码的辅助函数
    //其中传入的 require 参数是为了在目标模块中继续支持 require 方法。
    //单独传递exports的原因是为了方便开发者向导出对象添加属性。
    function _require(exports, require, module, __filename, __dirname) {
        //目标模块的代码在这里运行，下面是例子
        const baseURL = 'http://hmajax.itheima.net'
        const getArraySum = arr => arr.reduce((sum, item) => sum += item, 0)

        // 导出,注意是exports不是export
        module.exports = {
            url: baseURL,
            arraySum: getArraySum
        }
    }
    var module = {
        exports: {},
    }
    var exports = module.exports;
    //得到模块文件的绝对路径
    var __filename = moduleId;
    var __dirname = getDirname(__filename);
    _require.call(exports, exports, require, module, __filename, __dirname);
    //缓存module.exports
    cache[moduleId] = module.exports;
    //返回module.exports
    return module.exports;

    //补充知识，返回的不是this，也不是exports.
    //如果被重新赋值，返回的一定是module.exports
}