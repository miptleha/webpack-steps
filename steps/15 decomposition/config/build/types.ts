export interface BuildPaths {
    src: string;
    html: string;
    favicon: string;
    entry: string;
    output: string;
}

export type Mode = "production" | "development";

export interface BuildOptions {
    mode: Mode;
    paths: BuildPaths;
    port: number;
    isDev: boolean;
}
