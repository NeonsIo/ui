import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

it('simulates click events', () => {
  const handleClick = jest.fn();
  const wrapper = shallow(<Button className="primary" value="test" onClick={handleClick} />);

  wrapper.find('button').simulate('click');

  expect(handleClick.mock.instances.length).toBe(1);
});
