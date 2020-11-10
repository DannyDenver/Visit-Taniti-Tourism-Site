import React from 'react';
import { shallow } from 'enzyme';
import ThreeImages from './ThreeImages';

describe('ThreeImages', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ThreeImages />);
    expect(wrapper).toMatchSnapshot();
  });
});
