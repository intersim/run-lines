/* ========== CONSTANTS ========== */
const START_SPEAKING = 'START_SPEAKING';
const STOP_SPEAKING = 'STOP_SPEAKING';
const TOGGLE_SPEAKING = 'TOGGLE_SPEAKING';

/* ========== HELPERS ========== */
import { getNextLine } from './utils'

/* ========== ACTION CREATORS ========== */
export const startSpeaking = () => ({
	type: START_SPEAKING
})

export const stopSpeaking = () => ({
	type: STOP_SPEAKING
})

/* ========== ASYNC ========== */
import { setCurrentLine } from './lines';
import { listenToLine } from './listening';

// For saying one line:
export const sayLine = (line, scene) => {
	return (dispatch, getState) => {
		dispatch(setCurrentLine(line));
		dispatch(startSpeaking());

		const { currentCharacter } = getState();
		const utterThis = new SpeechSynthesisUtterance(line.text_entry);
		const nextLine = getNextLine(line, scene);

		// If the next line should be said by the app user, then listen; otherwise, keep saying the next lines
		utterThis.onend = e => {
			if (!getState().isSpeaking) return;
			if (!nextLine) return;

			if (nextLine.speaker.toLowerCase() == currentCharacter.toLowerCase()) {
				console.log("now it's your turn to speak!")
				dispatch(listenToLine(nextLine, scene))	
			}
			else if (!line.line_number || !nextLine.line_number || line.speaker.toLowerCase() !== nextLine.speaker.toLowerCase() || line.speaker.toLowerCase() === nextLine.speaker.toLowerCase()) {
				dispatch(sayLine(nextLine, scene))
			}
		}
		
		window.speechSynthesis.speak(utterThis);
	}
}

export const stopSpeakingLine = () => {
	return dispatch => {
		window.speechSynthesis.cancel();
		dispatch(stopSpeaking());
	}
}


