import React, { Component } from 'react';
import { connect } from 'react-redux';
import SceneFooter from '../components/SceneFooter';

const mapStateToProps = ({ currentPlay, currentScene }) => ({
  currentPlay,
  currentScene
})

const mapDispatchToProps = (dispatch, { currentPlay, currentAct, currentScene }) => ({
  getNextScene() {
    let nextSceneNum = currentScene.num + 1;
    let actNum = currentAct;

    if (nextSceneNum > currentPlay.acts[currentAct].length) {

    }

    dispatch(fetchScene(currentPlay.play_name, actNum, nextSceneNum));
  },
});

export default connect()(SceneFooter);