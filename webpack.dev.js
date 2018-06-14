const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
//a webpack for client side development
module.exports = merge(common,{
	entry : {
		client : ['./src/client/index.js'],
	},
	mode : 'development',
	devtool : 'inline-source-map',
	devServer : {
		contentBase : 'dist',
		publicPath : '/',
		port : 8080,
		overlay:true,
		inline:true,
		proxy : {
			'**' : {
				target : 'http://[::1]:3000',
				changeOrigin : true,
				secure : false,
			}
		}
	},
	plugins : [
		new webpack.NamedModulesPlugin(),
	]
});
