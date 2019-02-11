const path = require('path');

module.exports = {
    // telling webpack that im building a bundle for Nodejs rather than the browser
    target: 'node',
    // root file of my application
    entry: './src/index.js',
    // where to put the generated output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    // run babel on every file
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {targets: {browsers: ['last 2 versions'] }}]
                    ]
                }
            }
        ]
    }
};