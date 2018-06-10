const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const uglifyJSPlugin = new UglifyJSPlugin();

module.exports = merge(common, {
    plugins: [
	    new CleanWebpackPlugin('dist'),

        new HtmlWebpackPlugin({
	        filename: 'index.html',

	        template: path.resolve(__dirname, './src/index.html'),

	        chunks: ['vendors','index'],

	        inject: 'body',

	        title:''
	    }),

        uglifyJSPlugin
    ]
});