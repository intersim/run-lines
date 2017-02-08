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

		if (!webkitSpeechRecognition) return console.error('No Web Speech API support');

		if (window.recognitions && window.recognitions.length) {
			recognitions[0].stop();
			recognitions.pop();
		} else {
			window.recognitions = [];
		}

		const recognition = new webkitSpeechRecognition();
		window.recognitions.push(recognition);

	  recognition.continuous = true;
	  recognition.interimResults = true;

	  recognition.onerror = e => console.error("Error: ", e.error)

  	let lineLength = line.text_entry.length;

	  recognition.onresult = e => {
	  	const transcriptLength = e.results[0][0].transcript.length;
	  	let	nextLine = getNextLine(line, scene); 
  		const { currentCharacter } = getState();

	  	if (!e.results[0].isFinal && transcriptLength >= lineLength - 15 && transcriptLength <= lineLength + 15) {

	  		if (nextLine.speaker.toLowerCase() !== currentCharacter.toLowerCase()) {
	  			dispatch(stopListening());
					recognition.stop();
					window.recognitions.pop();
		  		const nextLine = getNextSpeakerLine(line, scene)
		  		dispatch(sayLine(nextLine, scene))
	  		} else {
		  		// console.log("You said: ", e.results[0][0].transcript);
		  		dispatch(stopListening());
		  		recognition.stop();
		  		dispatch(listenToLine(nextLine, scene, false));
	  		}
	  	}

	  	// if (e.results[0].isFinal) {
	  	// 	// To get transcript of what user said:
	  	// 	dispatch(stopListening());
	  	// 	recognition.stop()
	  	// 	window.recognitions.pop();
	  	// 	const nextLine = getNextSpeakerLine(line, scene)
	  	// 	dispatch(sayLine(nextLine, scene))
	  	// }
  	}

		// if (isListening) {
		// 	dispatch(stopListening());
		// 	recognition.stop();
		// }

		// else {
		dispatch(startListening());
		recognition.start();
		// }
	}
}