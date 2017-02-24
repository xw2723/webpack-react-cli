var webpack = require('webpack');

// var path = require('path');
// var node_modules = path.resolve(__dirname, 'node_modules');
// var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

module.exports = {
    entry: {
        app: "./res/app.js",
    },
    output: {
        path: __dirname + "/build",
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 8080
    },
    resolve:{
        alias: {
            //文件取别名
            JQuery: "./static/js/jquery-vendor.js"
            // 'react': pathToReact
        },
        // extensions:['','.js','.json']
    },
    module: {
        loaders: [
            //expose-loader插件， 导入jquery用
            {
                // 得到jquery模块的绝对路径
                test: require.resolve('jquery'),
                // 将jquery绑定为window.jQuery ! window.$
                loader: 'expose-loader?jQuery!expose-loader?$'
            },
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                // query: {
                //     presets: ['react', 'es2015', 'stage-0'],
                //     // plugins: ['transform-runtime']
                // }
            },
        ]
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.BannerPlugin('This file is created by zhaoda')
    ]
};
