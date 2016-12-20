import React, { Component } from 'react';

import Line from '../components/Line';
import PlaySelectContainer from './PlaySelectContainer';

class App extends Component {
	render() {
		const currentPlay = this.props.currentPlay;
		const playName = currentPlay[0].play_name;
		const acts = ['I', 'II', 'III', 'IV', 'V'];

		return (
			<div><PlaySelectContainer />
			<div>
			<h1>{playName}</h1>
			{acts.map(num => <a href={`#${num}`} className='mr1' key={num}>ACT {num}</a>)}

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