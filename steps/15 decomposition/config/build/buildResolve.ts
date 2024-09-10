import { Configuration } from "webpack";
import { BuildOptions } from "./types";

export function buildResolve(opt: BuildOptions): Configuration["resolve"] {
    return {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        alias: {
            '@': opt.paths.src
        }
    }
}