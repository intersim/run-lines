import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './react-redux/Routes';

import { Provider } from 'react-redux';
import reducer from './react-redux/reducers';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const store = createStore(
	reducer,
	applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

ReactDOM.render(
	<Provider store={store}>
	  <Routes />
  </Provider>,
  document.getElementById('app')
);
