const { merge } = require("webpack-merge");

const package = require("./package.json");
const common = require("./webpack.common.js");
const path = require('path');
const chalk = require('chalk');
const glob = require('glob');
const fs = require('fs');

function listener(server)
{
    console.clear();
    console.log(chalk.bgHex("#001AFF").bold(`\n        \n  Velt  \n        \n`));
    console.log(`${ chalk.greenBright(`> Using ${ package.name } with version ${ package.version }`) }`);
    console.log(`${ chalk.greenBright(`> ${ package.description }`) }\n`);
    console.log(`${ chalk.greenBright(`> Listening`) } ${ chalk.cyan.underline(`http://localhost:${ server.options.port }`) }\n`);
}

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');

if (!fs.existsSync('./public')) {
    throw new Error("The public development directory does not exist");
}

module.exports = merge(common, {
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        }),
        new EnvironmentPlugin({
            // Env variables
        })
    ],
    entry: {
        public: glob.sync('./public/**/*.ts'),
    },
    mode: "development",
    devtool: "cheap-source-map",
    infrastructureLogging: { level: 'error' },
    stats: 'errors-only',
    devServer: {
        open: true,
        static: {
            directory: path.join(__dirname, "public"),
            watch: true
        },
        compress: true,
        port: 8000,
        historyApiFallback: false,
        onListening: listener
    }
})