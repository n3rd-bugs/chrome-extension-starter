const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
	entry: {
        'index': './src/index',
        'options': './src/options'
    },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
    },
    plugins: [
        new CopyWebpackPlugin([{ from: 'src/**', to: '', flatten: true, ignore: ['*.js'] }])
    ]
};
