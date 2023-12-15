'use client'

import ImageWrapper from '@/atoms/ImageWrapper'
import { useMap } from 'react-leaflet'
import PlusIcon from '@/public/icons/icon-zoomin.svg'
import MinusIcon from '@/public/icons/icon-zoomout.svg'

const ZoomControls = () => {
  const map = useMap()

  const buttonSize = 'h-4  w-4'
  const buttonStyle = 'bg-app-primary rounded-full p-2 shadow-2xl'
  return (
    <div className="absolute left-4 bottom-20 z-[990] flex flex-col gap-2">
      <button
        type="button"
        className={buttonStyle}
        onClick={() => map.zoomIn()}
      >
        <ImageWrapper src={PlusIcon} alt="Zoom in" imageSize={buttonSize} />
      </button>
      <button
        type="button"
        className={buttonStyle}
        onClick={() => map.zoomOut()}
      >
        <ImageWrapper src={MinusIcon} alt="Zoom out" imageSize={buttonSize} />
      </button>
    </div>
  )
}

export default ZoomControls
