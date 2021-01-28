import React from 'react';
import { AirportPhotoProps } from '../../../types/airportDataTypes';
import GoTo from '../../../img/Goto';
import './AirportPhoto.scss';

const AirportPhoto:React.FC<AirportPhotoProps> = ({ airportInfo }: AirportPhotoProps)
: JSX.Element => {
  const { src, link } = airportInfo.airportImages.large[0];
  return (
    <div className="airport-photo">
      <img src={src} alt="airport" />
      <a target="_blank" href={link} rel="noreferrer">
        <GoTo />
      </a>
    </div>
  );
};

export default AirportPhoto;
