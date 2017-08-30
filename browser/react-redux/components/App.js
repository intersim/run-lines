import React, { Component } from 'react';

import LineContainer from '../containers/LineContainer';
import PlaySelectContainer from '../containers/PlaySelectContainer';
import CharacterSelectContainer from '../containers/CharacterSelectContainer';
import SceneContainer from '../containers/SceneContainer';
import BugReportContainer from '../containers/BugReportContainer';

import { Link } from 'react-router';

const App = ({ currentPlay, currentAct, currentScene }) => (
		<div className="mt2 container">
			<div id="main-select" className="p1 mb1">
				<PlaySelectContainer />
				<CharacterSelectContainer />
			</div>
      <h1 className="m0 p1 center">{ currentPlay.play_name && currentPlay.play_name.split("-").join(" ") }</h1>
      <h2 className="m0 p1 center">{ !+currentAct ? 'Induction' : `Act ${currentAct}` }</h2>
			<SceneContainer />
      <div className="flex flex-justify-center mt2">
      <i className="fa fa-ellipse-h"></i>
      <Link to="/bug-report" id="feedback-btn" className="p1 mt1">Give Feedback</Link>
      </div>
		</div>
	)

export default App;
