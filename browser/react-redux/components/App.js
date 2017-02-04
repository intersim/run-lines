import React, { Component } from 'react';

import LineContainer from '../containers/LineContainer';
import PlaySelectContainer from '../containers/PlaySelectContainer';
import CharacterSelectContainer from '../containers/CharacterSelectContainer';
import SceneContainer from '../containers/SceneContainer';

const App = () => (
		<div className="container">
			<PlaySelectContainer />
			<CharacterSelectContainer />
			<SceneContainer />
		</div>
	)

export default App;
