import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

class DevWrapper extends React.Component {
  render () {
    return <App />
  }
}
ReactDOM.render(<DevWrapper />, document.getElementById('root'));
registerServiceWorker();
