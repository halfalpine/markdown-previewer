import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import previewer from './reducers';
import './index.css';
import Previewer from './containers';
// import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
