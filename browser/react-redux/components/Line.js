import React, { Component } from 'react';

const Line = props => {
	const line = props.line;
	const currentLine = props.currentLine;
	const play = props.currentPlay;
	const isListening = props.isListening;
	const isSpeaking = props.isSpeaking;

	const toggleLine = props.toggleLine;
	const listenToLine = props.listenToLine;

	const isStageDirection = line.line_number.split('.')[2] === '0'

	return (
		<p
			className={(isStageDirection ? 'italic' : null) + ' ' + (line.line_id === currentLine.line_id ? 'bg-silver' : null) + ' p1 mb0'}
      onClick={() => toggleLine(line, play, isSpeaking)}
			id={line.text_entry && line.text_entry.includes("ACT") ? line.text_entry.slice(4) : null}
		>
			{ isStageDirection ? null : `${line.speaker}: `}{line.text_entry}
		</p>)
}

		// onClick={() => listenToLine(line, isListening)}

export default Line;
