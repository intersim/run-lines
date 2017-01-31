import Line from '../components/Line';
import { connect } from 'react-redux';
import { sayLine, stopSpeakingLine } from '../actions/speaking';
import { listenToLine } from '../actions/listening';
import { getNextLine } from '../actions/utils';

const mapStateToProps = ({ currentPlay, currentLine, isListening, isSpeaking }, { line }) => {
	return {
		currentPlay,
		currentLine,
		line,
		isListening,
		isSpeaking
	}
};

const mapDispatchToProps = dispatch => ({
	toggleLine(line, play, isSpeaking) {
		if (!isSpeaking) dispatch(sayLine(line, play));
		else dispatch(stopSpeakingLine());
	},

	listenToLine(line, isListening) {
		dispatch(listenToLine(line, isListening));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Line);