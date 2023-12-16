'use client'

import Leaflet, { LatLng, icon } from 'leaflet'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import ZoomControls from './ZoomControls'
import marketsData from '@/data/weinachtsmarkt'
import MapMarkers from './MapMarkers'
import MarkerCluster from './MarkerCluster'
import DetailsPanel from '../panel/DetailsPanel'
import { useEffect, useState } from 'react'

const Berlin = { lat: 52.520008, long: 13.404954 }

const corner1 = Leaflet.latLng(52.733333, 12.583333)
const corner2 = Leaflet.latLng(52.233056, 14.166667)
const maximumBounds = Leaflet.latLngBounds(corner1, corner2)

const LocationPin = icon({
  iconUrl: '/icons/icon-current-pin.svg',
  iconRetinaUrl: '/icons/icon-current-pin.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 2],
})

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

  const [userLocation, setUserLocation] = useState<LatLng | null>(null)

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
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          noWrap
        />
        <ZoomControls setUserLocation={setUserLocation} />
        {userLocation && (
          <Marker position={userLocation} icon={LocationPin}></Marker>
        )}
        <MarkerCluster>
          {marketsData.map((item) => (
            <MapMarkers
              marketData={item}
              setSelectedItem={setSelectedItem}
              selectedItem={selectedItem}
              openPanel={openPanel}
              key={item.id}
            />
          ))}
        </MarkerCluster>
      </MapContainer>
      {
        <DetailsPanel
          marketData={findMarketData(selectedItem)}
          setSelectedItem={setSelectedItem}
          openPanel={openPanel}
        />
      }
    </section>
  )
}

export default MapWrapper
