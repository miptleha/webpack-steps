const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== "production";

console.log("devMode: " + devMode);

module.exports = {
    mode: devMode ? 'development' : 'production',
    entry: './src/index.jsx',
    optimization: {
        minimize: false
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        port: 4000,
        historyApiFallback: true
    },
    devtool: devMode ? 'eval-source-map' : 'nosources-source-map',
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env'],
                            ['@babel/preset-react', { "runtime": "automatic" }]
                        ]
                    }
                }
            },
            {
                test: /\.(css)$/i,
                use: [ MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(scss)$/i,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    }
}