import React, { Component } from 'react';
import PlaySelect from '../components/PlaySelect';
import ActSelect from '../components/ActSelect';
import SceneSelect from '../components/SceneSelect';

class PlaySelectContainer extends Component {
	constructor(){
		super();

		this.state = {
			selectedPlay: 'Henry-IV',
			selectedAct: 1,
			selectedScene: 1
		}

		this.handlePlayChange = this.handlePlayChange.bind(this);
		this.handleActChange = this.handleActChange.bind(this);
		this.handleSceneChange = this.handleSceneChange.bind(this);
	}

	handlePlayChange(e){
		const selectedPlay = e.target.value;
		this.setState({ selectedPlay });
		this.props.loadPlay(selectedPlay);
		this.props.loadScene(selectedPlay, 1, 1);
	}

	handleActChange(e){
		const selectedAct = e.target.value;
		const { selectedPlay } = this.state;
		this.setState({ selectedAct });
		this.props.loadScene(selectedPlay, selectedAct, 1);
	}

	handleSceneChange(e){
		const { selectedPlay, selectedAct } = this.state;
		const selectedScene = e.target.value;
		this.setState({ selectedScene });
		this.props.loadScene(selectedPlay, selectedAct, selectedScene);
	}

	render(){
		const acts = this.props.currentPlay.acts;
		const scenes = this.props.currentPlay.acts && this.props.currentPlay.acts[this.state.selectedAct];

		return (
		        <form className="mt2 mb2 inline-block">
		        	<PlaySelect
								handleChange={this.handlePlayChange} />
							<ActSelect
								acts={acts}
								handleChange={this.handleActChange} />
							<SceneSelect
								scenes={scenes}
								handleChange={this.handleSceneChange} />
						</form>
		        )
	}
}

/* ========== REACT-REDUX ========== */
import { connect } from 'react-redux';
import { fetchPlay } from '../actions/plays';
import { fetchCharacters } from '../actions/characters';
import { fetchScene } from '../actions/scenes';

const mapStateToProps = ({ currentPlay }) => ({ currentPlay });

const mapDispatchToProps = dispatch => ({
	loadPlay (playName) {
		dispatch(fetchPlay(playName))
		dispatch(fetchCharacters(playName))
	},

	loadScene (play, act, scene) {
		dispatch(fetchScene(play, act, scene));
	}
});

PlaySelectContainer = connect(mapStateToProps, mapDispatchToProps)(PlaySelectContainer);

export default PlaySelectContainer;
