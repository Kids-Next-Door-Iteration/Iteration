const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT;
const mode = process.env.NODE_ENV;

module.exports = {
  mode,
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', 
          options: {
            presets: ['@babel/env', '@babel/react'],
          },
        },
      },
      {
        test: /.(css|scss)$/, 
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            }
          },
        ],
        type: 'javascript/auto'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development Go Pool',
      template: './client/index.html',
    }),
  ],

  devServer: {
    static: {
      publicPath: '/',
      directory: path.join(__dirname, 'build'),
    },
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': 'http://localhost:3000',
      '/db/thread': 'http://localhost:3000',
      '/db/message': 'http://localhost:3000',
      '/threadreply': 'http://localhost:3000',
      '/keys': 'http://localhost:3000',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
