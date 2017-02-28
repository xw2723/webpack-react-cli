var webpack = require('webpack');

// var path = require('path');
// var node_modules = path.resolve(__dirname, 'node_modules');
// var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

// var ExtractTextPlugin = require("extract-text-webpack-plugin");  //css单独打包

module.exports = {
    entry: {
        app: "./res/app.js",
    },
    output: {
        path: __dirname + "/build",
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve:{
        //文件取别名
        // alias: {
            // JQuery: "./static/js/jquery-vendor.js"
            // 'react': pathToReact
        // },
        //配置此项，可以不写后缀
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        loaders: [
            // expose-loader插件， 导入jquery用
            // 将jquery绑定为window.jQuery ! window.$
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader?jQuery!expose-loader?$'
            },
            //autoprefixer-loader为css自动添加浏览器前缀
            { test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader'},
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'], },
            { test: /\.json$/, loader: 'json', },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
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
    // 3.使用webpack构建本地服务器
    // npm install --save-dev webpack-dev-server
    devServer: {
        // contentBase: './public', //本地服务器所加载的页面所在的目录
        // historyApiFallback: true, //不跳转
        colors: true, //终端中输出结果为彩色
        inline: true, //实时刷新
        port: 8080
    },
    //方便开发环境调试和错误追踪
    devtool: 'eval-source-map',
    plugins: [
        //css单独打包
        // new ExtractTextPlugin('main.css'),
        new webpack.BannerPlugin('This file is created by zhaoda')
    ]
};
