import React from 'react';
import { render } from 'react-dom';
import App from './app';
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

render(
	App,
  document.getElementById('app')
);