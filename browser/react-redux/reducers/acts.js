const currentAct = (state = 1, action) => {
  switch (action.type) {
    case 'SET_CURRENT_ACT':
      return action.actNum;

    default:
      return state;
  }
}

export default currentAct;
