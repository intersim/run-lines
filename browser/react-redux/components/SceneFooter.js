import React, { Component } from 'react';

const SceneFooter = props => (
  <div className="center mt2 mb3">
    <button onClick={() => console.log("prev")} className="btn btn-primary black bg-silver mr2">Prev Scene</ button>
    <button onClick={() => console.log("next")} className="btn btn-primary black bg-silver ml2">Next Scene</ button>
  </div>
)

export default SceneFooter;