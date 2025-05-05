// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js", 
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },

    plugins: [
        new HtmlWebpackPlugin({
        template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,                      //img we reference in html template
                loader: "html-loader",
              },
              {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,     //img use in js, will need to import files (in DOM ie)
                type: "asset/resource",
              },
        ],
        },
};
