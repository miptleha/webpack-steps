import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { DefinePlugin, ProgressPlugin, type Configuration } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BuildOptions } from "./types";

export function buildPluggins(opt: BuildOptions): Configuration["plugins"] {
    const plugins = [];
    plugins.push(new HtmlWebpackPlugin({ template: opt.paths.html, favicon: opt.paths.favicon }));
    if (!opt.isDev) {
        plugins.push(new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[name].[contenthash].css'
        }));
        
        plugins.push(new BundleAnalyzerPlugin());
    }

    plugins.push(new DefinePlugin({
        __BUILD_DATE__: JSON.stringify(new Date().toISOString().substring(0, 10)),
        __IS_DEV__: JSON.stringify(opt.isDev)
    }));
    
    plugins.push(new ProgressPlugin());
    
    if (opt.isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    /*new CopyPlugin({
        patterns: [
            { from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, 'dist') }
        ]
    }),*/
    /*new ForkTsCheckerWebpackPlugin(),*/

    return plugins;
}