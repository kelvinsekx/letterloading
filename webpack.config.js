const webpack = require("webpack")
const path = require("path")


module.exports = {
    mode: 'development',
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
                exclude: /node-modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: "letterloading.js",
        library: "LetterLoading",
        libraryTarget: 'umd',
    },
    
}