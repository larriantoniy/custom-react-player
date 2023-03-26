import styles from './styles.module.scss'
import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IVideoEvent } from 'services/video/interfaces'
import { fetchEvents, setTimeStamp } from 'store/videoReducer'
import { RootStateType } from 'store/index'
import { formatTime } from 'utils/formatTime'

export const VideoEvents: FunctionComponent = () => {
  const events = useSelector<RootStateType, IVideoEvent[]>((state) => state.videoReducer.events)
  const isLoading = useSelector<RootStateType, boolean>((state) => state.videoReducer.isLoading)
  const isError = useSelector<RootStateType, boolean>((state) => state.videoReducer.isError)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEvents())
  }, [dispatch])

  if (isLoading)
    return (
      <div className={styles.loading}>
        <h1>Loading</h1>
      </div>
    )

  if (isError)
    return (
      <div className={styles.loading}>
        <h1>{isError}</h1>
      </div>
    )

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Video Events</h2>
        <ul className={styles.list}>
          {events?.map((event) => (
            <li
              key={event.id}
              className={styles.item}
              onClick={() => dispatch(setTimeStamp(event.timestamp))}
            >
              {formatTime(event.timestamp)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default VideoEvents
