import React, { Component } from 'react';
import LineContainer from '../containers/LineContainer';

const Scene = ({ currentScene }) => (
  <div>
    {currentScene.lines.map((line, i) => {
      if (line.text_entry.includes("ACT")) return;
      line.index = i;
      return (
        <LineContainer
          key={line.line_id}
          line={line}
        />
      )})
    }
  </div>
)

export default Scene;
