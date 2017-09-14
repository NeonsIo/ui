import React from 'react';
import Flag from 'react-flags';
import md5 from "md5";
import './MetricsList.css';

class MetricsList extends React.Component {
  componentWillMount() {
    const { fetchListData, segment } = this.props;

    fetchListData(segment);
  }

  renderTotal() {
    const { listData } = this.props;

    return (
      <div className="Total">
        <div>
          Total
        </div>
        <div className="Total--value">
          {listData.length}
        </div>
      </div>
    );
  }

  renderList() {
    const { listData } = this.props;

    return (
      <div>
        {listData.map(listElement => (
          <div key={md5(listElement)}>
            {listElement.timestamp}
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { listDataLoaded } = this.props;

    return listDataLoaded ? (
      <div className="MetricsList">
        {this.renderTotal()}
        {this.renderList()}
      </div>
    ) : null;
  }
}

MetricsList.defaultProps = {
  segment: null,
  listData: [],
  listDataLoaded: false,
  fetchListData: () => {},
};

MetricsList.propTypes = {
  fetchListData: React.PropTypes.func,
  segment: React.PropTypes.string,
  listData: React.PropTypes.arrayOf(React.PropTypes.object),
  listDataLoaded: React.PropTypes.bool,

};

export default MetricsList;
