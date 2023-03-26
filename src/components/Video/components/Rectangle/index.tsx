import { FunctionComponent } from 'react'
import { IZone } from 'services/video/interfaces'

export interface IRectangleProps {
  zone: IZone
}

const Rectangle: FunctionComponent<IRectangleProps> = ({ zone }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${zone.left}px`,
        top: `${zone.top}px`,
        width: `${zone.width}px`,
        height: `${zone.height}px`,
        border: '1px solid black',
        backgroundColor: 'green',
        pointerEvents: 'none',
        zIndex: 9,
      }}
    />
  )
}
export default Rectangle
