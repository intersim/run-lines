import { combineReducers } from 'redux';
import currentPlay from './play';
import { currentLine, isListening, isSpeaking } from './line';
import { currentPlayCharacters as characters, currentCharacter } from './characters';

const rootReducer = combineReducers({
	currentCharacter,
	currentPlay,
	currentLine,
	characters,
	isListening,
	isSpeaking
});

export default rootReducer;