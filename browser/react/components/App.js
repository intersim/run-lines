import React, { Component } from 'react';
import TwelfthNight from './twelfth-night-s1';

class App extends Component {
	constructor(){
		super();
		this.state = {
			play: TwelfthNight
		}
	}
	render() {
		return (
			<div>
			{this.state.play.map(line => <p key={line.line_id}>{line.speaker}: {line.text_entry}</p>)}
			</div>
		)
	}
}

export default App;