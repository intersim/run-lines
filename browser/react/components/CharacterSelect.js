import React, { Component } from 'react';

const CharacterSelect = (props) => {
	console.log(props);

	return (
	<form className="mt1 ml2 inline-block" onSubmit={props.handleSubmit}>
	<select onChange={props.handleChange}>
		{
			props.characters ? 
			props.characters.map((c, i) => <option key={i} value={c}>{c}</option>) 
			: null 
		}
	</select>
	{/* <button type="submit" className="btn btn-outline ml1">Go</button> */}
	</form>
)};

export default CharacterSelect;