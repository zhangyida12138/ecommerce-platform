/**
 * 目标：基于 ECMAScript 标准语法，"默认"导入，工具属性和方法使用
 */
// 默认导入


// comonjs和ESM（ES module）的区别之一是
// commonjs是运行时加载。意味着模块在代码执行时才调用require，然后动态加载模块。所以require可以在if语句中条件导，而ESM不行。在编译阶段无法得知实际加载了那些模块，限制了对模块依赖关系的优化和代码分割。例如摇树优化

// ESM是编译时加载也是运行时，是通过import静态声明模块的，在代码执行前（编译阶段）就解析了模块依赖关系，提前加载所需的模块。所以可以进行代码分割，摇树优化。支持异步加载，适用于浏览器环境。

//为什么说ESM既是运行时也是编译时，代码的执行是发生在运行时，但是依赖关系是在编译阶段。便于优化加载和执行。

import obj from './utils.js'
console.log(obj)
const result = obj.arraySum([10, 20, 30])
console.log(result)

//import是静态的，但是可以使用动态导入语法import实现类似功能
if (condition) {
    import('./moduleA.mjs').then((module) => {
        console.log(module.message);
    });
}
//但是此刻就是只在运行时解析了
// 为什么不用commonjs进行动态导入？
// 因为commonjs时同步加载，会阻塞性能。而且浏览器不支持require的，需要通过打包工具如webpack等。
// 而且ESM是现代模块化的额标准，支持树摇优化和代码分割。