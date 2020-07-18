const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCss = require('mini-css-extract-plugin')

function _resolve(dir){
    return path.join(__dirname,'..',dir)
}
// console.log(_resolve('test'))

module.exports = {
    // 入口文件
    entry: './src/index.js', //单入单出
    // entry:['./src/index.js','./src/main.js'],//多入单出
    //  entry:{
    //     page1:'./src/page1/index.js',
    //     page2:'./src/page2/index.js'
    //  }, //这里注意一下,多入口和多出口必须要配合

    // 输出文件
    output: {
        // 输出路径
        path: _resolve('dist'),
        // 输出文件名
        filename: 'index-[hash].js' //单出口配置
        // filename:'[name].js'//多出口配置
    },
    devServer: {
        contentBase: _resolve('dist'),//服务器访问目录
        host: 'localhost',//服务器ip地址,
        port: 9090,//端口号
        open: false //自动打开页面
    },
    resolve: {
        // 尽可能减少查找后缀的可能性
        extensions: ['js', 'css'],
        modules: [
            _resolve('src'),
            _resolve('node_modules'),
        ],
        alias:{
            '@':_resolve('src')
        }
    },

    module: {
        rules: [ //loader
            {
                test: /\.css$/, //这是一个正则,匹配到要处理的文件
                use: [ //匹配到的文件使用哪个loader,这里使用了两个,注意要把style-loader丢在前面
                    'style-loader',
                    miniCss.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',//这个loader需要搭配autoperfixer一起使用
                        options: {
                            plugins: [
                                require('autoprefixer')
                            ],

                        }
                    },

                ]
            },
            // 处理图片
            {
                test: /\.(png|jpg|jpeg|gif)$/,//匹配需要处理的文件
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name]-[hash].[ext]',//处理文件名 name就是文件名,hase是hase,ext是后缀
                        //context:'',//webpack的上下文
                        //publicPath:'',//文件public发布目录=>也是就是说这个属性设置的是发布后的文件路径比如:www.baidu.com/img/
                        outputPath: 'image',//自定义output输出目录=>打包后的文件目录
                    }
                } // 使用file-loader
            },
            // 处理字体文件
            {
                test: /\.(ttf|woff|woff2|eot|svg)$/,//匹配需要处理的文件
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name]-[hash].[ext]',//处理文件名 name就是文件名,hase是hase,ext是后缀
                        //context:'',//webpack的上下文
                        //publicPath:'',//文件public发布目录=>也是就是说这个属性设置的是发布后的文件路径比如:www.baidu.com/img/
                        outputPath: 'font',//自定义output输出目录=>打包后的文件目录
                    }
                } // 使用file-loader
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'htmlWebpackPlugin',//title
            template: './src/index.html',//模板目录
            filename: 'index.html',//打包后的文件名
            minify: {
                collapseWhitespace: true,//去除空格
                removeComments: true,//去除注释
                removeRedundantAttributes: true, //去除冗余属性
                removeScriptTypeAttributes: false,//去除js类型属性
                removeStyleLinkTypeAttributes: true,//去除css类型属性
            },
            has: true //引入生成资源的时候加入hash避免缓存
        }),
        new miniCss({
            filename: './css/[name]-[hash].css'
        })
    ],
    // resolve:{

    // },


}

