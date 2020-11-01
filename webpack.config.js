const webpack = require("webpack")
const path = require('path')


module.exports = {
     mode: 'production',
    entry: {
        LetterLoading: './src/letterloading.js',
    },
    devtool: '#source-map',
    devServer: {
        inline: true,
        port: 3838,
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    output:{
        globalObject: "this",
        path: path.resolve(__dirname, "library"),
        filename: "letterloading.js",
        library: "LetterLoading",
        libraryTarget: 'umd',
        libraryExport: "default",
    },
    
}