var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: path.join(__dirname, 'src/server.ts'),
    target: 'node',
    externals: [nodeExternals()],

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'server.bundle.js'
    },

    module: {
        loaders: [{
            test: /\.ts$/,
            include: [ path.resolve(__dirname, 'src')],
            loader: 'ts-loader'
        }]
    }
};