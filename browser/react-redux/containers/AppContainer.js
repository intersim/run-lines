import App from '../components/App';
import { connect } from 'react-redux';

const mapStateToProps = ({ currentPlay, currentAct, currentScene }) => ({
	currentPlay,
  currentAct,
  currentScene
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
