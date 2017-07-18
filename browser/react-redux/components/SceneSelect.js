import React, { Component } from 'react';

/**
 * @param {number[]} scenes
 * @param {SceneSelectContainer~handleChange} cb - Called on
 * change.
 */
const SceneSelect = ({ scenes, handleChange, selectedScene }) => (
  <select id="scene-select" onChange={handleChange} value={selectedScene}>
    { scenes && scenes.map((num, i) => <option key={i} value={num}>Scene {num}</option>) };
  </select>
);

export default SceneSelect;
