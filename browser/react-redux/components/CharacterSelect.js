import React, { Component } from 'react';

const CharacterSelect = (props) => (
	<select id="character-select" onChange={props.handleChange}>
    <option value="">Choose a character&hellip;</option>
		{
			!props.characters.length ?
			<option>Loading...</option> : props.characters.map((c, i) => <option key={i} value={c}>{c}</option>)
		}
	</select>
);

export default CharacterSelect;
