/**
 * Created by GaoxinHuang on 2017/3/24.
 */

var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/app.js',
    output: {
        //path: 'dist',filename: 'app.bundle.js'
        filename: './dist/app.bundle.js'
    },
    plugins: [new HtmlWebpackPlugin(
        {
            // title: 'GAOXIN App',
            // minify: {
            //     collapseWhitespace:true  // remove html all white space(去空格和换行)
            // },
            filename:'./dist/index.html',
            hash:true ,//给 压缩文件的js文件加密,让人找不到
            template: 'index.html'
        }
    )]
};