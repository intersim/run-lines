import React, { Component } from 'react';
import { connect } from 'react-redux';
import SceneFooter from '../components/SceneFooter';

const mapStateToProps = ({ currentPlay, currentScene }) => ({
  currentPlay,
  currentScene
})

const mapDispatchToProps = (dispatch, { currentPlay, currentScene }) => ({
  getNextScene() {
    dispatch(fetchScene(playName, actNum, sceneNum));
  },
});

export default connect()(SceneFooter);