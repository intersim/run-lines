import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './react/Routes';

import { Provider } from 'react-redux';
import reducer from './react/reducers';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const store = createStore(
	reducer, 
	applyMiddleware(
    thunkMiddleware,
    createLogger({collapsed: true})
  )
);

ReactDOM.render(
	<Provider store={store}>
	  <Routes />
  </Provider>,
  document.getElementById('app')
);