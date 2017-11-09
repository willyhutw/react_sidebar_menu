const path = require('path');

module.exports = {
  entry: {
    index: path.resolve(__dirname, "static/src/index.jsx")
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "static/dist")
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "static/src"),
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.(s[ac]ss|css)$/,
        include: path.resolve(__dirname, "static/src/stylesheets"),
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(__dirname, "static/src/images"),
        use: [
          'file-loader?name=images/[name].[ext]'
        ]
      },
      {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        include: path.resolve(__dirname, "static/src/stylesheets/vendor/font-awesome"),
        loader: 'url-loader?name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        include: path.resolve(__dirname, "static/src/stylesheets/vendor/font-awesome"),
        loader: 'url-loader?name=fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        include: path.resolve(__dirname, "static/src/stylesheets/vendor/font-awesome"),
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        include: path.resolve(__dirname, "static/src/stylesheets/vendor/font-awesome"),
        loader: 'url-loader?name=fonts/[name].[ext]&limit=10000&mimetype=image/svg+xml'
      }
    ]
  }
};
