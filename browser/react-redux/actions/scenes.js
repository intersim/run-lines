/* ========== CONSTANTS ========== */
const LOAD_SCENE = 'LOAD_SCENE';
const SET_CURRENT_SCENE = 'SET_CURRENT_SCENE';

/* ========== ACTION CREATORS ========== */
export const loadScene = scene => ({
  type: LOAD_SCENE,
  lines: scene
});

export const setCurrentScene = sceneNum => ({
  type: SET_CURRENT_SCENE,
  num: sceneNum
})

/* ========== ASYNC ========== */
export const fetchScene = (playName, actNum, sceneNum) => {
  return dispatch => {
    fetch(`/api/plays/${playName}/acts/${actNum}/scenes/${sceneNum}`)
    .then(res => res.json())
    .then(scene => {
      dispatch(loadScene(scene))
    })
    .catch(err => console.error(err.stack));
  }
}
