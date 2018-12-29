import {Button} from '../Button';

import renderer from 'react-test-renderer';

import React from 'react';

test('Renders a round button', () => {
  const component = renderer.create(
    <Button type="round"/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders a basic button', () => {
  const component = renderer.create(
    <Button type="basic"/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders a button without name or icon', () => {
  const component = renderer.create(
    <Button/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders a button with a name', () => {
  const component = renderer.create(
    <Button name="Test"/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders a button with an icon', () => {
  const component = renderer.create(
    <Button icon="close"/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders a button with a name and an icon', () => {
  const component = renderer.create(
      <Button name="Test"
              icon="close"/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
