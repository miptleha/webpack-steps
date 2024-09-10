import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types";

export function buildLoaders(opt: BuildOptions): ModuleOptions["rules"] {
    const cssLoader = {
        test: /\.(sa|sc|c)ss$/i,
        use: [
            opt.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: true,
                        namedExport: false,
                        localIdentName: opt.isDev ? '[path][name]__[local]' : '[hash:base64:8]'
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

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const assetsLoader = {
        test: /\.(png|jpg|gif|ico|eot|ttf|woff)$/,
        type: 'asset/resource',
    }
    
    return [
        tsLoader,
        assetsLoader,
        svgLoader,
        cssLoader
    ]
}