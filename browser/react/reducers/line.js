const currentPlay = (state = {}, action) => {
	switch (action.type) {
		case 'SET_CURRENT_LINE':
			return action.line;

		default: 
			return state;
	}
}

export default currentPlay;