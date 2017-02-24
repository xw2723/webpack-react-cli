// module.js
import React from 'react';

class ModuleHtml extends React.Component {
    render() {
        return (
            <div>
                <p>this is module!!!</p>
                <p>{this.props.number}</p>
            </div>
        )
    }
}

//导出组件
export default ModuleHtml;
