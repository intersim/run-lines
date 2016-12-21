// select out of all characters in the play

// make AJAX request to /plays/:playId/characters
import React, { Component } from 'react';

const CharacterSelect = props => (
	<form className="mt1 ml2 inline-block" onSubmit={props.handleSubmit}>
	<select onChange={props.handleChange}>
		<option>[[ CHARACTERS ]]</option>
	</select>
	{/* <button type="submit" className="btn btn-outline ml1">Go</button> */}
	</form>
);

export default CharacterSelect;