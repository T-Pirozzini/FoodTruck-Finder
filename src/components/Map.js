
import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

//styles
import "./Map.css"

const containerStyle = {  
  height: '90vh'
};

const center = {
  lat: 53.5,
  lng: -113.5
};

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY
  })
  const [map, setMap] = React.useState(null)
  
  const onLoad = React.useCallback(function callback(map) {       
    // const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);    
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (    
      <GoogleMap id="map"
        mapContainerStyle={containerStyle}        
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>  
  ) : <></>
}


