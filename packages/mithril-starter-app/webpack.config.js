const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './bin'
    },
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'bin')
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Development',
          template: 'index.html'
        })
      ],
  };