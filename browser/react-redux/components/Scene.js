import React, { Component } from 'react';
import LineContainer from '../containers/LineContainer';

const Scene = props => {
  const currentPlay = props.currentPlay;

  return (
  <div>
    {currentPlay.map((line, i) => {
      line.index = i;
      return (
        <LineContainer
          key={line.line_id}
          line={line}
        />
      )})
    }
  </div>
)}

export default Scene;
