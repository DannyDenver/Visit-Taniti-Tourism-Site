import React from 'react';
import { shallow } from 'enzyme';
import CulturePage from './CulturePage';

describe('CulturePage', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CulturePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
