/* ========== CONSTANTS ========== */
const SET_CURRENT_ACT = 'SET_CURRENT_ACT';

/* ========== ACTION CREATORS ========== */
export const setCurrentAct = actNum => ({
  type: SET_CURRENT_ACT,
  actNum
});
