const path = require('path');

module.exports = {
    // root file of my application
    entry: './src/client/client.js',
    // where to put the generated output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
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