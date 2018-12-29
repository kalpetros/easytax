import {Modal} from '../Modal';

import renderer from 'react-test-renderer';

import React from 'react';

test('Renders a modal', () => {
  const component = renderer.create(
    <Modal>Test</Modal>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
