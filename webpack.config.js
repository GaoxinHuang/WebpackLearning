/**
 * Created by GaoxinHuang on 2017/3/24.
 */

var HtmlWebpackPlugin = require('html-webpack-plugin');// 申明HtmlWebpackPlugin属性
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 申明ExtractTextPlugin属性
var path = require("path"); //申明 server 相对的路径
module.exports = {
    entry: './src/app.js',
    output: {
        // path:'dist',
        // filename: './dist/app.bundle.js'

        path: path.resolve(__dirname, "dist"), //配置 server 运行的的文件夹,不然可能出bug
        //注:2.3.0的版本无法用上,所以只能定义在filename里,在定义完path: path.resolve(__dirname, "dist"),可以用来
        filename: 'app.bundle.js'
    },
    module:{
        rules:[
            // {test: /\.css$/, use: ['style-loader','css-loader','sass-loader']}
            {test: /\.scss$/, use: ExtractTextPlugin.extract({//如果是css文件, 则 {test: /\.css$/,
                fallback: "style-loader",
                use:['css-loader','sass-loader'],
                publicPath: "./dist"
                //注:2.3.0的版本无法用上,所以只能定义在filename里,在定义完path: path.resolve(__dirname, "dist"),可以用来
            })},
            {
                test: /\.js$/,
                exclude: /node_modules/, //把node_modules 排除在外,这样就提高效率，提高运行速度
                use:'babel-loader',
            }
        ]
    },
    devServer:{
        contentBase: path.join(__dirname, "dist"),//运行的目录资源位置
        compress: true,//支持gzip压缩
        port: 9000, //在哪个port运行,默认8080
        open:true, //每次运行时,就会打开一个新的窗口在你当前的browser中
        stats:"errors-only" //在cmd中只显示error,不会显示其他的文件之类的内容(帮助cmd)

    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: 'GAOXIN App',
                // minify: {
                //     collapseWhitespace:true  // remove html all white space(去空格和换行)
                // },
                // filename:'./dist/index.html',
                filename:'index.html',
                hash:true ,//给 压缩文件的js文件加密,让人找不到
                template: 'index.html'  //index.html读取的模板文件,文件名随意,建议设计成在src外的index.html
            }),
        new ExtractTextPlugin({  //webpack 2 新版本的修改,只能在webpack2 里migrating下看
            // filename: './dist/app.css',
            filename: 'app.css',
            disable: false,
            allChunks: true
        })
    ]
};