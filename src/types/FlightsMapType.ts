import { LatLngExpression, LeafletMouseEvent } from 'leaflet';
import { IUser } from '.';

export type FlightsMapStyle = 'dark' | 'light' | 'natural';

export interface FlightMapProps {
  userData: IUser,
  onAircraftIconClick: () => void,
  onAirportIconClick: () => void,
}

export interface FlightMapState {
  geoPosition: LatLngExpression,
  mapZoom: number,
  mapStyle: FlightsMapStyle,
}
export interface MapUpdaterProps {
  geoPosition: LatLngExpression,
  mapZoom: number,
}

export interface MapStyleSelectorProps {
  currentSelection: FlightsMapStyle,
  onStyleSelect: (key: FlightsMapStyle) => void,
}

export interface FuncAirportsLayerProps {
  onAirportIconClick: (event: LeafletMouseEvent) => void,
}
