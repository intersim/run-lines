import React, { Component } from 'react';
import CharacterSelect from '../components/CharacterSelect';

class CharacterSelectForm extends Component {
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
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions';

const mapStateToProps = ({ characters }, { handleChange }) => {
	console.log(characters);
	return ({
		characters,
		handleChange
	});
}

const mapDispatchToProps = dispatch => ({
	loadCharacters (playName) {
		dispatch(fetchCharacters(playName))
	}
});

const CharacterSelectContainer = connect(mapStateToProps, mapDispatchToProps)(CharacterSelectForm);

export default CharacterSelectContainer;