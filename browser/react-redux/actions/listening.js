import { startSpeakingFromLine } from './speaking';

/* ========== CONSTANTS ========== */
const START_LISTENING = 'START_LISTENING';
const STOP_LISTENING = 'STOP_LISTENING';

/* ========== HELPERS ========== */
import { getNextSpeakerLine } from './utils'

/* ========== ACTION CREATORS ========== */
export const startListening = () => ({
	type: START_LISTENING
})

export const stopListening = () => ({
	type: STOP_LISTENING
})

/* ========== ASYNC ========== */
export const listenToLine = (line, play, isListening) => {

	return dispatch => {
		if (!webkitSpeechRecognition) return console.error('No Web Speech API support');

		var recognition = new webkitSpeechRecognition();
	  recognition.continuous = true;
	  recognition.interimResults = true;

	  recognition.onerror = e => console.error("Error: ", e.error)

	  recognition.onresult = e => {
	  	if (e.results[0].isFinal) {
	  		// // To get transcript of what user said:
	  		// console.log(e.results[0][0].transcript);
	  		console.log("you're done, time for the computer to speak")
	  		dispatch(stopListening());
	  		recognition.stop()
	  		const nextLine = getNextSpeakerLine(line, play)
	  		dispatch(startSpeakingFromLine(nextLine, play))
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