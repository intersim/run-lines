import React, { Component } from 'react';

const CharacterSelect = (props) => (
	<form className="mt1 ml2 inline-block">
	<select onChange={props.handleChange}>
		{
			!props.characters.length ? 
			<option>Loading...</option> : props.characters.map((c, i) => <option key={i} value={c}>{c}</option>)
		}
	</select>
	</form>
);

export default CharacterSelect;