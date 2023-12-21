const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'scripts', 'main.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      filename: 'main.js'
  },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 3000,
        open: true
    },
    module: {
        rules: [
          {
            test: /\.pug$/,
            use: [
              'pug-loader'
            ]
          },
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'    
            ]
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images',
                        publicPath: 'images'
                    }
                }
            ]
          }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'views', 'index.pug'),
            filename: 'index.html'
        }),
        new CopyWebpackPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, 'src/DB.json'),
              to: path.resolve(__dirname, 'dist/DB.json'),
            },
            {
              from: path.resolve(__dirname, 'src/images'),
              to: path.resolve(__dirname, 'dist/images'),
            }
          ],
        })
    ],
    
}
