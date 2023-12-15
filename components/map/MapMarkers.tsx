import { Marker, Popup } from 'react-leaflet'
import { icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

const MarkerIcon = icon({
  iconUrl: '/icons/icon-tree.svg',
  iconRetinaUrl: '/icons/icon-tree.svg',
  iconSize: [32, 32],
  iconAnchor: [12, 12],
})

interface MapMarkersProps {
  marketData: { [key: string]: any }
}

const MapMarkers = ({ marketData }: MapMarkersProps) => {
  return (
    <Marker position={[marketData.lat, marketData.lng]} icon={MarkerIcon}>
      <Popup>
        <div className="!bg-app-primary !text-app-secondary">
          <button
            type="button"
            className="font-bold text-sm lg:text-base max-w-[10rem] my-2 lg:my-1 lg:max-w-full"
          >
            {marketData.name}
          </button>
        </div>
      </Popup>
    </Marker>
  )
}

export default MapMarkers
