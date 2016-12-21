import React, { Component } from 'react';
const acts = ['I', 'II', 'III', 'IV', 'V'];

const ActSelect = props => (
	<select className="ml2 inline-block" onChange={props.handleChange}>
		{ acts.map((num, i) => <option key={i} value={num}>Act {num}</option>) };
	</select>
);

export default ActSelect;