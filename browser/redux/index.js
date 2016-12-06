// INITIAL STATE
export const initialState = {
	currentLine: {},
	currentPlay: []
};

// ACTION TYPES
const SET_CURRENT_LINE = "SET_CURRENT_LINE";

// ACTION CREATORS
const setCurrentLine = line => {type: SET_CURRENT_LINE, line};

// REDUCERS
function reducer (state = initialState, action) {
	switch (action.type) {
		case SET_CURRENT_LINE: 
			return Object.assign({}, state, {
				currentLine: action.line
			});
	}
}

import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

export const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger({collapsed: true})
  )
);
