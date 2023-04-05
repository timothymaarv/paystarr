// import webpack from "webpack";
const path = require("path");

// Plugins
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

// Folders
const dirApp = path.resolve(__dirname, "app");
const dirAssets = path.resolve(__dirname, "assets");
const publicPath = path.resolve(__dirname, "public");
const dirStyles = path.resolve(__dirname, "styles");
const dirNode = "node_modules";

module.exports = {
  entry: [path.join(dirApp, "index.js"), path.join(dirStyles, "index.scss")],

  resolve: {
    modules: [dirApp, dirAssets, publicPath, dirStyles, dirNode],
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./assets",
          to: "",
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            ["gifsicle", { interlaced: true }],
            ["jpegtran", { progressive: true }],
            ["optipng", { optimizationLevel: 5 }],
          ],
        },
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(jpe?g|jpg|png|gif|svg|webp)$/,
        loader: "file-loader",
      },
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ["raw-loader", "glslify-loader"],
      },
    ],
  },

  output: {
    path: publicPath,
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin()],
  },
};

// babel-loader allows us to use next level JavaScript in our project.
// copy-webpack-plugin copies over our development files to the public folder for structure
// mini-css-extract-plugin extracts css into seperate files (For CSS in JS)
// postcss-loader is used to automatically resolve cross browser compatibility
// sass-loader is used to compile sass into css
// file-loader allows easy file navigation --> import('image') from 'image-location'
