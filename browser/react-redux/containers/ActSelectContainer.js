import React, { Component } from 'react';
import ActSelect from '../components/ActSelect';

class ActSelectContainer extends Component {
	constructor(){
		super();

		this.state = {
			selectedAct: 'I'
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		const selectedAct = e.target.value;
		this.setState({ selectedAct });
	}

	render(){
		return <ActSelect
			handleChange={this.handleChange}
			/>
	}
}

export default ActSelectContainer;
