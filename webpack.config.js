const webpack = require("webpack")


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
        path: __dirname,
        filename: "letterloading.js",
        library: "LetterLoading",
        libraryTarget: 'umd',
        libraryExport: "default",
    },
    
}