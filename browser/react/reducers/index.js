import { combineReducers } from 'redux';
import currentPlay from './play';

/*
	play
	line

	other...
	character
	user
*/


const rootReducer = combineReducers({
	currentPlay
});

export default rootReducer;