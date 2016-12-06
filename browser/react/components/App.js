import React, { Component } from 'react';
import TwelfthNight from './twelfth-night-s1';
import Line from './Line';

class App extends Component {
	constructor(){
		super();
		this.state = {
			currentPlay: TwelfthNight,
			currentLine: {}
		}

		console.log(this);
		this.setCurrentLine = this.setCurrentLine.bind(this);
		this.sayLine = this.sayLine.bind(this)
	}

	setCurrentLine(currentLine) {
		this.setState({ currentLine });
	}
	
	startPlayingFromLine(line) {
		console.log(this);
		this.setCurrentLine({ currentLine: line });

		// play line (text to speech)
		this.sayLine(line);

		const play = this.state.play;
		const nextLine = this.state.play[line.index + 1];

		console.log(nextLine);
		console.log(line);
		if (nextLine.speech_number === line.speech_number) this.startPlayingFromLine(nextLine);
		// if next line has same speech number, set as current line and play (recursion? while loop?)
		// if next line has diff. speech number, stop playing
	}

	sayLine(line){
		const synth = window.speechSynthesis;
		synth.onvoiceschanged = () => {
			const voices = synth.getVoices().filter(voice => voice.lang === 'en-GB');
			const Daniel = voices[0];
			const ukFemale = voices[1];
			const ukMale = voices[2];
			// this is only saying one line...?
			// check if next Line has same speaker and speech_number; if yes, keep speaking?
		}
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