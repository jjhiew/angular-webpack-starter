var webpack = require('webpack');
var path = require('path');

var APP_PATH = path.join(__dirname, '/app');

var config = {
  context: APP_PATH,
  entry: './index.js',
  output: {
    path: APP_PATH,
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === 'test'
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'ng-annotate!babel',
        exclude: [/node_modules/]
      },
      {test: /\.html$/, loader: 'html', exclude: [/node_modules/]},
      {test: /\.css$/, loader: 'style!css', exclude: [/node_modules/]},
      {test: /\.scss$/, loader: 'style!css!sass', exclude: [/node_modules/]}
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  config.output.path = path.join(__dirname, '/dist');
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
  config.devtool = 'source-map';
}

module.exports = config;
