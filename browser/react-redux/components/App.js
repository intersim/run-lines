import React, { Component } from 'react';

import LineContainer from '../containers/LineContainer';
import PlaySelectContainer from '../containers/PlaySelectContainer';
import CharacterSelectContainer from '../containers/CharacterSelectContainer';
import SceneContainer from '../containers/SceneContainer';
import BugReportContainer from '../containers/BugReportContainer';

import { Link } from 'react-router';

const App = ({ currentPlay, currentAct, currentScene }) => (
		<div className="mt2">
			<div>
				<PlaySelectContainer />
				<CharacterSelectContainer />
        <Link to="/bug-report" className="ml2">Give Feedback</Link>
			</div>
      <h1 className="m0 p1">{ currentPlay.play_name && currentPlay.play_name.split("-").join(" ") }</h1>
      <h2 className="m0 p1">Act { currentAct }</h2>
			<SceneContainer />
		</div>
	)

export default App;
