export const currentLine = (state = {}, action) => {
	switch (action.type) {
		case 'SET_CURRENT_LINE':
			return action.line;

		case 'CLEAR_CURRENT_LINE':
			return {};

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

export const isSpeaking = (state = false, action) => {
	switch (action.type) {
		case 'START_SPEAKING':
			return true;

		case 'STOP_SPEAKING':
			return false;

		default:
			return state;
	}
}

export const voices = (state = [], action) => {
	switch (action.type) {
		case 'SET_VOICES':
			return action.voices;

		default:
			return state;
	}
}
