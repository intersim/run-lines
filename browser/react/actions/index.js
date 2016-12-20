const LOAD_PLAY = 'LOAD_PLAY';

export const loadPlay = play => ({ type: LOAD_PLAY, play });

const sayLine = (line) => {
	const synth = window.speechSynthesis;
	// // this is only saying one line...?
	// synth.onvoiceschanged = () => {
	// 	const voices = synth.getVoices().filter(voice => voice.lang === 'en-GB');
	// 	const Daniel = voices[0];
	// 	const ukFemale = voices[1];
	// 	const ukMale = voices[2];
	// }
	const utterThis = new SpeechSynthesisUtterance(line.text_entry);
	synth.speak(utterThis);
}

const setCurrentLine = (currentLine) => {
	this.setState({ currentLine });
}
	
const startPlayingFromLine = (line, index) => {
	this.setCurrentLine({ currentLine: line });
	this.sayLine(line);

	const play = this.state.currentPlay;
	const nextLineIdx = Number(line.index) + 1;
	const nextLine = this.state.currentPlay[nextLineIdx];
	const sameSpeaker = nextLine.speaker === line.speaker;
	const sameSpeech = nextLine.speech_number === line.speech_number;

	if (sameSpeaker && sameSpeech && line.line_number && nextLine.line_number) {
		nextLine.index = nextLineIdx;
		this.startPlayingFromLine(nextLine)
	};
}

// ========== ASYNC ==========

export const fetchPlay = playName => {
	return dispatch => {
		fetch(`/api/${playName}`)
		.then (res => res.json())
		.then(play => { 
			dispatch(loadPlay(play));
		})
		.catch(err => console.error(err.stack));
	}
};