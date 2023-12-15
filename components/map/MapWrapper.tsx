'use client'

import Leaflet from 'leaflet'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import ZoomControls from './ZoomControls'
import marketsData from '@/data/weinachtsmarkt'
import MapMarkers from './MapMarkers'
import DetailsPanel from './DetailsPanel'
import { useEffect, useState } from 'react'

const Berlin = { lat: 52.520008, long: 13.404954 }

const corner1 = Leaflet.latLng(52.733333, 12.583333)
const corner2 = Leaflet.latLng(52.233056, 14.166667)
const maximumBounds = Leaflet.latLngBounds(corner1, corner2)

const MapWrapper = () => {
  const [openPanel, setOpenPanel] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    if (selectedItem) {
      setOpenPanel(true)
    } else {
      setOpenPanel(false)
    }
  }, [selectedItem])

  const findMarketData = (marketId: number | null) => {
    const data = marketsData.find((item) => item.id === marketId)
    if (data) return data
    return undefined
  }

  return (
    <section className="w-max h-max relative">
      <MapContainer
        className="w-screen h-[95vh] lg:h-[92vh] z-[888]"
        zoom={13}
        minZoom={9}
        center={[Berlin.lat, Berlin.long]}
        maxBounds={maximumBounds}
        maxBoundsViscosity={1}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          noWrap
        />
        <ZoomControls />
        {marketsData.map((item) => (
          <MapMarkers
            marketData={item}
            setSelectedItem={setSelectedItem}
            key={item.id}
          />
        ))}
      </MapContainer>
      {
        <DetailsPanel
          marketData={findMarketData(selectedItem)}
          setOpenPanel={setOpenPanel}
          openPanel={openPanel}
        />
      }
    </section>
  )
}

export default MapWrapper
