import React, { Component } from 'react';

/**
 * @param {number[]} scenes
 * @param {SceneSelectContainer~handleChange} cb - Called on
 * change.
 */
const SceneSelect = ({ scenes, handleChange }) => (
  <select className="ml2 inline-block" onChange={handleChange}>
    { scenes.map((num, i) => <option key={i} value={num}>Scene {num}</option>) };
  </select>
);

export default SceneSelect;
