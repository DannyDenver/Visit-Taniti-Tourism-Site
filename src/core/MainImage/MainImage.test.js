import React from 'react';
import { shallow } from 'enzyme';
import MainImage from './MainImage';

describe('MainImage', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<MainImage />);
    expect(wrapper).toMatchSnapshot();
  });
});
