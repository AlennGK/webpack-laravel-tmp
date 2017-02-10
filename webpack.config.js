var path = require('path');
var htmlWebPack = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'cheap-eval-source-map',
	context: path.join(__dirname,'src'),	// ABSOLUTE ROUTE ./
	entry: {
		app: 	'./assets/js/app.js',
		test: 	'./assets/js/test.js'
	},

	output: {
		path: path.join(__dirname, 'dist'),
		filename: "[name].bundle.js"
	},

	module: {
		loaders: [
			{
				test: /\.js$/,		// ON WHAT TYPE USE THIS LOADER
				loader: 'babel',
				include: path.join(__dirname, 'src', 'js'),
			},

		 	{
		 		test: /\.sass$/,
		 		loader: ExtractTextPlugin.
		 			extract({
		 			fallback: 	'style-loader',
		 			use:		'css-loader!sass-loader'
		 		}),
		 	},
		 ],
	},

	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		inline: true,
		stats: {
			colors: true,
			reasons: true,
			chunks: false
		}
	},
	plugins: [
		new htmlWebPack({
			template: path.join(__dirname, 'src', 'assets', 'index.html'),
			hash: true,
			chunks: ['app']
		}),

		new htmlWebPack({
			template: path.join(__dirname, 'src', 'assets', 'test.html'),
			hash: true,
			filename: 'test.html',
			chunks: ['test']
		}),

		new ExtractTextPlugin('style.css')
	]
};