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
		console.log(selectedAct);
		this.setState({ selectedAct });
	}

	render(){
		return <ActSelect 
			handleChange={this.handleChange} 
			/>
	}
}

// ========== REACT-REDUX ==========
// import { connect } from 'react-redux';
// import { fetchPlay } from '../actions';

// const mapDispatchToProps = dispatch => ({
// 	loadPlay (playName) {
// 		dispatch(fetchPlay(playName))
// 	}
// });

// ActSelectContainer = connect(null, mapDispatchToProps)(ActSelectContainer);

export default ActSelectContainer;