import React, { Component } from 'react';

export default class SliderArrows extends Component {
  constructor(props) {
    super(props);
  }

  handleArrowClick(option) {
    this.props.turn(option);
  }

  render() {
    return (
      <div className="slider-arrows-wrap">
        <span
          className="slider-arrow slider-arrow-left glyphicon glyphicon-backward"
          onClick={this.handleArrowClick.bind(this, -1)}>
        </span>
        <span
          className="slider-arrow slider-arrow-right glyphicon glyphicon-forward"
          onClick={this.handleArrowClick.bind(this, 1)}>
        </span>
      </div>
    );
  }
}
