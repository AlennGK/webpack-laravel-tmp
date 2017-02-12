var path = require('path');
var htmlWebPack = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack')
var ProvidePlugin = require('webpack/lib/ProvidePlugin');


module.exports = {
	devtool: 'cheap-eval-source-map',
	context: path.join(__dirname,'src'),	// ABSOLUTE ROUTE ./
	entry: {
		app: 	'./assets/js/app.js',
		test: 	'./assets/js/test.js'
	},

	output: {
		publicPath: 'http://localhost:8080',
		path: path.join(__dirname, 'public'),
		filename: "js/[name].bundle.js"
	},

	module: {
		loaders: [
		// JS
			{
				test: /\.js$/,		// ON WHAT TYPE USE THIS LOADER
				loader: 'babel',
				include: path.join(__dirname, 'src', 'js'),
			},
		// STYLE
		 	{
		 		test: /\.(sass|scss|css)$/,
		 		loader: ExtractTextPlugin.
		 			extract({
		 			fallback: 	'style-loader',
		 			use:		'css-loader!sass-loader'
		 		}),
		 	},
		// FILES
			{
				test: /\.(jpe?g|png|gif|svg|ico)$/i,
				loader: "file-loader?name=[path][name].[ext]&context=./src/assets"
			},
		// FONTS
			{
				test: /\.(otf|eot|svg|ttf|woff)$/,
				loader: 'url-loader?limit=10000'
			},

			{
				test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=10000"
			},

			{
				test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
				loader: 'file-loader'
			},
		// BOOTSTRAP
			{
				test: /bootstrap\/public\/js\/umd\//,
				loader: 'imports?jQuery=jquery'
			},
		 ],
	},

	devServer: {
		contentBase: path.join(__dirname, 'src', 'assets'),
		inline: true,
		stats: {
			errors: true,
			colors: true,
			errorDetails: true,
			reasons: false,
			hash: false,
			version: false,
			timings: false,
			assets: false,
			chunks: false,
			modules: false,
			children: false,
			source: false,
			warnings: false,
			publicPath: false
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

		new ExtractTextPlugin('./css/[name].style.css'),

		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery",
			"Tether": 'tether' // Bootstrap v4 problem
		})
	],
};