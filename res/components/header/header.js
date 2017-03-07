import React from "react";
import { Link, IndexLink } from 'react-router';

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
                            <IndexLink to="/" className="navbar-brand" activeClassName="active">Model</IndexLink>
                            <Link to="/car" className="navbar-brand" activeClassName="active">Car</Link>
                            <Link to="/game" className="navbar-brand" activeClassName="active">Game</Link>
                            <Link to="/store" className="navbar-brand" activeClassName="active">Store</Link>
                        </div>

                        <div className="nav-block right block-menu navbar-right">
                            <ul className="nav navbar-nav">
                                <li><a href="javascript:void(0);">Login</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
});

export default Header;