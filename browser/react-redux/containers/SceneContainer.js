import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scene from '../components/Scene';

const mapStateToProps = ({ currentScene }) => ({ currentScene });

export default connect(mapStateToProps, null)(Scene);
