import React from 'react';
import { shallow } from 'enzyme';
import CuisinePage from './CuisinePage';

describe('CuisinePage', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CuisinePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
