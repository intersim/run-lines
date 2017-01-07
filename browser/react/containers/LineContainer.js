import Line from '../components/Line';
import { connect } from 'react-redux';
import { startPlayingFromLine, listenToLine, stopSpeakingLine } from '../actions';

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
		if (!isSpeaking) dispatch(startPlayingFromLine(line, play));
		else dispatch(stopSpeakingLine());
	},

	listenToLine(line, isListening) {
		dispatch(listenToLine(line, isListening));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Line);