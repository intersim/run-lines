import Line from '../components/Line';
import { connect } from 'react-redux';
import { startPlayingFromLine } from '../actions';

const mapStateToProps = ({ currentPlay, currentLine }, { line }) => {
	return {
		currentPlay,
		currentLine,
		line
	}
};

const mapDispatchToProps = dispatch => ({
	startPlayingFromLine(line, play) {
		dispatch(startPlayingFromLine(line, play));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Line);