import React, { Component } from 'react';
import SceneSelect from '../components/SceneSelect';

class SceneSelectContainer extends Component {
  constructor(){
    super();

    this.state = {
      selectedScene: 1
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const selectedScene = e.target.value;
    this.setState({ selectedScene });
  }

  render(){
    return <SceneSelect
      handleChange={this.handleChange}
      />
  }
}

// ========== REACT-REDUX ==========
import { connect } from 'react-redux';

const mapStateToProps = ({ scenes }) => ({ scenes })

SceneSelectContainer = connect(mapStateToProps)(SceneSelectContainer);

export default SceneSelectContainer;
