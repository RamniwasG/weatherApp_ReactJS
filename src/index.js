import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPropmise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(ReduxPropmise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
