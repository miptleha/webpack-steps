import { Configuration } from "webpack";
import { buildPluggins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";
import { buildResolve } from "./buildResolve";
import { buildLoaders } from "./buildLoaders";
import { BuildOptions } from "./types";

export function buildWebpack(opt: BuildOptions) {
    const config: Configuration = {
        mode: opt.mode,
        entry: opt.paths.entry,
        output: {
            path: opt.paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
            assetModuleFilename: 'assets/[name][ext]',
        },
        plugins: buildPluggins(opt),
        module: {
            rules: buildLoaders(opt),
        },
        resolve: buildResolve(opt),
        devtool: opt.isDev ? 'eval-source-map' : 'source-map',
        devServer: opt.isDev ? buildDevServer(opt) : undefined,
    }
    return config;
}