import React, { Component } from 'react';
import PlaySelect from '../components/PlaySelect';

class PlaySelectContainer extends Component {
	constructor(){
		super();

		this.state = {
			selectedPlay: ''
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
		this.props.setCurrentPlay(this.state.selectedPlay);
	}

	render(){
		return <PlaySelect 
			handleChange={this.handleChange} 
			handleSubmit={this.handleSubmit}/>
	}
}

export default PlaySelectContainer;