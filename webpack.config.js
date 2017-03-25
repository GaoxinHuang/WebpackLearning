/**
 * Created by GaoxinHuang on 2017/3/24.
 */

var HtmlWebpackPlugin = require('html-webpack-plugin');// 申明HtmlWebpackPlugin属性
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 申明ExtractTextPlugin属性
module.exports = {
    entry: './src/app.js',
    output: {
        //path: 'dist',filename: 'app.bundle.js'
        filename: './dist/app.bundle.js'
    },
    module:{
        rules:[
            // {test: /\.css$/, use: ['style-loader','css-loader','sass-loader']}
            {test: /\.scss$/, use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use:['css-loader','sass-loader'],
                publicPath: "./dist"  //2.3.0的版本无法用上,所以只能定义在filename里
            })}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: 'GAOXIN App',
                // minify: {
                //     collapseWhitespace:true  // remove html all white space(去空格和换行)
                // },
                filename:'./dist/index.html',
                hash:true ,//给 压缩文件的js文件加密,让人找不到
                template: 'index.html'  //index.html读取的模板文件,文件名随意,建议设计成在src外的index.html
            }),
        new ExtractTextPlugin({  //webpack 2 新版本的修改,只能在webpack2 里migrating下看
            filename: './dist/app.css',
            disable: false,
            allChunks: true
        })
    ]
};