import React, { Component } from 'react';

/**
 * 默认主题
 */
var DefaultTheme = React.createClass({
  render: function() {
    return (
        <img src={this.props.item.img} />
    );
  }
});

/**
 * 主题1
 * 选取最新，最热的图片主题作为首交显示，可以显示广告
 * 内容为4张图片，在一个图片主题中抽取四张图片
 * jsx写法
 */
class ThemeOne extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){};

  componentDidMount() {};

  render() {
    return (
        <div>
          <div className="row img-wrap-theme">
            <div className="col-xs-12 col-md-3 img-wrap">
                <img src={this.props.imgsrc} />
            </div>
            <div className="col-md-3 hidden-xs img-wrap">
                <img src={this.props.imgsrc} />
            </div>
            <div className="col-md-3 hidden-xs img-wrap">
                <img src={this.props.imgsrc} />
            </div>
            <div className="col-md-3 hidden-xs img-wrap">
                <img src={this.props.imgsrc} />
            </div>
          </div>
        </div>
    );
  }
}

export default class SliderItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { count, item } = this.props;
    let width = 100 / count + '%';
    return (
      <li className="slider-item" style={{width: width}}>
        <ThemeOne imgsrc={this.props.item.src} />
      </li>
    );
  }
}
