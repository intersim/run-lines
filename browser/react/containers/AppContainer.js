import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => {
  return {
    currentPlay: state.currentPlay,
    currentLine: state.currentLine
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentLine (line) {
      return dispatch(setCurrentLine(line));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
