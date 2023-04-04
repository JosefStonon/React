const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    mode: 'production',
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle[hash].js'
    },

    performance:  {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),

        new CleanWebpackPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },

    devServer: {
        port: 3000,
    }
}

