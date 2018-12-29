import {Overlay} from '../Overlay';

import renderer from 'react-test-renderer';

import React from 'react';

test('Renders an overlay', () => {
  const component = renderer.create(
    <Overlay>Test</Overlay>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
