const path = require('path');
const webpack = require('webpack');

module.exports = env => {
  return {
    entry: env.production ? ['./ReactCardFlipper.js'] : ['babel-polyfill', './Test.js'],
    output: {
      filename: env.production ? 'ReactCardFlipper.js' : 'test_bundle.js',
      path: env.production ? path.resolve(__dirname, 'dist') : path.resolve(__dirname, 'tests'),
      library: 'ReactCardFlipper',
      libraryTarget: 'umd'
    },
    devServer: {
      contentBase: './tests'
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        }
      ]
    },
    plugins: [
      env.production ? new webpack.optimize.UglifyJsPlugin() : ''
    ]
  }
};
