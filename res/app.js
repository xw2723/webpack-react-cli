import React from 'react';
import ReactDom from 'react-dom';
import createHistory from 'history/lib/createHashHistory'
import { Router, Route, Link } from 'react-router';

/**
 * 导入模块
 */
import Header from './components/header';
import Footer from './components/footer';
import IndexPage from './components/index';

require("../static/css/main.scss");
// require("../static/css/style.scss");

// var $ = require("JQuery");
var $ = require("jquery");
// var $ = require("./static/js/jquery-vendor.js");


var BodyDom = React.createClass({
    render: function(){
        return (
            <IndexPage />
        );
    }
});

var CarDom = React.createClass({
    render: function(){
        return (
            <div>
                Car page!!!
            </div>
        );
    }
});

ReactDom.render(
    (
        <div>
            <Header />
            <Router history={createHistory()}>
                <Route path="/" component={BodyDom}>
                    {/*<Route path="about" component={About}/>
                    <Route path="users" component={Users}>
                        <Route path="/user/:userId" component={User}/>
                    </Route>
                    <Route path="*" component={NoMatch}/>*/}
                </Route>
                <Route path="/car" component={CarDom}></Route>
            </Router>
            <BodyDom />
            <Footer />
        </div>
    ),
    document.getElementById('app')
);


// HTML5 history, 推荐
// import createHistory from 'history/lib/createBrowserHistory'

// Hash history
// import createHistory from 'history/lib/createHashHistory'

// 内存 history （如：node环境）
// import createHistory from 'history/lib/createMemoryHistory'

// import path from "path";
// var fs = require("fs");
// fs.exists("./static/js/jquery-vendor.js", function(exists) {  
//     if(exists){
//         console.log("文件存在")
//     }
//     if(!exists){
//         console.log("文件不存在")
//     }
// }); 