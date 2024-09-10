import path from "path";
import { buildWebpack } from "./config/build/buildWebpack";
import { BuildOptions, BuildPaths } from "./config/build/types";

type Mode = "production" | "development";
interface EnvVariables {
    mode: Mode
}

const configFunc = function (env: EnvVariables) {
    const mode = env.mode ?? 'development';
    const isDev = mode === 'development';

    const paths: BuildPaths = {
        src: path.resolve(__dirname, 'src'),
        html: path.resolve(__dirname, 'src', 'index.html'),
        favicon: path.resolve(__dirname, 'src', 'favicon.ico'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'dist')
    }

    const opt: BuildOptions = {
        mode,
        isDev,
        paths,
        port: 8080
    }
    const config = buildWebpack(opt);

    return config;
}

export default configFunc;