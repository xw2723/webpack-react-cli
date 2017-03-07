import React from "react";

require("./header.css");

var Header = React.createClass({
    render: function(){
        return (
            <div className="main-header">
                <div className="navbar navbar-default navbar-tmp1">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                ikuup
                            </a>
                        </div>
                        <div className="navbar-header menu">
                            <a className="navbar-brand" href="#/">
                                Model
                            </a>
                            <a className="navbar-brand" href="#/car">
                                Car
                            </a>
                            <a className="navbar-brand" href="#/game">
                                Game
                            </a>
                            <a className="navbar-brand" href="#/store">
                                Store
                            </a>
                        </div>

                        <div className="nav-block right block-menu navbar-right">
                            <ul className="nav navbar-nav">
                                <li><a href="javascript:void(0);">Login</a></li>
                                {/*<li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">Login</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else here</a></li>
                                    </ul>
                                </li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Header;