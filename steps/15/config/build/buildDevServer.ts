import { Configuration } from "webpack-dev-server";
import { BuildOptions } from "./types";

export function buildDevServer(opt: BuildOptions): Configuration {
    return {
        port: opt.port,
        open: true,
        historyApiFallback: true
    }
}