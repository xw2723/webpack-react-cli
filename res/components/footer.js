import React from "react";

import VerticalWave from "./loadding/verticalWave";

require("./footer.css");

/**
 * 页脚
 */
var Footer = React.createClass({
    render: function(){
        return (
            <div className="footer">

                <div className="copyright background-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 text-left">
                            © 2016 Nantria - All Rights Reserved
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <nav className="socials-icons pull-right">
                                    <ul>
                                        <li><a href="#" className="social-icon social-clear"><i className="ion-social-facebook"></i></a></li>
                                        <li><a href="#" className="social-icon social-clear"><i className="ion-social-twitter"></i></a></li>
                                        <li><a href="#" className="social-icon social-clear"><i className="ion-social-googleplus"></i></a></li>
                                        <li><a href="#" className="social-icon social-clear"><i className="ion-social-pinterest"></i></a></li>
                                        <li><a href="#" className="social-icon social-clear"><i className="ion-social-dribbble-outline"></i></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <VerticalWave />
            </div>
        );
    }
});

export default Footer