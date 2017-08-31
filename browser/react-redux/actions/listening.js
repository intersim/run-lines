import { sayLine } from './speaking';
import { setCurrentLine, clearCurrentLine } from './lines';

/* ========== CONSTANTS ========== */
const START_LISTENING = 'START_LISTENING';
const STOP_LISTENING = 'STOP_LISTENING';

/* ========== HELPERS ========== */
import { getNextLine, getNextSpeakerLine, detectSpeechRecognitionSupport, onRecognitionResult } from './utils'

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

		// detect browser speech recognition support
		const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;

		// if there's no speech recognition support, short-circuit and clear out state
		if (!SpeechRecognition) {
			if (isListening) {
				dispatch(stopListening());
				dispatch(clearCurrentLine());
			}
			else dispatch(startListening());
			return console.error("No Speech Recognition support");
		}

		const recognition = new SpeechRecognition();

		// if there's a recognition already in our global storage array, stop that recognition and remove it from the array
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

  	// store new recognitions in a global recognitions array; hack to work around a Chrome bug that was garbage-collecting recognitions early
		window.recognitions.push(recognition);

		// if the browser is already listening to a line, stop it
		if (isListening) {
			dispatch(stopListening());
			dispatch(setCurrentLine({}));
			recognition.stop();
		}

		// otherwise, it's time to start listening to our user
		else {
			dispatch(startListening());
			recognition.start();
		}
	}
}
