import axios from 'axios';

/* ========== CONSTANTS ========== */
const LOAD_CHARACTERS = 'LOAD_CHARACTERS';
const SET_CURRENT_CHARACTER = 'SET_CURRENT_CHARACTER';

/* ========== ACTION CREATORS ========== */
export const loadCharacters = characters => ({
	type: LOAD_CHARACTERS,
	characters
});

export const setCurrentCharacter = character => ({
	type: SET_CURRENT_CHARACTER,
	character
})

/* ========== ASYNC ========== */
export const fetchCharacters = playName => {
	return dispatch => {
		axios.get(`/api/plays/${playName}/characters`)
		.then(res => res.data)
		.then(characters => {
			dispatch(loadCharacters(characters))
		})
		.catch(err => console.error(err.stack));
	}
}
