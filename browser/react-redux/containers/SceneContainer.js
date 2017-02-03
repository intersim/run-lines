import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scene from '../components/Scene';

const mapStateToProps = ({ currentScene }) => ({ currentScene });

// const mapDispatchToProps = () => {};

export default connect(mapStateToProps, null)(Scene);
