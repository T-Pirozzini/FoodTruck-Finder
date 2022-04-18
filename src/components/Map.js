import React from "react";
import { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";

//styles
import "./Map.css";

const containerStyle = {
  height: "90vh",
};

const center = {
  lat: 53.5,
  lng: -113.5,
};


export default function Map(props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
  });
  const [map, setMap] = React.useState(null);
  const [infoWindowVisible, setInfoWindowVisible] = useState(false);

  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      id="map"
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {props.pins.map((truck) => {
        return (
          <InfoWindow
            key={truck.id} 
            position={{ lat: truck.location_lat + .002, lng: truck.location_lng + -.0008 }}
          >            
            <div className="truck-info">{truck.truck_name}</div
          >
          </InfoWindow>
        )})}

      {props.pins.map((truck) => {
        return (          
          <Marker
            id="marker"
            key={truck.id}
            position={{ lat: truck.location_lat, lng: truck.location_lng }}
            icon={{
              url: "https://cdn-icons.flaticon.com/png/128/499/premium/499552.png?token=exp=1650255958~hmac=1c61d787f70a8787e2096192d950139b",
              scaledSize: new window.google.maps.Size(42, 42)
            }}
            title={"truck.truck_name"}
          >            
          </Marker>                                
        );        
      })}    
      
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}
