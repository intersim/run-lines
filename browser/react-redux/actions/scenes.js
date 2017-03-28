import axios from 'axios';
import { setCurrentAct } from './acts';

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
    axios.get(`/api/plays/${playName}/acts/${actNum}/scenes/${sceneNum}`)
    .then(res => res.data)
    .then(scene => {
      dispatch(setCurrentAct(actNum))
      dispatch(setCurrentScene(sceneNum))
      dispatch(loadScene(scene))
    })
    .catch(err => console.error(err.stack));
  }
}
