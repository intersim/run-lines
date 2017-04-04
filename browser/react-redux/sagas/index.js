import axios from 'axios'

import { takeEvery } from 'redux-saga'
import { call } from 'redux-saga/effects'

export function* fetchPlay(action) {
  try {
    const playRes = yield call(axios.get, `/api/plays/${
      action.playName
    }`)
    yield put({ type: 'LOAD_PLAY', play: playRes.data })
  } catch (err) {
    yield console.log("ERROR!", err)
  }
}

// spawn? fork?
export function* rootSaga () {
  yield takeEvery('FETCH_PLAY', fetchPlay)
}
