import { Marker, Popup } from 'react-leaflet'
import { icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Dispatch, SetStateAction } from 'react'

const MarkerIcon = icon({
  iconUrl: '/icons/icon-tree.svg',
  iconRetinaUrl: '/icons/icon-tree.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 2],
})

interface MapMarkersProps {
  marketData: { [key: string]: any }
  setSelectedItem: Dispatch<SetStateAction<null>>
}

const MapMarkers = ({ marketData, setSelectedItem }: MapMarkersProps) => (
  <Marker
    position={[marketData.lat, marketData.lng]}
    icon={MarkerIcon}
    eventHandlers={{
      mouseover: (event) => event.target.openPopup(),
      mouseout: (event) => event.target.closePopup(),
      click: () => setSelectedItem(marketData.id),
    }}
  >
    <Popup>
      <div className="!bg-app-primary !text-app-secondary">
        <h2 className="font-bold text-sm lg:text-base max-w-[10rem] my-2 lg:my-1 lg:max-w-full">
          {marketData?.rss_titel}
        </h2>
      </div>
    </Popup>
  </Marker>
)

export default MapMarkers
