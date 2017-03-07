import React from "react";

require("./dialog.scss");

var DefaultDialog = React.createClass({
    componentDidMount: function(){
        
    },
    render: function(){
        return (
            <div id="defaultDialog" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title">默认Dialog</h4>
                    </div>
                    <div class="modal-body">
                        <p>默认Dialog Content</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
});

/**
 * 页脚
 */
var DialogDom = React.createClass({

    render: function(){
        return (
            <div className="dialog-dom">
                <DefaultDialog />
            </div>
        );
    }
});

export default DialogDom