import React from 'react';
import MetricsBarSegmentStory from './Components/MetricsBarStorySegment/MetricsBarStorySegment';
import Story from '../../../../../components/Story/Story';
import StoryDropdown from '../../../../../components/Story/Components/StoryDropdown/StoryDropdown';
import StoryText from '../../../../../components/Story/Components/StoryText/StoryText';
import './MetricsBar.css';

const MetricsBar = ({ segment, segments, setSegment }) => {
  const mappedSegmentOptions = segments.map(s => ({
    value: s.id,
    label: s.text,
  }));

  const mappedLocationOptions = [{
    value: 'world',
    label: 'all over the world',
  }];

  const mappedFromDateOptions = [{
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
        <MetricsBarSegmentStory
          options={mappedSegmentOptions}
          onChange={setSegment}
          active={segment}
        />
        <StoryText text="from" />
        <StoryDropdown
          options={mappedLocationOptions}
          onChange={() => {}}
          active="world"
        />
        <StoryText text="from" />
        <StoryDropdown
          options={mappedFromDateOptions}
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
