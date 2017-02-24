import React from "react";

require("./index.css");

var ItemDom = React.createClass({
    render: function(){
        return (
            <li>
                <div className="img-wrap">
                    <img src={this.props.item.img} />
                </div>
                <div className="txt-wrap">

                </div>
            </li>
        );
    }
});

/**
 * 首页内容
 */
var IndexPage = React.createClass({
    getDefaultProps: function(){
        return {
            list: [
                {img: "./static/img/img_9.jpg"},
                {img: "./static/img/img_10.jpg"},
                {img: "./static/img/img_11.jpg"},
                {img: "./static/img/img_12.jpg"},
                {img: "./static/img/img_13.jpg"},
                {img: "./static/img/img_14.jpg"},
                {img: "./static/img/img_15.jpg"},
                {img: "./static/img/img_9.jpg"},
                {img: "./static/img/img_10.jpg"},
                {img: "./static/img/img_11.jpg"},
                {img: "./static/img/img_12.jpg"},
                {img: "./static/img/img_13.jpg"},
                {img: "./static/img/img_14.jpg"},
                {img: "./static/img/img_15.jpg"}
            ]
        };
    },
    render: function(){
        return (
            <div className="container-pull index-page">
                <ul className="image-flow-list">
                    {
                        this.props.list.map(function(n, i){
                            return (
                                <ItemDom item={n} key={i} />
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
});

export default IndexPage;