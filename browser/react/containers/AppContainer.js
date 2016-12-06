import React, { Component } from 'react';
import play from '../../../data/A-Midsummer-nights-dream.json';
import Line from '../components/Line';
import PlaySelectContainer from './PlaySelectContainer';

class App extends Component {
	constructor(){
		super();
		this.state = {
			currentPlay: play,
			currentLine: {}
		}

		this.setCurrentLine = this.setCurrentLine.bind(this);
		this.sayLine = this.sayLine.bind(this);
		this.startPlayingFromLine = this.startPlayingFromLine.bind(this);
		this.setCurrentPlay = this.setCurrentPlay.bind(this);
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

	setCurrentPlay(play) {
		fetch(`/api/${play}`)
		.then (res => res.json())
		.then(play => { 
			this.setState({ currentPlay: play });
		})
		.catch(err => console.error(err.stack));
	}

	render() {
		const currentPlay = this.state.currentPlay;
		const playName = currentPlay[0].play_name;
		return (
			<div><PlaySelectContainer setCurrentPlay={this.setCurrentPlay} />
			<div>
			<h1>{playName}</h1>
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

export default App;