import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

type Mode = "production" | "development";
interface EnvVariables {
    mode: Mode
}

const configFunc = function (env: EnvVariables) {
    const config: webpack.Configuration = {
        mode: env.mode ?? 'production',
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') })
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
    }
    return config;
}

export default configFunc;