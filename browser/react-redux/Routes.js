import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import AppContainer from './containers/AppContainer'

const Routes = ({ fetchInitialData }) => (
	<Router history={browserHistory}>
		<Route path="/" component={AppContainer} onEnter={fetchInitialData} />
	</Router>
)

import { fetchPlay, loadPlay, fetchCharacters } from './actions';
import testScene from '../../data/twelfth-night-s1.js';

const mapDispatchToProps = dispatch => ({
	// fetchInitialData() {
	// 	dispatch(fetchPlay('Henry-IV'));
	// 	dispatch(fetchCharacters('Henry-IV'));
	// }
	// // only fetching one scene now for debugging purposes
	fetchInitialData() {
		dispatch(loadPlay(testScene));
		dispatch(fetchCharacters('Twelfth-Night'));
	}
})

export default connect(null, mapDispatchToProps)(Routes);

