import React, { Component } from 'react';

import SceneContainer from '../containers/SceneContainer';
import LineContainer from '../containers/LineContainer';
import PlaySelectContainer from '../containers/PlaySelectContainer';
import ActSelectContainer from '../containers/ActSelectContainer';
import CharacterSelectContainer from '../containers/CharacterSelectContainer';

const App = props => {
	const currentPlay = props.currentPlay;
	const playName = currentPlay.length ? currentPlay[0].play_name : null;

	return (
		<div>
			<PlaySelectContainer />
			<ActSelectContainer />
			<CharacterSelectContainer />
			<div>
			<h1>{playName}</h1>
			</div>
			  { props.children }
		</div>
	)
}


export default App;
