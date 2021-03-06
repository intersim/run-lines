import React, { Component } from 'react';
import plays from '../../../data/plays/toc.json';

const PlaySelect = ({ handleChange, handleSubmit, selectedPlay }) => (
	<select id="play-select" value={selectedPlay} onChange={handleChange}>
		{ plays.map((play, i) => <option key={i} value={play}>{play.replace(/-/g, " ")}</option>) };
	</select>

);

export default PlaySelect;
