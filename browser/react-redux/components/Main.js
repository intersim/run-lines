import React, { Component } from 'react';

import Navbar from './Navbar';
import SceneContainer from '../containers/SceneContainer';

import { Link } from 'react-router';

const Main = ({ currentPlay, currentAct, currentScene }) => (
	<div>
    <Navbar />
    <div className="container">
      <h1 className="m0 p1 center">{ currentPlay.play_name && currentPlay.play_name.split("-").join(" ") }</h1>
      <h2 className="m0 p1 center">{ !+currentAct ? 'Induction' : `Act ${currentAct}` }</h2>
  		<SceneContainer />
      <div className="flex flex-justify-center mt2">
        <Link to="/bug-report" id="feedback-btn" className="p1 bold crimson">Report A Bug</Link>
      </div>
    </div>
	</div>
);

export default Main;
