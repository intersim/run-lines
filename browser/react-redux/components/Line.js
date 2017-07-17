import React, { Component } from 'react';

class Line extends Component {
	constructor() {
		super();
		this.state = {
			isHovering: false
		};
	}

	render() {
	const { line, currentLine, currentScene, isListening, isSpeaking, toggleLine, listenToLine } = this.props;

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
      onClick={() => toggleLine(line, currentScene.lines, isSpeaking)}
      onMouseEnter={e => this.setState({ isHovering: true })}
      onMouseLeave={e => this.setState({ isHovering: false })}
		>
			{ isStageDirection ? null : `${line.speaker}: `}{line.text_entry}
		</p>)
	}
}


export default Line;
