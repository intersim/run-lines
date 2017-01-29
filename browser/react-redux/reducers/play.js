const currentPlay = (state = [], action) => {
	switch (action.type) {
		case 'LOAD_PLAY':
			return action.play;

		default: 
			return state;
	}
}

export default currentPlay;