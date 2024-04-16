const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
    mode: "development",

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },

    output: {
        filename: 'src/index.js',
        path: path.resolve(__dirname, 'target'),
        publicPath: 'auto',
    },

    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },

    devServer: {
        port: 8001,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),

        new ModuleFederationPlugin({
            name: 'app_csa',
            filename: 'remoteEntry.js',
            exposes: {
                "./AppInit": "./src/bootstrap",
            },
        }),
    ],
}
