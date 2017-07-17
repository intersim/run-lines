import Line from '../components/Line';
import { connect } from 'react-redux';
import { sayLine, stopSpeakingLine } from '../actions/speaking';
import { listenToLine } from '../actions/listening';
import { getNextSpeakerLine } from '../actions/utils';

const mapStateToProps = ({ currentScene, currentLine, isListening, isSpeaking, currentCharacter }, { line }) => {
	return {
		currentScene,
		currentLine,
		line,
		isListening,
		isSpeaking,
		currentCharacter
	}
};

const mapDispatchToProps = dispatch => ({
	toggleLine(line, scene, isSpeaking, isListening, currentLine, currentCharacter) {
		const isCurrentCharactersLine = line.speaker.toLowerCase() === currentCharacter.toLowerCase();
		const isCurrentLine = line.line_id === currentLine.line_id;

		console.log("clicked on:", line.text_entry);
		console.log("current line:", currentLine.text_entry);

		if (isListening && isCurrentCharactersLine) {
			dispatch(listenToLine(line, scene, true));
			dispatch(sayLine(getNextSpeakerLine(line, scene), scene))
		}
		else if (isListening && !isCurrentCharactersLine) {
			dispatch(listenToLine(line, scene, true));
			dispatch(sayLine(line, scene));
		}
		else if (!isListening && isCurrentCharactersLine) dispatch(listenToLine(line, scene, false));
		else if (isSpeaking && isCurrentLine) dispatch(stopSpeakingLine());
		else if (isSpeaking && !isCurrentLine) {
			dispatch(stopSpeakingLine());
			dispatch(sayLine(line, scene));
		}
		else if (!isSpeaking) dispatch(sayLine(line, scene));
		else dispatch(stopSpeakingLine());
	},

	listenToLine(line, isListening) {
		dispatch(listenToLine(line, isListening));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Line);
