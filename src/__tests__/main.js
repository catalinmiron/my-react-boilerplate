import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../main';

test('Main', () => {
  const tree = renderer.create(<Main />).toJSON();

  expect(tree).toMatchSnapshot();
});
