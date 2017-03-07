import React from "react";
import Slider from "./common/Slider/Slider.jsx";

require("./index.scss");

const pageData = {
    list: [
        {src: "./static/img/img_9.jpg"},
        {src: "./static/img/img_10.jpg"},
        {src: "./static/img/img_11.jpg"},
        {src: "./static/img/img_12.jpg"},
        {src: "./static/img/img_13.jpg"},
        {src: "./static/img/img_14.jpg"},
        {src: "./static/img/img_15.jpg"},
        {src: "./static/img/img_9.jpg"},
        // {src: "./static/img/img_10.jpg"},
        // {src: "./static/img/img_11.jpg"},
        // {src: "./static/img/img_12.jpg"},
        // {src: "./static/img/img_13.jpg"},
        // {src: "./static/img/img_14.jpg"},
        // {src: "./static/img/img_15.jpg"}
    ]
};

/**
 * 暂不用
 * 顶部图片轮播
 */
var TopImageBox = React.createClass({
    render: function(){
        return (
            <div>
                
            </div>
        );
    }
});

var BGone = React.createClass({
    render: function(){}
});

/**
 * 图片流的每一项
 */
var ItemDom = React.createClass({
    render: function(){
        return (
            <li>
                <div className="img-wrap">
                    <img src={this.props.item.src} />
                </div>
                <div className="txt-wrap">
                    <div className="txt-wrap-table">
                        <div>
                            <p className="txt">我的开始，我的结束！！！！</p>
                            <div className="likebox">
                                <i className="glyphicon glyphicon-heart-empty"></i>
                                <i className="glyphicon glyphicon-heart"></i>
                                <span>88</span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
});

/**
 * 每一列dom
 */
var ListDom = React.createClass({
    render: function(){
        alert(JSON.stringify(this.props.itemList));
        return (
            <ul className="image-flow-colm">
                {
                    this.props.itemList.map(function(item,index){
                        return (<ItemDom key={index} item={item} />);
                    })
                }
            </ul>
        );
    }
});

/**
 * 首页内容
 */
var IndexPage = React.createClass({
    getDefaultProps: function(){
        return {};
    },
    render: function(){
        //显示几列，可配置
        var colNum = 4;
        var list = [];
        var times = 0;

        for(var i=0;i<colNum;i++){
            list.push([]);
        }

        for(var i=0;i<pageData.list.length;i++){
            var n = pageData.list[i];
            for(var j=0;j<list.length;j++){
                if(j==times){
                    list[j].push(n);
                    if(times>=3){ times = -1; }
                    break;
                }
            }
            times++;
        }

        return (
            <div className="container index-page">
                <div className="top-basebg">
                    <img src="./static/img/bg_base.jpg" />
                </div>

                <div className="top-interactive">
                    <Slider
                        items={pageData.list}
                        speed={1.2}
                        delay={2.1}
                        pause={true}
                        autoplay={false}
                        dots={true}
                        arrows={true}
                    />
                </div>

                <div className="image-flow-list">
                    {
                        list.map(function(item,index){
                            return (<ListDom key={index} itemList={item} />);
                        })
                    }
                </div>
            </div>
        );
    }
});

export default IndexPage;


//图片流的另一种算法
//计算每个数组最大个数
// var maxLength = Math.ceil(this.props.list.length / colNum);
// var result = [];
// for(var i=0; i<this.props.list.length; i+=maxLength){
//     result.push(this.props.list.slice(i, i+maxLength));
// }

// {
//     this.props.list.map(function(n, i){
//         var position = {};
//         if(i%4==0){
//             position[0] = 
//         }
//         return (
//             <ItemDom item={n} key={i}  />
//         );
//     })
// }