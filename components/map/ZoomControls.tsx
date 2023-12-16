'use client'

import ImageWrapper from '@/atoms/ImageWrapper'
import LocationFinder from './LocationFinder'
import { useMap } from 'react-leaflet'
import { Dispatch, SetStateAction } from 'react'
import { LatLng } from 'leaflet'
import PlusIcon from '@/public/icons/icon-zoomin.svg'
import MinusIcon from '@/public/icons/icon-zoomout.svg'

interface ZoomControlsProps {
  setUserLocation: Dispatch<SetStateAction<LatLng | null>>
}

const ZoomControls = ({ setUserLocation }: ZoomControlsProps) => {
  const map = useMap()
  const buttonSize = 'h-4  w-4 lg:h-5 lg:w-5'
  const buttonStyle =
    'bg-app-primary rounded-full p-2 shadow-lg shadow-slate-900'
  return (
    <div className="absolute left-4 bottom-20 z-[990] flex flex-col gap-4">
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
      <LocationFinder
        buttonSize={buttonSize}
        buttonStyle={buttonStyle}
        setUserLocation={setUserLocation}
      />
    </div>
  )
}

export default ZoomControls
