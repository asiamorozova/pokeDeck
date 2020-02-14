import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header.js';

test('This render Header', () => {
    const header = renderer
        .create(<Header />)
        .toJSON();
    expect(header).toMatchSnapshot();
})