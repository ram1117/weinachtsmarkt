'use client'

import ImageWrapper from '@/atoms/ImageWrapper'
import LocationIcon from '@/public/icons/icon-location.svg'
import { useState } from 'react'
import { LatLng } from 'leaflet'
import { useMapEvents } from 'react-leaflet'
import { Dispatch, SetStateAction } from 'react'

interface LocationFinderProps {
  buttonSize: string
  buttonStyle: string
  setUserLocation: Dispatch<SetStateAction<LatLng | null>>
}

const LocationFinder = ({
  buttonSize,
  buttonStyle,
  setUserLocation,
}: LocationFinderProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const map = useMapEvents({
    locationfound(e) {
      map.flyTo(e.latlng)
      setUserLocation(e.latlng)
      setIsLoading(false)
    },
    locationerror(error) {
      setIsLoading(false)
      console.log(error.message)
    },
  })

  return (
    <button
      type="button"
      className={`${buttonStyle}`}
      onClick={() => {
        setIsLoading(true)
        map.locate()
      }}
    >
      <ImageWrapper
        src={LocationIcon}
        alt="User Location Icon"
        imageSize={buttonSize}
        className={`${isLoading ? 'animate-rotate-slow' : ''}`}
      />
    </button>
  )
}

export default LocationFinder
