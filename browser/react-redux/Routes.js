import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import AppContainer from './containers/AppContainer';

const Routes = ({ fetchInitialData }) => (
	<Router history={browserHistory}>
		<Route path="/" component={AppContainer} onEnter={fetchInitialData} />
	</Router>
)

import { fetchPlay, loadPlay } from './actions/plays';
import { fetchCharacters } from './actions/characters';
import { fetchScene } from './actions/scenes';
import { getVoices } from './actions/speaking';

const mapDispatchToProps = dispatch => ({
	fetchInitialData() {
    dispatch(fetchPlay('Twelfth-Night'));
    dispatch(fetchScene('Twelfth-Night', 1, 2));
    dispatch(fetchCharacters('Twelfth-Night'));
    speechSynthesis.onvoiceschanged = () => dispatch(getVoices());
	}
})

export default connect(null, mapDispatchToProps)(Routes);

