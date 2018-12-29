import {TopBar} from '../TopBar';

import renderer from 'react-test-renderer';

import React from 'react';

test('Renders an empty top bar', () => {
  const component = renderer.create(
    <TopBar/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders a top bar with content on the left side', () => {
  const component = renderer.create(
    <TopBar left="Test"/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders a top bar with content on the right side', () => {
  const component = renderer.create(
    <TopBar right="Test"/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders a top bar with content on the left and right side', () => {
  const component = renderer.create(
      <TopBar left="Test"
              right="Test"/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
