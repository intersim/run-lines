import Line from '../components/Line';
import { connect } from 'react-redux';
import { startSpeakingFromLine,stopSpeakingLine } from '../actions/speaking';
import { listenToLine } from '../actions/listening';

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
		if (!isSpeaking) dispatch(startSpeakingFromLine(line, play));
		else dispatch(stopSpeakingLine());
	},

	listenToLine(line, isListening) {
		dispatch(listenToLine(line, isListening));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Line);