const path = require('path')
module.exports={
    // 入口文件
    // entry:'./src/index.js', //单入单出
    // entry:['./src/index.js','./src/main.js'],//多入单出
     entry:{
        
     },

    // 输出文件
    output:{
        // 输出路径
        path:path.resolve(__dirname,'dist'),
        // 输出文件名
        filename:'index.js'
    }
}
