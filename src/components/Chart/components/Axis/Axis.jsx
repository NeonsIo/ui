import * as d3 from 'd3';
import React from 'react';

class Axis extends React.Component {
  constructor() {
    super();

    this.assignNode = this.assignNode.bind(this);
  }
  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  assignNode(node) {
    this.node = node;
  }

  renderAxis() {
    d3.select(this.node).call(this.props.axis);
  }

  render() {
    const translate = `translate(0,${this.props.h})`;
    const { axisType } = this.props;

    return (
      <g ref={this.assignNode} className={`axis axis-${axisType}`} transform={axisType === 'x' ? translate : ''} />
    );
  }
}

Axis.defaultProps = {
  h: 0,
  axis: () => {},
  axisType: '',
};

Axis.propTypes = {
  h: React.PropTypes.number,
  axis: React.PropTypes.func,
  axisType: React.PropTypes.oneOf(['x', 'y']),
};

export default Axis;
