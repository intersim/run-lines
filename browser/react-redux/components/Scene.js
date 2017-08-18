import React, { Component } from 'react';
import LineContainer from '../containers/LineContainer';
import SceneFooterContainer from '../containers/SceneFooterContainer';

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
    <SceneFooterContainer />
  </div>
)

export default Scene;
