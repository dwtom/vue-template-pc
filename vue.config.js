const webpack = require('webpack');
module.exports = {
    lintOnSave: true,
    // sourceMap(生产环境不建议开启)
    productionSourceMap: true,
    css: {
        sourceMap: true
    },
    // 全局变量设置
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    configureWebpack: config => {
        let pluginsWebpack = [
            // 使用ProvidePlugin加载的模块需要在eslintrc.js的globals里设置
            // 使用webpack.ProvidePlugin加载的模块可以无需import导入
            new webpack.ProvidePlugin({
                axios: 'axios'
            })
        ];
        if (process.env.NODE_ENV === 'production') {// 为生产环境修改配置...
            // 使用DefinePlugin暴露的全局变量，需要在eslintrc.js的globals里设置
            pluginsWebpack.push(
                new webpack.DefinePlugin({
                    '__GATEWAYPATH__': JSON.stringify('')
                })
            );
        } else {// 为开发环境修改配置...
            pluginsWebpack.push(
                new webpack.DefinePlugin({
                    '__GATEWAYPATH__': JSON.stringify('/gateway')
                })
            );
        }
        config.plugins = [...config.plugins, ...pluginsWebpack];
    },
    // 开发环境服务设置
    devServer: {
        port: '9000', // 开发环境端口号
        // 接口代理
        proxy: {
            '/gateway': {
                target: 'http://apis.juhe.cn',
                ws: true, // 是否启用websockets
                changOrigin: true,
                pathRewrite: {
                    '^/gateway': ''
                }
            },
        }
    }
}