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
import { fetchCharacters, setCurrentCharacter } from './actions/characters';
import { fetchScene } from './actions/scenes';

const mapDispatchToProps = dispatch => ({
	fetchInitialData() {
		dispatch(fetchPlay('Henry-IV'));
    dispatch(fetchScene('Henry-IV', 1, 1));
		dispatch(fetchCharacters('Henry-IV'));
		dispatch(setCurrentCharacter('Archbishop-Of-York'));
	}
})

export default connect(null, mapDispatchToProps)(Routes);

