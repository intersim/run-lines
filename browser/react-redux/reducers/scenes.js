const currentScene = (state = {lines: [], num: 1}, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case 'SET_CURRENT_SCENE':
      newState.sceneNum = action.sceneNum;
      break;

    case 'LOAD_SCENE':
      newState.lines = action.lines;
      break;

    default:
      return state;
  }

  return newState;
}

export default currentScene;
