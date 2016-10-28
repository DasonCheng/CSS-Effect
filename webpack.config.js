var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        base: __dirname + "/origin/entry/base.js",
        main: __dirname + "/origin/entry/main.js"
    },
    output: {
        path: __dirname + '/dist/public/build',
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel",
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!postcss")
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!less-loader?sourceMap")
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!sass-loader?sourceMap!postcss")
        }, {
            test: /\.(ttf|eot|woff|woff2|svg|jpe?g|png|gif)$/,
            loader: "url-loader",
            query: {limit: 50000}
        }]
    },
    postcss: [
        require('autoprefixer')//调用autoprefixer插件
    ],
    // devtool: "source-map",
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "common",
        //     minChunks: 2
        // }),
        new webpack.BannerPlugin("Author:		DasonCheng"),
        new ExtractTextPlugin("[name].css"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            // jquery
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};