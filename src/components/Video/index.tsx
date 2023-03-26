import {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
  VideoHTMLAttributes,
} from 'react'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
import { RootStateType } from '../../store'

import Rectangle from 'components/Video/components/Rectangle'
import { IVideoEvent } from 'services/video/interfaces'

export interface IVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string
}

const Video: FunctionComponent<IVideoProps> = ({ src, ...props }) => {
  const [showRectangles, setShowRectangles] = useState<IVideoEvent[]>([])

  const timeStamp = useSelector<RootStateType, number>((state) => state.videoReducer.timeStamp)
  const events = useSelector<RootStateType, IVideoEvent[]>((state) => state.videoReducer.events)

  const videoRef = useRef<HTMLVideoElement>(null)

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime
      setShowRectangles(
        events.filter((event) => {
          return (
            currentTime >= event.timestamp / 1000 &&
            currentTime < (event.timestamp + event.duration) / 1000
          )
        })
      )
    }
  }, [events])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = timeStamp / 1000 // convert ms to seconds
      videoRef.current.addEventListener('timeupdate', handleTimeUpdate)
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('timeupdate', handleTimeUpdate)
      }
    }
  }, [timeStamp, handleTimeUpdate])
  return (
    <div className={styles.container}>
      <video controls ref={videoRef} {...props} className={styles.video}>
        <source src={src} type="video/mp4"></source>
      </video>
      {showRectangles?.map((event) => (
        <Rectangle key={event.id} zone={event.zone} />
      ))}
    </div>
  )
}

export default Video
