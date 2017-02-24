import React from "react";

require("./verticalWave.css");

/**
 * 竖波loadding效果
 */
var VerticalWave = React.createClass({
    render: function(){
        return (
            <div className="spinner-loading">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
                <div className="rect6"></div>
                <div className="rect7"></div>
                <div className="rect8"></div>
            </div>
        );
    }
});

export default VerticalWave;