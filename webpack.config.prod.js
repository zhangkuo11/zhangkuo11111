const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports=merge(base,{
    plugins:[
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'css/[name]-[hash].css',
        chunkFilename: 'css/[id].css',
      })
	],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [{
            loader: MiniCssExtractPlugin.loader, // creates style nodes from JS strings
            options:{
              publicPath: '../'
            }
          }, {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              modules: true,
            },
          },]
        },
        {
          test: /\.less$/,
          use: [{
            loader: MiniCssExtractPlugin.loader, // creates style nodes from JS strings
            options:{
              publicPath: '../'
            }
          }, {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              modules: true,
            },
          }, {
            loader: 'less-loader' // compiles Less to CSS
          }]
        },
        {
          test: /\.scss$/,
          use: [{
            loader:MiniCssExtractPlugin.loader, // creates style nodes from JS strings
            options:{
              publicPath: '../'
            }
          }, {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              modules: true,
            },
          }, {
            loader: 'sass-loader' // compiles Less to CSS
          }]
        }      
      ]
    },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
    mode:"production",
  
})