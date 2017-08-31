/* ========== CONSTANTS ========== */
const SET_CURRENT_LINE = 'SET_CURRENT_LINE';

const CLEAR_CURRENT_LINE = 'CLEAR_CURRENT_LINE';

/* ========== ACTION CREATORS ========== */
export const setCurrentLine = line => ({
	type: SET_CURRENT_LINE,
	line
});

export const clearCurrentLine = () => ({
  type: CLEAR_CURRENT_LINE
});
