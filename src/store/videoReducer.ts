import { AnyAction } from 'redux'
import { IVideoEvent } from 'services/video/interfaces'

export interface IInitialStateType {
  events: IVideoEvent[]
  timeStamp: number
  isLoading: boolean
  isError: string | null
}

const defaultState: IInitialStateType = {
  events: [],
  timeStamp: 0,
  isLoading: false,
  isError: null,
}

export const FETCH_EVENTS = 'FETCH_EVENTS'
export const SET_EVENTS = 'SET_EVENTS'
export const SET_TIMESTAMP = 'SET_TIMESTAMP'
export const SET_IS_LOADING = 'SET_IS_LOADING'
export const SET_IS_ERROR = 'SET_IS_ERROR'

export default function videoReducer(state = defaultState, action: AnyAction) {
  switch (action.type) {
    case SET_EVENTS:
      return { ...state, events: action.payload }
    case SET_TIMESTAMP:
      return {
        ...state,
        timeStamp: action.payload,
      }
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload }
    case SET_IS_ERROR:
      return { ...state, isError: action.payload }
  }
  return state
}

export const fetchEvents = () => ({ type: FETCH_EVENTS })
export const setEvents = (payload: IVideoEvent[]) => ({ type: SET_EVENTS, payload })
export const setTimeStamp = (payload: number) => ({ type: SET_TIMESTAMP, payload })
export const setIsError = (payload: string) => ({ type: SET_IS_ERROR, payload })
export const setIsLoading = (payload: boolean) => ({ type: SET_IS_LOADING, payload })
