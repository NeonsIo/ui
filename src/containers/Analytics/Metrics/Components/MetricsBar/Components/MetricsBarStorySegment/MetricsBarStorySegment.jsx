import React, { PropTypes } from 'react';
import Modal from 'react-modal';
import Button from '../../../../../../../components/Button/Button';
import './MetricsBarStorySegment.css';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.90)',
  },
  content: {
    top: '10%',
    left: '30%',
    right: '30%',
    bottom: 'auto',
    background: '#f9f8f8',
    border: '2px solid #6b6b6b',
    borderRadius: '8px',
    transition: 'All 0.19s ease',
  },
};

class MetricsBarSegmentStory extends React.Component {
  constructor(props, state) {
    super(props, state);

    this.state = {
      isModalOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      isModalOpen: true,
    });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.saveBtn.style.float = 'right';
  }

  closeModal() {
    this.setState({
      isModalOpen: false,
    });
  }

  displayActiveLabel() {
    const { options, active } = this.props;
    return options.filter(option => option.value === active)[0].label;
  }

  renderModal() {
    return (
      <Modal
        isOpen={this.state.isModalOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="MetricsBarSegmentStory--content">
          <Button className="primary" text="Save" onClick={this.closeModal} />
          <Button className="secondary" text="Cancel" onClick={this.closeModal} />
        </div>
      </Modal>
    );
  }

  render() {
    return (
      <div className="MetricsBarSegmentStory" >
        <button className="MetricsBarSegmentStory--label" onClick={this.openModal} >
          {this.displayActiveLabel()}
        </button>
        {this.renderModal()}
      </div>
    );
  }
}

MetricsBarSegmentStory.defaultProps = {
  active: null,
  onChange: () => {},
  options: [],
};

MetricsBarSegmentStory.propTypes = {
  active: PropTypes.string,
  // onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
};

export default MetricsBarSegmentStory;
