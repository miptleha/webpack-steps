import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { Configuration, DefinePlugin, ProgressPlugin } from "webpack";
import type { } from "webpack-dev-server";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

type Mode = "production" | "development";
interface EnvVariables {
    mode: Mode
}

const configFunc = function (env: EnvVariables) {
    const mode = env.mode ?? 'development';
    const isDev = mode === 'development';

    const cssLoader = {
        test: /\.(sa|sc|c)ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: true,
                        namedExport: false,
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                    },
                }
            },
            'sass-loader',
        ]
    }

    const svgLoader = {
        test: /\.svg$/i,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true
                                }
                            }
                        ]
                    }
                }
            }
        ]
    }

    const config: Configuration = {
        mode: mode,
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            clean: true,
            assetModuleFilename: 'assets/[name][ext]',
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
            !isDev && new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css',
                chunkFilename: '[name].[contenthash].css'
            }),
            !isDev && new BundleAnalyzerPlugin(),
            new DefinePlugin({
                __BUILD_DATE__: JSON.stringify(new Date().toISOString().substring(0, 10)),
                __IS_DEV__: JSON.stringify(isDev)
            }),
            new ProgressPlugin(),
            new ReactRefreshWebpackPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(png|jpg|gif|ico|eot|ttf|woff)$/,
                    type: 'asset/resource',
                },
                svgLoader,
                cssLoader
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js'],
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        },
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? {
            port: 8080,
            open: true,
            historyApiFallback: true
        } : undefined,
    }
    return config;
}

export default configFunc;