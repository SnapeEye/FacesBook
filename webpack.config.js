const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './modules/init.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'initFB.js'
  },
  module: {
  	loaders: [
  		{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: [ 'es2015', 'react', 'stage-0' ],
                babelrc: false
            }
        },
        {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('css-loader!less-loader')
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url-loader!img-loader'
        }
  	]
  },
  plugins: [
  	new ExtractTextPlugin("./css/[name].bundle.css")
  ]
};