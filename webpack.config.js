const path = require('path');

module.exports = {
	entry: './src/sketch.ts',
	devtool: 'inline-source-map',
	module: {
		rules: [
		{
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/,
		},
		],
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		historyApiFallback: {
			rewrites: [
				{ from: /./, to: '/index.html' }
			]
		},
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 3000
	}
};