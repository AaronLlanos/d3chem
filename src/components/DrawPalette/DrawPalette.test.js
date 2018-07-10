import React from 'react';
import ReactDOM from 'react-dom';
import DrawPalette from './DrawPalette';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DrawPalette />, div);
  ReactDOM.unmountComponentAtNode(div);
});
