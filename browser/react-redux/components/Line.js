import React, { Component } from 'react';
import MobileDetect from 'mobile-detect';

class Line extends Component {
	constructor() {
		super();
		this.state = {
			isHovering: false,
			isMobile: false
		};

		this.setIsHovering = this.setIsHovering.bind(this);
	}

	componentDidMount() {
		const md = new MobileDetect(window.navigator.userAgent);
		if (md.mobile()) this.setState({ isMobile: true });
	}

	setIsHovering(bool) {
		const { isMobile } = this.state;
		if (!isMobile) this.setState({ isHovering: bool });
	}

	render() {
	const { line, currentLine, currentScene, isListening, isSpeaking, toggleLine, listenToLine, currentCharacter } = this.props;

	const { isHovering } = this.state;

	const isStageDirection = line.line_number.split('.')[2] === '0';
	const isCurrentLine = line.line_id === currentLine.line_id;
	const isCurrentSpeech = line.speech_number === currentLine.speech_number;
	const prevLine = currentScene.lines[line.index - 1];
	const isSameSpeaker = prevLine ? line.speaker === prevLine.speaker : false;

	return (
	        <div>
	        {
	        	isStageDirection || isSameSpeaker ?
	        	null :
	        	<p className="p1 mt1 mb0 bold">
			        {line.speaker}
		        </p>
		       }
	        <p
						className={
							(isStageDirection ? 'italic center ' : 'ml2 ') +
							((isCurrentLine && isSpeaking) || isHovering ? 'line-hover ' : '') +
							(isCurrentSpeech && isListening ? 'line-highlight ' : '') +
							'p1 mb0 clickable'}
			      onClick={() => toggleLine(line, currentScene.lines, isSpeaking, isListening, currentLine, currentCharacter)}
			      onMouseEnter={e => this.setIsHovering(true)}
			      onMouseLeave={e => this.setIsHovering(false)}
					>
						{line.text_entry}
					</p>
	        </div>
		)
	}
}


export default Line;
