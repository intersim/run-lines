import React, { Component } from 'react';

const ActSelect = props => {
  const acts = [1, 2, 3, 4, 5];

  return (
  	<select className="ml2 inline-block" onChange={props.handleChange}>
  		{ acts.map((num, i) => <option key={i} value={num}>Act {num}</option>) };
  	</select>
  );
}

export default ActSelect;
