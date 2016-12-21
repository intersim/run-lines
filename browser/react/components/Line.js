import React, { Component } from 'react';

const Line = props => {
	const line = props.line;
	const startPlayingFromLine = props.startPlayingFromLine;

	return (
		<p 
			className={line.line_number ? null : 'italic'} 
			onClick={() => startPlayingFromLine(line)}
			id={line.text_entry.includes("ACT") ? line.text_entry.slice(4) : null}
		>
			{line.line_number ? `${line.speaker}: ` : null}{line.text_entry}
		</p>)
}

export default Line;