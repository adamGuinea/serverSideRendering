const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
    // telling webpack that im building a bundle for Nodejs rather than the browser
    target: 'node',
    // root file of my application
    entry: './src/index.js',
    // where to put the generated output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }
};

module.exports = merge(baseConfig, config);