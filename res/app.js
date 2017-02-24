import React from 'react';
import ReactDom from 'react-dom';
// import path from "path";

require("../static/css/main.css");
// var $ = require("JQuery");
var $ = require("jquery");
// var $ = require("./static/js/jquery-vendor.js");


/**
 * 导入模块
 */
import ModuleHtml from './components/module';
import Header from './components/header';
import Footer from './components/footer';

import IndexPage from './components/index';

var BodyDom = React.createClass({
    render: function(){
        return (
            <IndexPage />
        );
    }
});

ReactDom.render(
    (
        <div>
            <Header />
            <BodyDom />
            <Footer />
        </div>
    ),
    document.getElementById('app')
);



// var fs = require("fs");
// fs.exists("./static/js/jquery-vendor.js", function(exists) {  
//     if(exists){
//         console.log("文件存在")
//     }
//     if(!exists){
//         console.log("文件不存在")
//     }
// }); 