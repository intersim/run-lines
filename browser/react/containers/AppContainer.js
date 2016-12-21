import React, { Component } from 'react';

import LineContainer from './LineContainer';
import PlaySelectContainer from './PlaySelectContainer';
import ActSelectContainer from './ActSelectContainer';
import CharacterSelectContainer from './CharacterSelectContainer';

class App extends Component {
	render() {
		const currentPlay = this.props.currentPlay;
		const playName = currentPlay[0].play_name;

		return (
			<div><PlaySelectContainer /><ActSelectContainer /><CharacterSelectContainer />
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
			</div></div>
		)
	}
}

// ========== REACT-REDUX ==========
import { connect } from 'react-redux';


const mapStateToProps = ({ currentPlay }) => ({
	currentPlay
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;