import React, { Component } from 'react';
import CharacterSelect from '../components/CharacterSelect';

class CharacterSelectForm extends Component {
	constructor(){
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		const selectedCharacter = e.target.value;
		this.props.setCurrentCharacter(selectedCharacter);
	}

	render(){
		return <CharacterSelect 
				handleChange={this.handleChange}
				characters={this.props.characters}
			/>
	}
}

// ========== REACT-REDUX ==========
import { connect } from 'react-redux';
import { fetchCharacters, setCurrentCharacter } from '../actions';

const mapStateToProps = ({ characters }, { handleChange }) => ({
	characters,
	handleChange
});

const mapDispatchToProps = dispatch => ({
	setCurrentCharacter(character) {
		dispatch(setCurrentCharacter(character));
	}
});

const CharacterSelectContainer = connect(mapStateToProps, mapDispatchToProps)(CharacterSelectForm);

export default CharacterSelectContainer;