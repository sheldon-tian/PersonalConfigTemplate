const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduct = process.env.NODE_ENV === 'production';

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  mode: isProduct ? 'production' : 'development',

  entry: {
    app: './src/main.tsx',
  },

  output: {
    filename: '[name].[contenthash:8].js',
    path: resolve('dist'),
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        },
      },
      {
        test: /.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /.(ts|tsx)$/,
        use: 'ts-loader',
        include: [resolve('src')],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          // MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
        // include: [resolve('src')],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'react app',
      filename: 'index.html',
      template: './public/index.html',
    }),
    // new MiniCssExtractPlugin({
    //   filename: 'css/[name].[hash.css]',
    // }),
  ],

  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
