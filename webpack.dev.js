const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
    devtool: 'source-map',

    devServer: {
        contentBase: './dist',

        port: 9000,

		open: true,
		
		historyApiFallback: {
			rewrites: [
				{ from: /.*/, to: '/index.html' },
			]
		}
    },
  	
    plugins: [
    	// new webpack.DefinePlugin({
	    //     'process.env': {
	    //         NODE_ENV: '"development"'
	    //     }
	    // }),
	    new HtmlWebpackPlugin({
	        filename: 'index.html',

	        template: path.resolve(__dirname, './src/index.html'),

	        chunks: ['vendors', 'index'],

	        inject: 'body',

	        title:''

            // hash: true
	    })
    ]
});