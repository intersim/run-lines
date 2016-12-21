import { combineReducers } from 'redux';
import currentPlay from './play';
import currentLine from './line';

/*
	play
	line

	other...
	character
	user
*/


const rootReducer = combineReducers({
	currentPlay,
	currentLine
});

export default rootReducer;