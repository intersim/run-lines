import React, { Component } from 'react';
import PlaySelect from '../components/PlaySelect';

class PlaySelectContainer extends Component {
	constructor(){
		super();

		this.state = {
			selectedPlay: 'Henry-IV'
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e){
		const selectedPlay = e.target.value;
		this.setState({ selectedPlay });
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.loadPlay(this.state.selectedPlay);
	}

	render(){
		return <PlaySelect 
			handleChange={this.handleChange} 
			handleSubmit={this.handleSubmit}/>
	}
}

// ========== REACT-REDUX ==========
import { connect } from 'react-redux';
import { fetchPlay, fetchCharacters } from '../actions';

const mapDispatchToProps = dispatch => ({
	loadPlay (playName) {
		dispatch(fetchPlay(playName))
		dispatch(fetchCharacters(playName))
	}
});

PlaySelectContainer = connect(null, mapDispatchToProps)(PlaySelectContainer);

export default PlaySelectContainer;