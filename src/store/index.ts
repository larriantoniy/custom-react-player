import videoReducer from './videoReducer'

import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from '../saga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  videoReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
export type RootStateType = ReturnType<typeof store.getState>

sagaMiddleware.run(rootWatcher)
