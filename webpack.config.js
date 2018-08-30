const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';
const zeptoPath = require.resolve('zepto');
const cssLoader = [
    {
        loader: 'css-loader',
        options: {
            minisize: true
        }
    },
    'postcss-loader'
]


module.exports = {
    entry: './src/main.ts',
    output: {
        path: __dirname + '/dist',
        filename: '[name]-[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: 'ts-loader'
            },
            {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: cssLoader
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: cssLoader.concat('scss-loader')
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    'file-loader'
                ]
            },
            /* {
                test: zeptoPath,
                use: [
                    {
                        loader: 'exports-loader',
                        options: 'window.$'
                    },
                    'script-loader'
                ]
            } */
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
        new ExtractTextPlugin('[name]-[hash].css'),
        /* new webpack.ProvidePlugin({
            $: zeptoPath,
            Zepto: zeptoPath,
            'window.Zepto': zeptoPath
        }) */
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    devServer: {
        contentBase: './dist',
        port: 7777,
        host: 'localhost',
        index: 'index.html'
    },
    devtool: 'inline-source-map'
}