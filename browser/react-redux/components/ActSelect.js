import React, { Component } from 'react';

const ActSelect = ({ acts, handleChange, selectedAct }) => (
	<select id="act-select" onChange={handleChange} value={selectedAct} >
		{ acts.map((num, i) => <option key={i} value={num}>
        { !+num ? 'Induction' : `Act ${num}` }
      </option>)
    };
	</select>
);

export default ActSelect;
