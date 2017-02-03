import React, { Component } from 'react';

import LineContainer from '../containers/LineContainer';
import PlaySelectContainer from '../containers/PlaySelectContainer';
import ActSelectContainer from '../containers/ActSelectContainer';
import SceneSelectContainer from '../containers/SceneSelectContainer';
import CharacterSelectContainer from '../containers/CharacterSelectContainer';

const App = props => {
	const currentPlay = props.currentPlay;
	const playName = currentPlay.length ? currentPlay[0].play_name : null;

	return (
		<div>
			<PlaySelectContainer />
			<ActSelectContainer />
			<SceneSelectContainer />
			<CharacterSelectContainer />
			<div>
			<h1>{playName}</h1>
			</div>
			<div>
		    {currentPlay.map((line, i) => {
		      line.index = i;
		      return (
		        <LineContainer
		          key={line.line_id}
		          line={line}
		        />
		      )})
		    }
		  </div>
		</div>
	)
}


export default App;
