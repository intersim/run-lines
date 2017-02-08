import { combineReducers } from 'redux';
import currentPlay from './play';
import { currentLine, isListening, isSpeaking, voices } from './line';
import { currentPlayCharacters as characters, currentCharacter } from './characters';
import currentScene from './scenes';
import currentAct from './acts';

/**
 * @param {Object} currentPlay
 * @param {string} currentPlay.play_name
 * @param {Object} currentPlay.acts
 * @param {number} currentAct
 * @param {Object} currentScene
 * @param {number} currentScene.num
 * @param {Object[]} currentScene.lines
 * @param {string[]} characters
 * @param {string} currentCharacter
 * @param {Object} currentLine
 * @param {boolean} isListening
 * @param {boolean} isSpeaking
 */

const rootReducer = combineReducers({
  currentPlay,
  currentAct,
  currentScene,
	characters,
  currentCharacter,
  currentLine,
	isListening,
	isSpeaking,
  voices
});

export default rootReducer;
