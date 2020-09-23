const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './entry.js',
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'bundle.js',
  },
  stats: 'errors-warnings',
  module: {
    rules: [
      {
        test: /\.purs$/,
        use: [
          {
            loader: 'purs-loader',
            options: {
              warnings: true,
              spago: true,
              watch: true,   
            },
          },
        ],
      },
    ],
  },
};

module.exports = config;
