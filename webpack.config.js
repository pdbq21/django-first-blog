/**
 * Created by ruslan on 29.09.16.
 */
/*
 module.exports = {

 entry: "./testWebpack/home",
 output: {
 filename: "build.js"
 },

 watch: true,

 module: {
 loaders: [
 {
 test: /\.js$/,
 loader: 'babel'
 }
 ]
 }
 };*/


//import 'webpack'

var webpack = require('webpack');

module.exports = {
    entry: {

        home: './testWebpack/frontend/home',
        about: './testWebpack/frontend/about',

    },
    //'./testWebpack/home',
    output: {
path: __dirname + '/testWebpack/publish',
        filename: '[name].js',
        library: '[name]'
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.scss'],
        modulesDirectories: [
            'node_modules'
        ]
    },

    watch: true,

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: ['babel'],
                exclude: /node_modules/,
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin({minimize: true}),

        new webpack.optimize.CommonsChunkPlugin({name: 'common'}),
    ]

};

