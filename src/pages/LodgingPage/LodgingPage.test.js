import React from 'react';
import { shallow } from 'enzyme';
import LodgingPage from './LodgingPage';

describe('LodgingPage', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<LodgingPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
