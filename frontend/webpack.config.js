const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/index.js',  // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),  // 输出路径
        filename: 'bundle.js',  // 输出文件名
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',  // 处理 JS 文件
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',  // 处理 JSX 文件
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],  // 处理 CSS 文件
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],  // 处理 SCSS 文件
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/i,
                type:'asset',
                generator:{
                    filename:'assets/[hash][ext][query]'
                }
            },
            {
                test:/\.svg$/,
                use:['@svgr/webpack'],
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],  // 支持解析 .js 和 .jsx 文件
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000,  // 开发服务器端口
        open: true,  // 启动时自动打开浏览器
        hot: true,  // 热更新
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',  // 使用自定义的 HTML 模板
        }),
    ],
    mode: 'development',  // 开发模式
};


module.exports = config;