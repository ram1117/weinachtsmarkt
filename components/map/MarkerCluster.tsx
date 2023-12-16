import React from 'react'

// @ts-expect-error Missing type definitions
import BaseMarkerCluster from '@changey/react-leaflet-markercluster'
import { divIcon, point } from 'leaflet'

const createClusterCustomIcon = (cluster: any) =>
  divIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className:
      'bg-app-primary bg-opacity-100 text-app-secondary font-bold !flex items-center justify-center rounded-3xl border-app-secondary border-2 border-opacity-50',
    iconSize: point(40, 40, true),
  })

interface MapMarkerClusterProps {
  children: React.ReactNode
}

function MarkerCluster({ children }: MapMarkerClusterProps) {
  return (
    <BaseMarkerCluster
      iconCreateFunction={createClusterCustomIcon}
      showCoverageOnHover={false}
    >
      {children}
    </BaseMarkerCluster>
  )
}

export default MarkerCluster
