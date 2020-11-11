import React from 'react';
import { shallow } from 'enzyme';
import TwoImages from './TwoImages';

describe('TwoImages', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<TwoImages />);
    expect(wrapper).toMatchSnapshot();
  });
});
