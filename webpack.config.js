var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry:{
    app: './src/app.js' //find react code here
  },
  output:{
    filename: 'public/build/bundle.js', //once done compiling react code, put results here
    sourceMapFilename: 'public/build/bundle.map'
  },
  devtool: '#source-map',
  module:{
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query:{
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
