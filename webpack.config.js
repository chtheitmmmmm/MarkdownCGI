const path = require('path');
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
    mode: 'production',
    entry: './src/main.ts',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        enforceExtension: false
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader'],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
           extractComments: false, //不将注释提取到单独的文件中
        })],
    },
};
