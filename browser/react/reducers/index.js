import { combineReducers } from 'redux';
import currentPlay from './play';
import currentLine, { isListening } from './line';
import { currentPlayCharacters as characters, currentCharacter } from './characters';

/*
	play
	line

	other...
	character
	user
*/


const rootReducer = combineReducers({
	currentCharacter,
	currentPlay,
	currentLine,
	characters,
	isListening
});

export default rootReducer;