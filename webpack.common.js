const glob = require('glob');

module.exports = {
    entry: {
        src: glob.sync('./src/**/*.ts'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules|\.d\.ts$/
            },
            {
                test: /\.d\.ts$/,
                loader: 'ignore-loader'
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.css']
    }
}