const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.resolve(__dirname, 'src'), // откуда будет искать
    mode: 'development',
    resolve: {
        modules: [path.resolve(__dirname,'./node_modules')]
    },
    entry:{
        main: './js/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all' // общий код, библиотеки загружаются в отдельный файл
        }
    },
    devServer: {
        port: 4200
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({ //https://webpack.js.org/plugins/copy-webpack-plugin/
            patterns: [ // массив объектов, которые содержат инструкцию копирования { from - откуда копируем, to - куда копируем }
                { // копируем всё что находится в папке src/img в папку dist/img
                    from: path.resolve(__dirname, 'src/img'),
                    to: path.resolve(__dirname, 'dist/img')
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /.+\.css$/, //регулярное выражение (если файлы, кот своим расширением соответствую данному правилу, попадаются ему в качестве импорта, то ему нужно использовать (use) различные типы loader)
                use: [MiniCssExtractPlugin.loader, 'css-loader'] // webpack читает с права на лево // loader - когда один loader, use - когда массив loader-ов
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/, // подключение шрифтов
                use: ['file-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: ['file-loader']
            },
        ]
    }
}