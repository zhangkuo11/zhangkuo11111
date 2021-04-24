const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports=merge(base,{
    devtool:"source-map",
    plugins:[
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'css/[name].css',
        chunkFilename: 'css/[id].css',
      })
	]
     ,
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            // options: {
            //   presets: ['@babel/preset-env','@babel/preset-react']
            // }
          }
        },
        {
          test: /\.css$/,
          use: [{
            loader:'style-loader', // creates style nodes from JS strings
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
            loader:'style-loader',  // creates style nodes from JS strings
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
            loader:'style-loader',  // creates style nodes from JS strings
          }, {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              modules: true,
            },
          }, {
            loader: 'sass-loader' // compiles Less to CSS
          }]
        },
      
     
        
      ]
    },
    mode:"development",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,//会 gzip(压缩) 和 serve(服务) 所有来自项目根路径下 dist/ 目录的文件
        port: 9000,
        overlay: {
          warnings: true,
          errors: true
        },
        proxy: {
          "/data": { //地址
            "target": "http://www.bjlink32.com/data.php", //接口地址
            // secure: false,// 如果是https接口，需要配置这个参数
            "changeOrigin": true,//开启跨域
            "pathRewrite": { "^/data" : "" }//如果接口本身没有/data需要通过pathRewrite来重写了地址
          }
        }
        
      }
  
})