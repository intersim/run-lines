import { sayLine } from './speaking';
import { setCurrentLine } from './lines';

/* ========== CONSTANTS ========== */
const START_LISTENING = 'START_LISTENING';
const STOP_LISTENING = 'STOP_LISTENING';

/* ========== HELPERS ========== */
import { getNextLine, getNextSpeakerLine } from './utils'

/* ========== ACTION CREATORS ========== */
export const startListening = () => ({
	type: START_LISTENING
})

export const stopListening = () => ({
	type: STOP_LISTENING
})

/* ========== ASYNC ========== */
export const listenToLine = (line, scene, isListening) => {
	return (dispatch, getState) => {
		dispatch(setCurrentLine(line));

		const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;

		if (!SpeechRecognition) {
			if (isListening) {
				dispatch(stopListening());
				dispatch(setCurrentLine({}));
			}
			else dispatch(startListening());
			return console.error("No Speech Recognition support");
		}

		const recognition = new SpeechRecognition();

		if (window.recognitions && window.recognitions.length) {
			recognitions[0].stop();
			recognitions.pop();
		} else {
			window.recognitions = [];
		}

	  recognition.continuous = true;
	  recognition.interimResults = true;

	  recognition.onerror = e => console.error("Error: ", e.error)

	  recognition.onresult = e => {
	  	if (e.results[0].isFinal) {
	  		dispatch(stopListening());
	  		recognition.stop()
	  		window.recognitions.pop();
	  		const nextLine = getNextSpeakerLine(line, scene)
	  		dispatch(sayLine(nextLine, scene))
	  	}
  	}

		window.recognitions.push(recognition);

		if (isListening) {
			dispatch(stopListening());
			dispatch(setCurrentLine({}));
			recognition.stop();
		}

		else {
			dispatch(startListening());
			recognition.start();
		}
	}
}
