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
        extensions: ['', '.js', '.jsx'],
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
            },
            {test : /\.css$/, loader: 'style!css!'}
        ]
    },
    plugins: [
       /*new webpack.optimize.UglifyJsPlugin({
           warnings: false,
        booleans: false,
        unused: false,
           minimize: true}),*/

new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
        new webpack.optimize.CommonsChunkPlugin({name: 'common'}),

        new webpack.ProvidePlugin({
            pluck: 'react/dist/react.js'
        }),



    ]

};

