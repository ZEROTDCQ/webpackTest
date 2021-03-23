const { resolve } = require('path');

module.exports = {
    //输入
    entry: './src/index.js',
    //输出
    output: {
        //输出文件名
        filename: 'built.js',
        // __dirname是node.js的变量，代表当前文件的目录绝对值
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    mode: 'development'
}
