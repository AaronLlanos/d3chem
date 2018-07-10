import React from 'react';
import ReactDOM from 'react-dom';
import Canvas from './Canvas';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Canvas />, div);
  ReactDOM.unmountComponentAtNode(div);
});
