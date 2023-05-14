const glob = require('glob');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        }),
        new EnvironmentPlugin({
            // Env variables
        })
    ],
    entry: {
        src: glob.sync('./src/**/*.ts'),
        public: glob.sync('./public/**/*.ts')
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
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist'),
    }
}