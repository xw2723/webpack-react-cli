import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';

import $ from 'jquery';
// var $ = require("./static/js/jquery-vendor.js");

import MainScss from '../static/css/main.scss';

/**
 * 导入模块
 */
import Header from './components/header/header';
import Footer from './components/footer';
import IndexPage from './components/index';
import CarPage from './components/car/car';
import GamePage from './components/game/game';



var App = React.createClass({
  render() {
    return (
        <div>
            {this.props.children}
        </div>
    );
  }
});

ReactDom.render(
    (
        <div>
            <Header />
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={IndexPage}/>
                    <Route path="/car" component={CarPage}></Route>
                    <Route path="/game" component={GamePage}></Route>
                </Route>
            </Router>
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