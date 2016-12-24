const currentLine = (state = {}, action) => {
	switch (action.type) {
		case 'SET_CURRENT_LINE':
			return action.line;

		default: 
			return state;
	}
}

export const isListening = (state = false, action) => {
	switch (action.type) {
		case 'START_LISTENING':
			return true;

		case 'STOP_LISTENING':
			return false;

		default:
			return state;
	}
}

export default currentLine;