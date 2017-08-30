import React, { Component } from 'react';
import PlaySelectContainer from '../containers/PlaySelectContainer';
import CharacterSelectContainer from '../containers/CharacterSelectContainer';

const Navbar = () => (
  <div id="main-select" className="p1">
    <PlaySelectContainer />
    <CharacterSelectContainer />
    <hr />
  </div>
)

export default Navbar;


