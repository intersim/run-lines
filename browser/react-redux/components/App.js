import React, { Component } from 'react';

import LineContainer from '../containers/LineContainer';
import PlaySelectContainer from '../containers/PlaySelectContainer';
import CharacterSelectContainer from '../containers/CharacterSelectContainer';
import SceneContainer from '../containers/SceneContainer';
import BugReportContainer from '../containers/BugReportContainer';

import { Link } from 'react-router';

const App = () => (
		<div className="mt2">
			<div>
				<PlaySelectContainer />
				<CharacterSelectContainer />
        <Link to="/bug-report" className="ml2">Give Feedback</Link>
				</div>
			<SceneContainer />
		</div>
	)

export default App;
