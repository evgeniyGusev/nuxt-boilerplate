const resolve = require('path').resolve; // eslint-disable-line
module.exports = {
  resolve: {
    modules: [resolve(__dirname, 'lib'), 'node_modules'],
    extensions: ['.js', '.vue'],
    alias: {
      '~': __dirname,
      '@': __dirname,
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      },
    ],
  },
};
