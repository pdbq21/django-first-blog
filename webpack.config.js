/**
 * Created by ruslan on 29.09.16.
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {

        home: /*'./selectMenu/src/index.js'*/ './SearchPages/templates/searchPage/frontend/app/App.js'

    },
    //'./testWebpack/home',
    output: {
        path: __dirname + /*'/selectMenu',*/'/SearchPages/templates/searchPage/publish',
        /*filename: '[name].js',
        library: '[name]'*/
        filename: 'build.js'
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
               /* include: [
                    path.resolve(__dirname, "src"),
                ],*/
                exclude: /node_modules/,
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0', 'react']
                }
            },


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
        //new webpack.optimize.CommonsChunkPlugin({name: 'common'}),

        new webpack.ProvidePlugin({
            pluck: 'react/dist/react.js'
        }),


    ]

};

