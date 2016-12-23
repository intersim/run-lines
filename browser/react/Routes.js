import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import AppContainer from './containers/AppContainer'

const Routes = ({ fetchInitialData }) => (
	<Router history={browserHistory}>
		<Route path="/" component={AppContainer} onEnter={fetchInitialData} />
	</Router>
)

import { fetchPlay, fetchCharacters } from './actions';

const mapDispatchToProps = dispatch => ({
	fetchInitialData() {
		dispatch(fetchPlay('Henry-IV'));
		dispatch(fetchCharacters('Henry-IV'));
	}
})

export default connect(null, mapDispatchToProps)(Routes);

