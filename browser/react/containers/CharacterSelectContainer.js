import React, { Component } from 'react';
import CharacterSelect from '../components/CharacterSelect';

class CharacterSelectContainer extends Component {
	constructor(){
		super();

		this.state = {
			selectedCharacter: ''
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		const selectedCharacter = e.target.value;
		console.log(selectedCharacter);
		this.setState({ selectedCharacter });
	}

	render(){
		return <CharacterSelect 
			handleChange={this.handleChange} 
			/>
	}
}

// ========== REACT-REDUX ==========
// import { connect } from 'react-redux';
// import { fetchCharacters } from '../actions';

// const mapDispatchToProps = dispatch => ({
// 	loadCharacters (playName) {
// 		dispatch(fetchCharacters(playName))
// 	}
// });

// CharacterSelectContainer = connect(null, mapDispatchToProps)(CharacterSelectContainer);

export default CharacterSelectContainer;