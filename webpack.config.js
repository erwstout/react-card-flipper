const path = require('path');

module.exports = {
  entry: './Test.js',
  output: {
    filename: 'test_bundle.js',
    path: path.resolve(__dirname, 'tests')
  },
  devServer: {
    contentBase: './tests'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
