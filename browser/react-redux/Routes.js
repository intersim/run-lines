import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import AppContainer from './containers/AppContainer'

const Routes = ({ fetchInitialData }) => (
	<Router history={browserHistory}>
		<Route path="/" component={AppContainer} onEnter={fetchInitialData}>
		</ Route>

	</Router>
)

import { fetchPlay, loadPlay } from './actions/plays';
import { fetchCharacters, setCurrentCharacter } from './actions/characters';
import testScene from '../../data/twelfth-night-s1.js';

const mapDispatchToProps = dispatch => ({
	// fetchInitialData() {
	// 	dispatch(fetchPlay('Henry-IV'));
	// 	dispatch(fetchCharacters('Henry-IV'));
	// 	dispatch(setCurrentCharacter('Archbishop-Of-York'));
	// }
	// only fetching one scene now for debugging purposes
	fetchInitialData() {
		dispatch(loadPlay(testScene));
		dispatch(fetchCharacters('Twelfth-Night'));
	}
})

export default connect(null, mapDispatchToProps)(Routes);

