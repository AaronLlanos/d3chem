import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import './App.css';
import DrawPalette from '../DrawPalette/DrawPalette';
import Canvas from '../Canvas/Canvas';

const store = createStore(rootReducer)

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <DrawPalette />
          <Canvas />
        </div>
      </Provider>
    );
  }
}

export default App;
