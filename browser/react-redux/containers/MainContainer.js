import Main from '../components/Main';
import { connect } from 'react-redux';

const mapStateToProps = ({ currentPlay, currentAct, currentScene }) => ({
	currentPlay,
  currentAct,
  currentScene
});

const MainContainer = connect(mapStateToProps)(Main);

export default MainContainer;
