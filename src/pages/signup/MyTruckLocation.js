import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import SignUpATruck from './SignUpATruck';

const containerStyle = {
  height: "90vh"
};

const center = {
  lat: 53.5461,
  lng: -113.4938
};

function MyTruckLocationMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY
  })

  const [map, setMap] = React.useState(null)
  const [cords,setCords] = React.useState({})

  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <>
      <SignUpATruck cords={cords} />
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={((e) => {setCords({lat:e.latLng.lat(), lng:e.latLng.lng()})})}
      >
      <Marker position={cords}/>
        <></>
      </GoogleMap>
      </>
  ) : <></>
}

export default React.memo(MyTruckLocationMap)