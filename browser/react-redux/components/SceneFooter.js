import React, { Component } from 'react';

const SceneFooter = props => (
  <div className="flex flex-justify">
    <button onClick={() => console.log("prev")} className="btn button-narrow">
      <i className="fa fa-chevron-left"></i>
      Prev Scene
    </ button>
    <button onClick={() => console.log("next")} className="btn button-narrow">
      Next Scene
      <i className="fa fa-chevron-right"></i>
    </ button>
  </div>
)

export default SceneFooter;
