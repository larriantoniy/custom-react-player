import { call, put, takeEvery } from 'redux-saga/effects'

import { AxiosResponse } from 'axios'
import { IVideoEvent } from 'services/video/interfaces'
import videoService from 'services/video/video.service'
import { FETCH_EVENTS, setEvents, setIsError, setIsLoading } from 'store/videoReducer'

const getVideoEvents = () => videoService.getVideoEvents()

function* getVideoEventsWorker() {
  yield put(setIsLoading(true))
  const res: AxiosResponse<IVideoEvent[]> = yield call(getVideoEvents)
  if (res.status === 200) {
    const sortedData = res.data.sort((a, b) => a.timestamp - b.timestamp)
    yield put(setEvents(sortedData))
  }
  if (res.status >= 400) {
    yield put(setIsError(res.statusText))
  }
  yield put(setIsLoading(false))
}

export function* videoWatcher() {
  yield takeEvery(FETCH_EVENTS, getVideoEventsWorker)
}
