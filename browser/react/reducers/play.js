import play from '../../../data/A-Midsummer-nights-dream.json';

const currentPlay = (state = play, action) => {
	switch (action.type) {
		case 'LOAD_PLAY':
			return action.play;

		default: 
			return state;
	}
}

export default currentPlay;