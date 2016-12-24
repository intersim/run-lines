import Line from '../components/Line';
import { connect } from 'react-redux';
import { startPlayingFromLine, listenToLine } from '../actions';

const mapStateToProps = ({ currentPlay, currentLine, isListening }, { line }) => {
	return {
		currentPlay,
		currentLine,
		line,
		isListening
	}
};

const mapDispatchToProps = dispatch => ({
	startPlayingFromLine(line, play) {
		dispatch(startPlayingFromLine(line, play));
	},

	listenToLine(line, isListening) {
		dispatch(listenToLine(line, isListening));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Line);