/* ========== CONSTANTS ========== */
const START_SPEAKING = 'START_SPEAKING';
const STOP_SPEAKING = 'STOP_SPEAKING';
const TOGGLE_SPEAKING = 'TOGGLE_SPEAKING';
const SET_VOICES = 'SET_VOICES';

/* ========== HELPERS ========== */
import { getNextLine } from './utils'

/* ========== ACTION CREATORS ========== */
export const startSpeaking = () => ({
	type: START_SPEAKING
})

export const stopSpeaking = () => ({
	type: STOP_SPEAKING
})

export const setVoices = voices => ({
	type: SET_VOICES,
	voices
})

/* ========== ASYNC ========== */
import { setCurrentLine } from './lines';
import { listenToLine } from './listening';

// get voices
export const getVoices = () => {
	return dispatch => {
		const voices = {};
		speechSynthesis.getVoices()
			.filter(v => v.lang.includes('en-GB'))
			.forEach(v => {
				if (v.voiceURI.toLowerCase().includes("female")) voices["female"] = v;
				if (v.voiceURI.toLowerCase().includes("male")) voices["male"] = v;
			});

		dispatch(setVoices(voices));
	}
}

// For saying one line:
const femaleCharacters = require('../../../data/characters/female-characters');

export const sayLine = (line, scene) => {
	return (dispatch, getState) => {
		dispatch(setCurrentLine(line));

		const { currentCharacter } = getState();
		const utterThis = new SpeechSynthesisUtterance(line.text_entry);
		// Storing in global variable to avoid a Chrome issue (https://bugs.chromium.org/p/chromium/issues/detail?id=509488#c11)
		window.utterances = [];

		const isFemaleCharacter = femaleCharacters.includes(line.speaker.toUpperCase());
		const isStageDirection = line.line_number.split('.')[2] === '0';

		// set voice
		const { voices } = getState();
		if (isFemaleCharacter && !isStageDirection) utterThis.voice = voices["female"];
		// else if (!line.speaker || !isStageDirection) utterThis.voice = voices["male"];
		else { utterThis.voice = voices["male"]; }

		const nextLine = getNextLine(line, scene);

		// If the next line should be said by the app user, then listen; otherwise, keep saying the next lines
		utterThis.onend = e => {
			window.utterances.pop();
			if (!getState().isSpeaking) return;
			if (!nextLine) {
				dispatch(stopSpeaking());
				return;
			}

			const isStageDirection = nextLine.line_number.split('.')[2] === '0';

			if (nextLine.speaker.toLowerCase() == currentCharacter.toLowerCase() && !isStageDirection) {
				dispatch(listenToLine(nextLine, scene, getState().isListening))
			}
			else if (!line.line_number || !nextLine.line_number || line.speaker.toLowerCase() !== nextLine.speaker.toLowerCase() || line.speaker.toLowerCase() === nextLine.speaker.toLowerCase() || isStageDirection) {
				dispatch(sayLine(nextLine, scene))
			}
		}

		utterThis.onerror = e => console.error(`There was a SpeechSynthesis error: ${JSON.stringify(e)}`)

		dispatch(startSpeaking());
		window.utterances.push(utterThis);
		window.speechSynthesis.speak(utterThis);
	}
}

export const stopSpeakingLine = () => {
	return dispatch => {
		window.speechSynthesis.cancel();
		dispatch(stopSpeaking());
	}
}


