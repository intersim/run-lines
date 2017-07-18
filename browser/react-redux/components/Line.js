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

	return (
		<p
			className={
				(isStageDirection ? 'italic' : null) + ' ' +
				((isCurrentLine && isSpeaking) || isHovering ? 'bg-darken-1' : null) + ' ' +
				(isCurrentSpeech && isListening ? 'yellow-highlight' : null) +
				' p1 mb0 clickable'}
      onClick={() => toggleLine(line, currentScene.lines, isSpeaking, isListening, currentLine, currentCharacter)}
      onMouseEnter={e => this.setIsHovering(true)}
      onMouseLeave={e => this.setIsHovering(false)}
		>
			{ isStageDirection ? null : `${line.speaker}: `}{line.text_entry}
		</p>)
	}
}


export default Line;
