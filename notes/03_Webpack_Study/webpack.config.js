const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const webpack = require('webpack');
const { queryObjects } = require('v8');

const config = {
  // 打包模式（development 开发模式-使用相关内置优化）
  // mode: 'development',
  //设置环境或者是production
  // 入口
  // entry: path.resolve(__dirname, 'src/login/index.js'),
  entry: {
    'login': path.resolve(__dirname, 'src/login/index.js'),
    'content': path.resolve(__dirname, 'src/content/index.js'),
    'publish': path.resolve(__dirname, 'src/publish/index.js')
  },
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './[name]/index.js',//webpack会用对应的模块名替换
    clean: true // 生成打包后内容之前，清空输出目录
  },
  // 插件（给 Webpack 提供更多功能）

  //插件是一个对象数组，在对象中可以自定义
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/login.html'), // 模板文件
      filename: path.resolve(__dirname, 'dist/login/index.html'), // 输出文件
      useCdn: process.env.NODE_ENV === 'production', // 生产模式下使用 cdn 引入的地址
      chunks: ['login'] // 引入哪些打包后的模块（和 entry 的 key 一致）
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/content.html'), // 模板文件
      filename: path.resolve(__dirname, 'dist/content/index.html'), // 输出文件
      useCdn: process.env.NODE_ENV === 'production', // 生产模式下使用 cdn 引入的地址
      chunks: ['content']// 引入哪些打包后的模块（和 entry 的 key 一致）
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/publish.html'), // 模板文件
      filename: path.resolve(__dirname, 'dist/publish/index.html'), // 输出文件
      useCdn: process.env.NODE_ENV === 'production', // 生产模式下使用 cdn 引入的地址
      chunks: ['publish']// 引入哪些打包后的模块（和 entry 的 key 一致）
    }),
    //提取css代码，让css和js可以同时异步加载
    //建议与css-loader一起使用
    new MiniCssExtractPlugin({
      filename: './[name]/index.css'
    }), // 生成 css 文件
    new webpack.DefinePlugin({
      //key是注入到打包后的前端JS代码中作为全局变量
      //value是变量对应的值(在cross-env注入在node.js中的环境变量字符串)
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  // 加载器（让 webpack 识别更多模块文件内容）
  //加载器css-loader：解析css代码
  //加载器style-loader把解析后的css代码插入到DOM中
  module: {
    rules: [
      {
        //匹配css结尾的文件，忽略大小写
        test: /\.css$/i,

        // style-loader 的作用是将 CSS 代码以 <style> 标签的形式注入到 HTML 文件的 <head> 部分，使样式在浏览器中生效。通常情况下，style-loader 和 css-loader

        // use: ['style-loader', "css-loader"],

        // MiniCssExtractPlugin.loader 是 MiniCssExtractPlugin 插件中的一个 loader，用于将 CSS 从 JavaScript 文件中提取出来，生成一个独立的 .css 文件。这种方式比 style-loader 更适合生产环境，因为独立的 CSS 文件更容易被缓存，也更便于优化。
        use: [process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, "css-loader"]
      },
      //css-loader和MiniCssExtractPlugin.loader实际上是互补的，css-loader会解析css文件中的内容，并转化为JavaScript可以识别的模块，供webpack加载和处理。它只会解析，不负责将解析后的样式应用

      //MiniCssExtractPlugin.loader负责提取CSS到独立的.css文件，在生产环境中更常见，因为独立的css文件可以被浏览器缓存，加速加载，便于优化

      //加载器是从后向前使用，例如下面less文件，是先使用less-loader将代码转变成css代码，再使用css-loader来解析 CSS 文件中的依赖关系（@import、url() 等，再将css代码转化为js模块，再使用MiniCssExtractPlugin.loader将js中的css提取出来
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',//less-loader需要配合less软件包使用
        ],
      },
      //资源模块
      //       Loader 与 type 的区别
      // loader：是一种将文件转换为 JavaScript 可识别模块的工具，适合对源文件进行深度解析和转换（如 CSS、SASS、Babel）。

      // type：则是指定 Webpack 内置的文件处理方式，适合处理静态资源（如图片、字体）并生成不同格式。
      // 在 Webpack 5 中，type 和 generator 更适合用于处理简单的静态资源，而 loader 更适合复杂的转换任务。例如，当需要对 .png 或 .svg 图片进行简单的打包操作时，可以直接使用 type。当需要对 CSS 或 JS 文件进行复杂的编译和转换时，使用 loader 更为合适。

      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        //         asset/resource：将文件打包到输出目录，类似于 file-loader。
        // asset/inline：将文件转换为 Base64 编码内联到 JavaScript 中（uri），类似于 url-loader。src:"data:img/png;base64,这里是图片的base64string"
        // asset：自动选择 asset/resource 或 asset/inline，基于文件大小决定是否内联。大于8kb就是resource，否则就是inline
        // asset/source：将文件内容以字符串形式暴露给 JavaScript 代码，适用于需要直接获取文件内容的场景，例如text
        type: 'asset',
        //自定义输出文件名
        generator: {
          filename: 'assets/[hash][ext][query]'
          //hash对模块内容做算法计算，得到映射的数字字母组合的字符串（避免同名不同内容或者不同名但是相同内容）
          //ext使用当前模块原本的占位符，例如.png/.jpg
          // query保留引入文件时代码中查询参数（只有url下生效）
        }
      }
    ],
  },
  // 告诉webpack打包要自己优化
  optimization: {
    // 最小化
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer
      // （即 `terser-webpack-plugin`），将下一行取消注释（保证 js 代码还能压缩）
      `...`,//保留原本压缩方式，扩展下面的压缩方式
      new CssMinimizerPlugin(),
    ],
    //代码分割
    splitChunks: {
      chunks: 'all', // 所有模块动态非动态移入的都分割分析
      cacheGroups: { // 分隔组
        commons: { // 抽取公共模块
          minSize: 0, // 抽取的chunk最小大小字节
          minChunks: 2, // 最小引用数
          reuseExistingChunk: true, // 当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用
          name(module, chunks, cacheGroupKey) { // 分离出模块文件名
            const allChunksNames = chunks.map((item) => item.name).join('~') // 模块名1~模块名2
            //代表着模块1模块2公用的代码
            return `./js/${allChunksNames}` // 输出到 dist 目录下位置
          }
        }
      }
    }
  },
  // 解析
  resolve: {
    // 别名
    alias: {
      '@': path.resolve(__dirname, 'src')//到src的路径
    }
  }
}
// 开发环境下使用 sourcemap 选项,因为代码被压缩和混淆,无法定位源代码行数和列数,使用需要使用sourcemap
//它会把源码的位置信息一起打包在js文件内,只适用于开发环境,不要再生产环境中使用,以防被查看源码位置
if (process.env.NODE_ENV === 'development') {
  config.devtool = 'inline-source-map'
}
// 生产环境下使用相关配置
if (process.env.NODE_ENV === 'production') {
  // 外部扩展（让 webpack 防止 import 的包被打包进来）
  config.externals = {
    // key：import from 语句后面的字符串
    // value：留在原地的全局变量（最好和 cdn 在全局暴露的变量一致）

    // axios: 'axios' 表示在代码中 import axios from 'axios' 时，Webpack 不会打包 axios 模块，而是期望在运行时（浏览器环境中）直接从全局变量 axios 中获取这个库。这意味着在使用时，你必须通过 CDN 或其他方式加载 axios，让它在 window.axios 中可用。
    'bootstrap/dist/css/bootstrap.min.css': 'bootstrap',
    'axios': 'axios',
    'form-serialize': 'serialize',
    '@wangeditor/editor': 'wangEditor'
  }
}

module.exports = config
