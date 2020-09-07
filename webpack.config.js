const path = require("path");
const { ProgressPlugin } = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: "ts-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  plugins: [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: "AngularJS exercise",
      template: "./src/index.html",
    }),
  ],
};
