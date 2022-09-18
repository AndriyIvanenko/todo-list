const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],

  output: {
    path: path.resolve(__dirname, "build"),
    clean: true,
    filename: "[name].[contenthash].js",
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(ttf|eot|woff2?)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },

  // optimization: {
  //   minimizer: [new CssMinimizerPlugin()],
  // },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
  ],

  devServer: {
    port: 3333,
  },
};
