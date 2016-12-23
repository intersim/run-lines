import { combineReducers } from 'redux';
import currentPlay from './play';
import currentLine from './line';
import characters from './characters';

/*
	play
	line

	other...
	character
	user
*/


const rootReducer = combineReducers({
	currentPlay,
	currentLine,
	characters
});

export default rootReducer;