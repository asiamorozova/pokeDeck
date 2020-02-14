import React from 'react';
import renderer from 'react-test-renderer';
import App from './App.js';

test('This render App', () => {
  const app = renderer
    .create(<App />)
    .toJSON();
  expect(app).toMatchSnapshot();
});
