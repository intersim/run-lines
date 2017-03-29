import React, { Component } from 'react';

const Line = ({ line, currentLine, currentScene, isListening, isSpeaking, toggleLine, listenToLine }) => {
	const isStageDirection = line.line_number.split('.')[2] === '0';
	const isCurrentLine = line.line_id === currentLine.line_id;
	const isCurrentSpeech = line.speech_number === currentLine.speech_number;

	return (
		<p
			className={
				(isStageDirection ? 'italic' : null) + ' ' +
				(isCurrentLine && isSpeaking ? 'bg-darken-1' : null) + ' ' +
				(isCurrentSpeech && isListening ? 'yellow-highlight' : null) +
				' p1 mb0 clickable'}
      onClick={() => toggleLine(line, currentScene.lines, isSpeaking)}
		>
			{ isStageDirection ? null : `${line.speaker}: `}{line.text_entry}
		</p>)
}

export default Line;
