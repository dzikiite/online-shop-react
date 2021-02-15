import React from 'react';
import GoogleMapReact from 'google-map-react';

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
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEMAP_API_KEY }}
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
