import React from 'react';
import Radar from '../SVGComponents/Radar';
import '../Flight.scss';
import './FlightData.scss';

interface FlightDataProps {
  hex: string,
  lat: number | null,
  lng: number | null,
  airline: {
    iata?: string | null,
    icao?: string | null,
  },
}

const FlightData:React.FC<FlightDataProps> = ({
  hex, lat, lng, airline,
}
: FlightDataProps): JSX.Element => (
  <section className="flight-data">
    <div className="flight-data__icon"><Radar /></div>
    <div className="flex-wrapper">
      <div className="row">
        <div className="first-column">
          <p>ICAO 24-bit address</p>
          <p className="flight-data__bold">
            {`${hex.toUpperCase()} ft`}
          </p>
        </div>
        <div>
          <p>AIRLINE</p>
          <p className="flight-data__bold">
            {airline.iata || ''}
            {' / '}
            {airline.icao || ''}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="first-column">
          <p>Latitude</p>
          <p className="flight-data__bold">
            {lat && lat.toFixed(2)}
          </p>
        </div>
        <div>
          <p>Longitude</p>
          <p className="flight-data__bold">
            {lng && lng.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FlightData;
