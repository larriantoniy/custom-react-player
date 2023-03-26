export interface IVideoEvent {
  id: number
  timestamp: number
  duration: number
  zone: IZone
}

export interface IZone {
  left: number
  top: number
  width: number
  height: number
}
