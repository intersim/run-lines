export const currentPlayCharacters = (state = [], action) => {
	switch (action.type) {
		case 'LOAD_CHARACTERS':
			return action.characters;

		default:
			return state;
	}
}

export const currentCharacter = (state = '', action) => {
	switch (action.type) {
		case 'SET_CURRENT_CHARACTER':
			return action.character;

		default:
			return state;
	}
}