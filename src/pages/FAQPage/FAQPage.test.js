import React from 'react';
import { shallow } from 'enzyme';
import FAQPage from './FAQPage';

describe('FAQPage', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<FAQPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
