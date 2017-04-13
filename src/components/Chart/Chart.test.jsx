import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Chart from './Chart';
import Axis from './components/Axis/Axis';
import Grid from './components/Grid/Grid';
import Dots from './components/Dots/Dots';

describe('<Chart />', () => {
  it('renders two <Axis /> components', () => {
    const wrapper = shallow(<Chart />);
    expect(wrapper.find(Axis)).to.have.length(2);
  });

  it('renders one <Grid /> component', () => {
    const wrapper = shallow(<Chart />);
    expect(wrapper.find(Grid)).to.have.length(1);
  });

  it('renders one <Dots /> component', () => {
    const wrapper = shallow(<Chart />);
    expect(wrapper.find(Dots)).to.have.length(1);
  });
});
