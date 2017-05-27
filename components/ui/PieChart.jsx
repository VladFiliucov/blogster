import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class PieChart extends Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: { columns: this.props.columns }
    });
  }

  render() {
    return (
      <div ref="chart" />
    );
  }
}

