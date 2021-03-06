const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MergeJsonWebpackPlugin = require("merge-jsons-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dirVars = require('./base/dir-vars.config');

module.exports = function(option) {
    return {
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify(option.env)
                }
            }),
            new CopyWebpackPlugin([
                { from: './webapp/data', to: 'data' },
                { from: dirVars.libDir + '/jquery/dist/jquery.min.js', to: 'libs/jquery.min.js' },
                { from: dirVars.libDir + '/echarts/dist/echarts.js', to: 'libs/echarts.js' },
                { from: dirVars.libDir + '/metismenu/dist/metisMenu.js', to: 'libs/metisMenu.js' },
                { from: dirVars.libDir + '/metismenu/dist/metisMenu.css', to: 'libs/styles/metisMenu.css' },
                { from: dirVars.libDir + '/popper.js/dist/umd/popper.min.js', to: 'libs/popper.min.js' },
                { from: dirVars.libDir + '/highcharts/highcharts.js', to: 'libs/highcharts.min.js' },
                { from: dirVars.libDir + '/highcharts/themes/grid-light.js', to: 'libs/themes/grid-light.min.js' },
                { from: dirVars.libDir + '/bootstrap/dist/js/bootstrap.min.js', to: 'libs/bootstrap.min.js' },
                // { from: dirVars.libDir + '/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js', to: 'libs/jquery.mCustomScrollbar.concat.min.js' },
                // { from: dirVars.libDir + '/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css', to: 'libs/styles/jquery.mCustomScrollbar.css' },
                // { from: dirVars.libDir + '/jquery-mousewheel/jquery.mousewheel.js', to: 'libs/jquery.mousewheel.js' }

            ]),
            new MergeJsonWebpackPlugin({
                output: {
                    groupBy: [
                        { pattern: "./src/main/webapp/i18n/en/*.json", fileName: "./i18n/en.json" },
                        { pattern: "./src/main/webapp/i18n/zh-cn/*.json", fileName: "./i18n/zh-cn.json" }
                    ]
                }
            }),
            new HtmlWebpackPlugin({
                template: './webapp/index.html',
                chunksSortMode: 'dependency',
                inject: 'body'
            })

        ]
    }
};