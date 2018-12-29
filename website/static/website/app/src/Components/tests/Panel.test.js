import {Panel} from '../Panel';

import renderer from 'react-test-renderer';

import React from 'react';

test('Renders a panel', () => {
  const component = renderer.create(
    <Panel>Test</Panel>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
