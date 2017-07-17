/* ========== CONSTANTS ========== */
const SHOW_LOADING_ERROR = 'SHOW_LOADING_ERROR';

/* ========== ACTION CREATORS ========== */
const showLoadingError = error => ({
  type: SHOW_LOADING_ERROR,
  error
});

const flashLoadingError = error => dispatch => {
  dispatch(showLoadingError(error));
  setTimeout(() => dispatch(showLoadingError(null)), 6000);
}

export default flashLoadingError;
