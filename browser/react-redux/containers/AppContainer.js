import App from '../components/App';
import { connect } from 'react-redux';

const mapStateToProps = ({ currentPlay }) => ({
	currentPlay
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;