const webpack = require("webpack")
const path = require('path')


module.exports = {
    mode: 'production',
    entry: {
        LetterLoading: './src/main.js',
    },
    devServer: {
        static: { 
            directory: path.resolve(__dirname, "") 
        },
        compress: true,
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
        libraryTarget: 'umd'
    },
    
}