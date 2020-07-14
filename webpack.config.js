const path = require('path')
module.exports={
    // 入口文件
    // entry:'./src/index.js', //单入单出
    // entry:['./src/index.js','./src/main.js'],//多入单出
     entry:{
        page1:'./src/page1/index.js',
        page2:'./src/page2/index.js'
     }, //这里注意一下,多入口和多出口必须要配合

    // 输出文件
    output:{
        // 输出路径
        path:path.resolve(__dirname,'dist'),
        // 输出文件名
        //filename:'index.js' //单出口配置
        filename:'[name].js'//多出口配置
    }
}
