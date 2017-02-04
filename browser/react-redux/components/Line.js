import React, { Component } from 'react';

const Line = ({ line, currentLine, currentScene, isListening, isSpeaking, toggleLine, listenToLine }) => {
	const isStageDirection = line.line_number.split('.')[2] === '0'

	return (
		<p
			className={(isStageDirection ? 'italic' : null) + ' ' + (line.line_id === currentLine.line_id ? 'bg-silver' : null) + ' p1 mb0'}
      onClick={() => toggleLine(line, currentScene.lines, isSpeaking)}
			id={line.text_entry && line.text_entry.includes("ACT") ? line.text_entry.slice(4) : null}
		>
			{ isStageDirection ? null : `${line.speaker}: `}{line.text_entry}
		</p>)
}

export default Line;
