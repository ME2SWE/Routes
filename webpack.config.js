require("dotenv").config();

const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, './public/src/index.jsx'),
  output:{
    path: path.resolve(__dirname, './public/dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}