const path = require('path')
module.exports={
    // 入口文件
    entry:'./src/index.js',
    // 输出文件
    output:{
        // 输出路径
        path:path.resolve(__dirname,'dist'),
        // 输出文件名
        filename:'index.js'
    }
}
