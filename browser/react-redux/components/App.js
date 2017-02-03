import React, { Component } from 'react';

import LineContainer from '../containers/LineContainer';
import PlaySelectContainer from '../containers/PlaySelectContainer';
import CharacterSelectContainer from '../containers/CharacterSelectContainer';

const App = ({ currentPlay, currentScene }) => {
	const playName = currentPlay.length ? currentPlay[0].play_name : null;

	return (
		<div>
			<PlaySelectContainer />
			<CharacterSelectContainer />
			<div>
			<h1>{playName}</h1>
			</div>
			<div>
		    {currentScene.lines.map((line, i) => {
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
