import React, { Component } from 'react';

import Line from '../components/Line';
import PlaySelectContainer from './PlaySelectContainer';
import ActSelectContainer from './ActSelectContainer';

class App extends Component {
	render() {
		const currentPlay = this.props.currentPlay;
		const playName = currentPlay[0].play_name;

		return (
			<div><PlaySelectContainer /><ActSelectContainer />
			<div>
			<h1>{playName}</h1>
			</div>
			<div>
			{currentPlay.map((line, i) => {
				line.index = i;
				return (
					<Line 
						key={line.line_id} 
						line={line} 
						startPlayingFromLine={this.startPlayingFromLine} 
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