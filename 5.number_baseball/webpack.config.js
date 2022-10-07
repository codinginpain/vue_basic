const path = require("path"); //node에 들어있는 현재 경로를 받아 올 수 있는 script

module.exports = {
	entry: {
        app:'./main.js',
	},
    module: {
        rules: [{

        }],
    },
    plugins: [],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },
};
