import {Card} from '../Card';

import renderer from 'react-test-renderer';

import React from 'react';

test('Renders a card with just a title', () => {
  const component = renderer.create(
      <Card title="Test"/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders a card with content', () => {
  const component = renderer.create(
      <Card>Test</Card>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders a card with a title and content', () => {
  const component = renderer.create(
      <Card title="Test">Test</Card>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
