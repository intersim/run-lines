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
export const sayLine = (line, nextLine, play) => {
	return (dispatch, getState) => {
		dispatch(setCurrentLine(line));
		dispatch(startSpeaking());

		// const synth = window.speechSynthesis;

		// // this is only saying one line...?
		// synth.onvoiceschanged = () => {
		// 	const voices = synth.getVoices().filter(voice => voice.lang === 'en-GB');
		// 	const Daniel = voices[0];
		// 	const ukFemale = voices[1];
		// 	const ukMale = voices[2];
		// }

		const { currentCharacter } = getState();

		const utterThis = new SpeechSynthesisUtterance(line.text_entry);

		// If the next line should be said by the app user, then listen; otherwise, keep saying the next lines
		utterThis.onend = e => {
			if (!getState().isSpeaking) return;
			if (nextLine.speaker.toLowerCase() == currentCharacter.toLowerCase()) {
				console.log("now it's your turn to speak!")
				dispatch(listenToLine(nextLine, play))	
			}
			else if (!line.line_number || !nextLine.line_number || line.speaker.toLowerCase() !== nextLine.speaker.toLowerCase() || line.speaker.toLowerCase() === nextLine.speaker.toLowerCase()) {
				dispatch(sayLine(nextLine, getNextLine(nextLine, play), play))
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

// EI: stop using this method?
// For saying a whole speech by one character
// export const startSpeakingFromLine = (line, play) => {
// 	return (dispatch, getState) => {
// 		const nextLine = getNextLine(line, play)

// 		dispatch(sayLine(line, nextLine, play));

// 		// if (!nextLine) return;

// 		// const sameSpeaker = nextLine.speaker === line.speaker;
// 		// const sameSpeech = nextLine.speech_number === line.speech_number;
// 		// const { currentCharacter } = getState()

// 		// if (sameSpeaker && sameSpeech && line.line_number && nextLine.line_number) {
// 		// 	dispatch(startSpeakingFromLine(nextLine, play));
// 		// }
// 	}
// }


