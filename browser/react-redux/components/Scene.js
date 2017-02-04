import React, { Component } from 'react';
import LineContainer from '../containers/LineContainer';

const Scene = ({ currentScene }) => (
  <div>
    {currentScene.lines.map((line, i) => {
      line.index = i;
      return (
        <LineContainer
          key={line.line_id}
          line={line}
        />
      )})
    }
    {/* <div className="center mt2 mb3">
      <button className="btn btn-primary black bg-silver mr2">Prev Scene</ button>
      <button className="btn btn-primary black bg-silver ml2">Next Scene</ button>
    </div> */}
  </div>
)

export default Scene;
