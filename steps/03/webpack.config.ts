import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import type { Configuration } from "webpack";
import type { } from "webpack-dev-server";

type Mode = "production" | "development";
interface EnvVariables {
    mode: Mode
}

const configFunc = function (env: EnvVariables) {
    const mode = env.mode ?? 'development';
    const isDev = mode === 'development';

    const config: Configuration = {
        mode: mode,
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
                }
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? {
            port: 8080,
            open: true
        } : undefined,
    }
    return config;
}

export default configFunc;