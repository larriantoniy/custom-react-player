import { all } from 'redux-saga/effects'
import { videoWatcher } from './video'

export function* rootWatcher() {
  yield all([videoWatcher()])
}
