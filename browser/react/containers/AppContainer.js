import React, { Component } from 'react';
import TwelfthNight from '../components/twelfth-night-s1';
import Line from '../components/Line';

class App extends Component {
	constructor(){
		super();
		this.state = {
			currentPlay: TwelfthNight,
			currentLine: {}
		}

		this.setCurrentLine = this.setCurrentLine.bind(this);
		this.sayLine = this.sayLine.bind(this);
		this.startPlayingFromLine = this.startPlayingFromLine.bind(this);
	}

	setCurrentLine(currentLine) {
		this.setState({ currentLine });
	}
	
	startPlayingFromLine(line, index) {
		this.setCurrentLine({ currentLine: line });
		this.sayLine(line);

		const play = this.state.currentPlay;
		const nextLineIdx = Number(line.index) + 1;
		const nextLine = this.state.currentPlay[nextLineIdx];
		const sameSpeaker = nextLine.speaker === line.speaker;
		const sameSpeech = nextLine.speech_number === line.speech_number;

		if (sameSpeaker && sameSpeech && line.line_number && nextLine.line_number) {
			nextLine.index = nextLineIdx;
			this.startPlayingFromLine(nextLine)
		};
	}

	sayLine(line){
		const synth = window.speechSynthesis;
		// // this is only saying one line...?
		// synth.onvoiceschanged = () => {
		// 	const voices = synth.getVoices().filter(voice => voice.lang === 'en-GB');
		// 	const Daniel = voices[0];
		// 	const ukFemale = voices[1];
		// 	const ukMale = voices[2];
		// }
		const utterThis = new SpeechSynthesisUtterance(line.text_entry);
		synth.speak(utterThis);
	}

	render() {
		return (
			<div>
			<h1>{this.state.currentPlay[0].play_name}</h1>
			{this.state.currentPlay.map((line, i) => {
				line = Object.assign({}, line, {index: i});
				return (
					<Line 
						key={line.line_id} 
						line={line} 
						startPlayingFromLine={this.startPlayingFromLine} 
					/>
				)})
			}
			</div>
		)
	}
}

export default App;