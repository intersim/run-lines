import React, { Component } from 'react';
import plays from '../../../data/plays/toc.json';

const PlaySelect = props => (
	<form className="mt1 inline-block" onSubmit={props.handleSubmit}>
	<select onChange={props.handleChange}>
		{ plays.map((play, i) => <option key={i} value={play}>{play.replace(/-/g, " ")}</option>) };
	</select>
	<button type="submit" className="btn btn-outline ml1">Go</button>
	</form>
);

export default PlaySelect;