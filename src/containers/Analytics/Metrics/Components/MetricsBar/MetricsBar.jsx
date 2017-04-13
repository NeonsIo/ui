import React from 'react';
import Story from '../../../../../components/Story/Story';
import StoryDropdown from '../../../../../components/Story/Components/StoryDropdown/StoryDropdown';
import StoryText from '../../../../../components/Story/Components/StoryText/StoryText';
import './MetricsBar.css';

const MetricsBar = ({ segment, segments, setSegment }) => {
  const mappedSegmentOptions = segments.map(s => ({
    value: s.id,
    label: s.text,
  }));

  const mappedFromOptions = [{
    value: 'soon',
    label: '1 Apr',
  }];

  const mappedToOptions = [{
    value: 'soon',
    label: '30 Apr',
  }];

  return (
    <div className="MetricsBar">
      <Story>
        <StoryDropdown
          options={mappedSegmentOptions}
          onChange={setSegment}
          active={segment}
        />
        <StoryText text="from" />
        <StoryDropdown
          options={mappedFromOptions}
          onChange={() => {}}
          active="soon"
        />
        <StoryText text="to" />
        <StoryDropdown
          options={mappedToOptions}
          onChange={() => {}}
          active="soon"
        />
        <StoryText text="." />
      </Story>
    </div>
  );
};

MetricsBar.defaultProps = {
  segment: null,
  segments: [],
  setSegment: () => {},
};

MetricsBar.propTypes = {
  segment: React.PropTypes.string,
  segments: React.PropTypes.arrayOf(React.PropTypes.object),
  setSegment: React.PropTypes.func,
};

export default MetricsBar;
