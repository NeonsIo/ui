import React from 'react';
import './MetricsList.css';

class MetricsList extends React.Component {
  componentWillMount() {
    this.props.fetchListDataAction(this.props.segment);
  }

  renderTotal() {
    return (
      <div className="Total">
        <div>
          Total
        </div>
        <div className="Total--value">
          {this.props.listData.length}
        </div>
      </div>
    );
  }

  render() {
    const { listDataLoaded } = this.props;

    return listDataLoaded ? (
      <div className="MetricsList">
        {this.renderTotal()}
      </div>
    ) : null;
  }
}

MetricsList.defaultProps = {
  segment: null,
  listData: [],
  listDataLoaded: false,
  fetchListDataAction: () => {},
};

MetricsList.propTypes = {
  fetchListDataAction: React.PropTypes.func,
  segment: React.PropTypes.string,
  listData: React.PropTypes.arrayOf(React.PropTypes.object),
  listDataLoaded: React.PropTypes.bool,

};

export default MetricsList;
