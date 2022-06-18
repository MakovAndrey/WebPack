const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    entry: "./src/main.js",
    mode: "development",
    output: {
        filename: "main.[contenthash].js",
        path: resolve(__dirname, "build"),
    },
    module: {
        rules: [
            {
                test: /\.(png|jpeg|gif|mp3)$/i,
                loader: "file-loader",
                options: {
                    name: "[path][name].[ext]",
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: resolve(__dirname, "index.html") }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
        new AnalyzerPlugin(),
    ],
    devServer: {
        port: 8080,
        watchFiles: ["./*"],
        open: true,
        hot: true,
    },
};
