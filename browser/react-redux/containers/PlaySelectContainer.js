import React, { Component } from 'react';
import PlaySelect from '../components/PlaySelect';
import ActSelect from '../components/ActSelect';
import SceneSelect from '../components/SceneSelect';

class PlaySelectContainer extends Component {
	constructor(){
		super();

		this.state = {
			selectedPlay: 'Twelfth-Night',
			selectedAct: 1,
			selectedScene: 2
		}

		this.handlePlayChange = this.handlePlayChange.bind(this);
		this.handleActChange = this.handleActChange.bind(this);
		this.handleSceneChange = this.handleSceneChange.bind(this);
	}

	handlePlayChange(e){
		const selectedPlay = e.target.value;
		this.props.loadPlay(selectedPlay);

		let selectedAct, selectedScene;

		switch (selectedPlay) {
			case 'Taming-of-the-Shrew':
				selectedAct = 0;
				selectedScene = 1;
				break;
			case 'Romeo-and-Juliet':
				selectedAct = 1;
				selectedScene = 0;
				break;
			default:
				selectedAct = 1;
				selectedScene = 1;
				break;
		}

		this.setState({ selectedPlay, selectedAct, selectedScene });
		this.props.loadScene(selectedPlay, selectedAct, selectedScene);
	}

	handleActChange(e){
		const selectedAct = e.target.value;
		const { selectedPlay } = this.state;

		let selectedScene;
		// check if there is a 'scene 0' in this act
		this.props.currentPlay.acts[selectedAct]['0'] === 0 ? selectedScene = 0 : selectedScene = 1;

		this.setState({ selectedAct, selectedScene });
		this.props.loadScene(selectedPlay, selectedAct, selectedScene);
	}

	handleSceneChange(e){
		const { selectedPlay, selectedAct } = this.state;
		const selectedScene = e.target.value;
		this.setState({ selectedScene });
		this.props.loadScene(selectedPlay, selectedAct, selectedScene);
	}

	render(){
		const acts = this.props.currentPlay.acts ? Object.keys(this.props.currentPlay.acts) : [];
		const scenes = this.props.currentPlay.acts && this.props.currentPlay.acts[this.state.selectedAct];

		return (
		        <form className="mt2 mb2 inline-block">
		        	<PlaySelect
		        		selectedPlay={this.state.selectedPlay}
								handleChange={this.handlePlayChange} />
							<ActSelect
								selectedAct={this.state.selectedAct}
								acts={acts}
								handleChange={this.handleActChange} />
							<SceneSelect
								selectedScene={this.state.selectedScene}
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
