// Requires
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
  mode: process.env.NODE_ENV,
  entry: ['@babel/polyfill', './src/client/index.js'],
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: 'file-loader?name=[name]-[hash:base64:7].[ext]',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules(?!\/webpack-dev-server)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  node: {
    fs: 'empty',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'styled-components': path.resolve(__dirname, './', 'node_modules', 'styled-components'),
    },
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'hangman-bundle.js',
  },
  devServer: {
    contentBase: './public',
    compress: true,
    historyApiFallback: true,
    port: 3000,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      template: './dist/index.html',
      title: 'Development',
    }),
  ],
});
