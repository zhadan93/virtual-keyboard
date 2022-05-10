const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESlintWebpackPlugin = require('eslint-webpack-plugin');

const devServer = (isDev) => (!isDev ? {} : {
  devServer: {
    open: true,
    hot: true,
    port: 8080,
    static: './public',
  },
});

module.exports = ({ develop }) => ({
  mode: develop ? 'development' : 'production',

  entry: './src/assets/js/index.js',

  devtool: develop ? 'inline-source-map' : false,

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Virtual Keyboard',
      template: './src/index.html',
    }),

    new ESlintWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public',
        },
      ],
    }),
  ],

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext]',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ico|png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  ...devServer(develop),
});
