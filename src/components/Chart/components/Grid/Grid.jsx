import * as d3 from 'd3';
import React from 'react';

class Grid extends React.Component {
  constructor() {
    super();

    this.assignNode = this.assignNode.bind(this);
  }
  componentDidMount() {
    this.renderGrid();
  }

  componentDidUpdate() {
    this.renderGrid();
  }

  assignNode(node) {
    this.node = node;
  }

  renderGrid() {
    d3.select(this.node).call(this.props.grid);
  }

  render() {
    const translate = `translate(0,${this.props.h})`;

    return (
      <g ref={this.assignNode} className="y-grid" transform={this.props.gridType === 'x' ? translate : ''} />
    );
  }
}

Grid.defaultProps = {
  h: 0,
  grid: () => {},
  gridType: '',
};

Grid.propTypes = {
  h: React.PropTypes.number,
  grid: React.PropTypes.func,
  gridType: React.PropTypes.oneOf(['x', 'y']),
};

export default Grid;
