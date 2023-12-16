import React from 'react'

// @ts-expect-error Missing type definitions
import BaseMarkerCluster from '@changey/react-leaflet-markercluster'
import { divIcon, point } from 'leaflet'

const createClusterCustomIcon = (cluster: any) =>
  divIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className:
      'bg-app-secondary text-app-primary font-bold text-base !flex items-center justify-center rounded-3xl',
    iconSize: point(34, 34, true),
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
