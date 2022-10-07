// const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {VueLoaderPlugin} = require('vue-loader');
const path = require("path"); //node에 들어있는 현재 경로를 받아 올 수 있는 script

module.exports = {
    mode:'development', //배포용은 production
    devtool: 'eval', 
    resolve: { 
        extensions: ['.js', '.vue']
    },
	entry: {
        app:'./main.js',
	},
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },
};
