const currentPlayCharacters = (state = [], action) => {
	switch (action.type) {
		case 'LOAD_CHARACTERS':
			return action.characters;

		default:
			return state;
	}
}

export default currentPlayCharacters;