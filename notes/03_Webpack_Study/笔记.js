// webpack笔记及代码

// HtmlWebpackPlugin简化了html文件的创建

//搭建开发环境
//dist 目录和打包内容时内存中(更新快)

// 模式名称:
// 开发模式:development,可以调试代码,实时加载,模块热替换,适合本地开发
// 生产模式:production,可以压缩代码,资源优化,更轻量,适合打包上线

// 设置方式1:在webpack.config.js配置文件设置mode选项
// 设置方式2:在package.json命令行设置mode参数
// 注意:命令行设置优先级高于配置文件中,推荐使用命令行设置

//优化分割公共代码
//配置splitChunks分割功能