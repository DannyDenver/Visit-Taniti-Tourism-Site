import React from 'react';
import { shallow } from 'enzyme';
import AdventurePage from './AdventurePage';

describe('AdventurePage', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<AdventurePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
