let path = require('path');
module.exports = {
    entry: {
     	vendors: ['react', 'react-dom'],

     	index: path.resolve(__dirname, './src/index.tsx')
    },

    output: {
    	path: path.resolve(__dirname, './dist/'),

    	filename: '[name].[hash:8].js'
    },

    resolve: {
    	extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "vendors",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },

    module: {
    	rules: [
		    {
		        test: /\.css$/,
				use: ['style-loader', {
					loader: 'css-loader',
					options: {
						minimize: true
					}
				}]
		    },

    		{
		      	test: /\.scss$/,
		      	use: [
		      		{
						loader: "style-loader"
		      		},	
		      		{
						loader: "css-loader",
						options: {
							minimize: true
						}
		      		},
		      		{
		          		loader: "sass-loader"
		      	}]
		    },

	        {
	          	test: /\.ts(x?)$/,
      			exclude: /node_modules/,
      			use: [
			        {
			          	loader: 'babel-loader',
			          	options: {
					        presets: ['env'],
					        plugins: ['transform-runtime']
					    }
			        },

			        {
			          	loader: 'ts-loader'
			        }
			    ]
	        },

	        {
	        	test: /\.(png|jpg|gif)$/,
	        	use: [{
		            loader: 'url-loader',
		            options: {
		              	limit: 8192,
                        outputPath: "dist/images/"
		            }
		        }]
	      	},

	      	{
		        test: /\.(png|jpg|gif)$/,
		        use: [{
		            loader: 'file-loader',
		            options: {
		            	outputPath: "dist/fonts/"
		            }  
		        }]
		    }
      	]
    }
}