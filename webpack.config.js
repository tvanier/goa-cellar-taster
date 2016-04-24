var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        //noParse: /citrix\-comm\-stack\.debug\.js$/,
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ],
    devServer: {
    }
};
