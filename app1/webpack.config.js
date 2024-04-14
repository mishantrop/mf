const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
    mode: "development",

    output: {
        filename: 'src/index.js',
        path: path.resolve(__dirname, 'target'),
        publicPath: 'auto',
    },

    devServer: {
        port: 8001,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),

        new ModuleFederationPlugin({
            name: 'app1',
            filename: 'remoteEntry.js',
            exposes: {
                "./App1Init": "./src/bootstrap",
            },
        }),
    ],
}
