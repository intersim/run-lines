import React, { Component } from 'react';
import plays from '../../../data/toc.json';

const PlaySelector = props => (
	<form className="mt1" onSubmit={props.handleSubmit}>
	<select onChange={props.handleChange}>
		{ plays.map((play, i) => <option key={i} value={play}>{play.replace(/-/g, " ")}</option>) };
	</select>
	<button type="submit" className="btn btn-outline ml1">Go</button>
	</form>
);

export default PlaySelector;