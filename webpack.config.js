const path = require('path');

module.exports = {
  entry: './ReactCardFlipper.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'tests')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
