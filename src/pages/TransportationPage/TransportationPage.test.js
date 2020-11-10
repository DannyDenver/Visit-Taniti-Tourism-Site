import React from 'react';
import { shallow } from 'enzyme';
import TransportationPage from './TransportationPage';

describe('TransportationPage', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<TransportationPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
