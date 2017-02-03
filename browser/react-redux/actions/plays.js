/* ========== CONSTANTS ========== */
const LOAD_PLAY = 'LOAD_PLAY';

/* ========== ACTION CREATORS ========== */
export const loadPlay = play => ({
	type: LOAD_PLAY,
	play
});

/* ========== ASYNC ========== */
export const fetchPlay = playName => {
	return dispatch => {
		fetch(`/api/plays/${playName}/overview`)
		.then (res => res.json())
		.then(play => {
			dispatch(loadPlay(play));
		})
		.catch(err => console.error(err.stack));
	}
};
