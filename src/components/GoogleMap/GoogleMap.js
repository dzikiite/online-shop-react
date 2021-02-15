import React from 'react';
import GoogleMapReact from 'google-map-react';
import { API_KEY } from '../../utils/consts';

import { GoogleMapContainer, GoogleMapMarker } from './GoogleMap.elements';

const GoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 39.13006,
      lng: -94.729232,
    },
    zoom: 10,
  };

  return (
    <GoogleMapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}>
        <GoogleMapMarker
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
        />
      </GoogleMapReact>
    </GoogleMapContainer>
  );
};

export default GoogleMap;
