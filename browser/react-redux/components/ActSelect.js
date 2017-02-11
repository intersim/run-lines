import React, { Component } from 'react';

const ActSelect = ({ acts, handleChange, selectedAct }) => (
	<select className="ml2 inline-block" onChange={handleChange} value={selectedAct} >
		{ acts.map((num, i) => <option key={i} value={num}>Act {num}</option>) };
	</select>
);

export default ActSelect;
