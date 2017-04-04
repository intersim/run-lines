import axios from 'axios';

/* ========== CONSTANTS ========== */
const LOAD_PLAY = 'LOAD_PLAY';

/* ========== ACTION CREATORS ========== */
export const loadPlay = play => ({
	type: LOAD_PLAY,
	play
});

/* ========== ASYNC ========== */
// export const fetchPlay = playName => {
// 	return dispatch => {
// 		axios.get(`/api/plays/${playName}/overview`)
// 		.then (res => res.data)
// 		.then(play => {
// 			dispatch(loadPlay(play));
// 		})
// 		.catch(err => console.error(err.stack));
// 	}
// };
