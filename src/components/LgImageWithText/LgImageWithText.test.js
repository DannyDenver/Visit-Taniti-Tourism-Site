import React from 'react';
import { shallow } from 'enzyme';
import LgImageWithText from './LgImageWithText';

describe('LgImageWithText', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<LgImageWithText />);
    expect(wrapper).toMatchSnapshot();
  });
});
