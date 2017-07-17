const loadingError = (state = null, action) => {
  switch (action.type) {
    case 'SHOW_LOADING_ERROR':
      return action.error;

    default:
      return state;
  }
}

export default loadingError;
