const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  devServer: {
      contentBase: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
        test: /\.scss$/,
        use: [
            {
            loader: "style-loader" // creates style nodes from JS strings
            },
            {
            loader: "css-loader" // translates CSS into CommonJS
            },
            {
            loader: "sass-loader" // compiles Sass to CSS
            }
        ]
        }
    ],
  },
};