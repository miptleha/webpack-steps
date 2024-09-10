const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = function(env) {
    return {
        mode: env.mode ?? 'production',
        entry: path.resolve(__dirname, 'src', 'index.js'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') })
        ]
    }
}

module.exports = config;