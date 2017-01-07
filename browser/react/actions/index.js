/* ========== CONSTANTS ========== */
const LOAD_PLAY = 'LOAD_PLAY';
const LOAD_CHARACTERS = 'LOAD_CHARACTERS';
const SET_CURRENT_CHARACTER = 'SET_CURRENT_CHARACTER';
const SET_CURRENT_LINE = 'SET_CURRENT_LINE';
const START_LISTENING = 'START_LISTENING';
const STOP_LISTENING = 'STOP_LISTENING';
const START_SPEAKING = 'START_SPEAKING';
const STOP_SPEAKING = 'STOP_SPEAKING';
const TOGGLE_SPEAKING = 'TOGGLE_SPEAKING';

/* ========== ACTION CREATORS ========== */
export const loadPlay = play => ({ 
	type: LOAD_PLAY, 
	play 
});

export const loadCharacters = characters => ({
	type: LOAD_CHARACTERS,
	characters
});

export const setCurrentCharacter = character => ({
	type: SET_CURRENT_CHARACTER,
	character
})

export const setCurrentLine = line => ({
	type: SET_CURRENT_LINE,
	line
});

export const startListening = () => ({
	type: START_LISTENING
})

export const stopListening = () => ({
	type: STOP_LISTENING
})

export const startSpeaking = () => ({
	type: START_SPEAKING
})

export const stopSpeaking = () => ({
	type: STOP_SPEAKING
})

/* ========== ASYNC ========== */

export const fetchPlay = playName => {
	return dispatch => {
		fetch(`/api/plays/${playName}`)
		.then (res => res.json())
		.then(play => { 
			dispatch(loadPlay(play));
		})
		.catch(err => console.error(err.stack));
	}
};

export const fetchCharacters = playName => {
	return dispatch => {
		fetch(`/api/plays/${playName}/characters`)
		.then(res => res.json())
		.then(characters => {
			dispatch(loadCharacters(characters))
		})
		.catch(err => console.error(err.stack));
	}
}

export const sayLine = line => {
	return dispatch => {
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

		const utterThis = new SpeechSynthesisUtterance(line.text_entry);
		// E: Does this need to be global?
		window.speechSynthesis.speak(utterThis);
	}
}

export const stopSpeakingLine = () => {
	return dispatch => {
		window.speechSynthesis.cancel();

		dispatch(stopSpeaking());
	}
}
	
export const startPlayingFromLine = (line, play) => {
	return dispatch => {
		dispatch(sayLine(line));

		const nextLineIdx = Number(line.index) + 1;
		const nextLine = play[nextLineIdx];
		const sameSpeaker = nextLine.speaker === line.speaker;
		const sameSpeech = nextLine.speech_number === line.speech_number;

		if (sameSpeaker && sameSpeech && line.line_number && nextLine.line_number) {
			nextLine.index = nextLineIdx;
			dispatch(startPlayingFromLine(nextLine, play));
		};
	}
}

export const listenToLine = (line, isListening) => {

	return dispatch => {

		// if (!webkitSpeechRecognition) return console.error('No Web Speech API support');

		// var recognition = new webkitSpeechRecognition();
	 //  recognition.continuous = true;
	 //  recognition.interimResults = true;

	 //  recognition.onerror = function(event) {
	 //  	console.error("Error: ", event.error);
	 //  };

	 //  recognition.onresult = function(event) {
	 //  	if (!event.results[0].isFinal) console.log("Thinking...")
	 //  	if (event.results[0].isFinal) console.log(event.results[0][0].transcript);
  // 	}

		// if (isListening) {
		// 	dispatch(stopListening());
		// 	recognition.stop();
		// }

		// else {
		// 	dispatch(startListening());
		// 	recognition.start();
		// }
	}
}
