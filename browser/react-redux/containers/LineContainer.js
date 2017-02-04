import Line from '../components/Line';
import { connect } from 'react-redux';
import { sayLine, stopSpeakingLine } from '../actions/speaking';
import { listenToLine } from '../actions/listening';
import { getNextLine } from '../actions/utils';

const mapStateToProps = ({ currentScene, currentLine, isListening, isSpeaking }, { line }) => {
	return {
		currentScene,
		currentLine,
		line,
		isListening,
		isSpeaking
	}
};

const mapDispatchToProps = dispatch => ({
	toggleLine(line, scene, isSpeaking) {
		if (!isSpeaking) dispatch(sayLine(line, scene));
		else dispatch(stopSpeakingLine());
	},

	listenToLine(line, isListening) {
		dispatch(listenToLine(line, isListening));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Line);