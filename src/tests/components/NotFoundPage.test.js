import React from 'react';
import NotFoundPage from '../../components/NotFoundPage';
import { shallow } from 'enzyme';

test('should test NotFoundPage component', () => {
  const wrapper = shallow(<NotFoundPage/>);
  expect(wrapper).toMatchSnapshot();
})
