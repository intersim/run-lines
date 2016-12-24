import React, { Component } from 'react';

const Line = props => {
	const line = props.line;
	const play = props.currentPlay;
	const isListening = props.isListening;
	const isSpeaking = props.isSpeaking;

	const startPlayingFromLine = props.startPlayingFromLine;
	const listenToLine = props.listenToLine;

	return (
		<p 
			className={line.line_number ? null : 'italic'} 
      onClick={() => startPlayingFromLine(line, play, isSpeaking)}
			id={line.text_entry && line.text_entry.includes("ACT") ? line.text_entry.slice(4) : null}
		>
			{line.line_number ? `${line.speaker}: ` : null}{line.text_entry}
		</p>)
}

		// onClick={() => listenToLine(line, isListening)}

export default Line;