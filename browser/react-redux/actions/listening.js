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

	return dispatch => {
		dispatch(setCurrentLine(line));

		if (!webkitSpeechRecognition) return console.error('No Web Speech API support');

		var recognition = new webkitSpeechRecognition();
	  recognition.continuous = true;
	  recognition.interimResults = true;

	  recognition.onerror = e => console.error("Error: ", e.error)

	  recognition.onresult = e => {
	  	if (e.results[0].isFinal) {
	  		// To get transcript of what user said:
	  		// console.log("You said: ", e.results[0][0].transcript);
	  		dispatch(stopListening());
	  		recognition.stop()
	  		const nextLine = getNextSpeakerLine(line, scene)
	  		dispatch(sayLine(nextLine, scene))
	  	}
  	}

		if (isListening) {
			dispatch(stopListening());
			recognition.stop();
		}

		else {
			dispatch(startListening());
			recognition.start();
		}
	}
}