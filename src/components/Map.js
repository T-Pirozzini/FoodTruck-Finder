import React from "react";
import { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import SideNav from "./SideNav";

//styles
import "./Map.css";
import { func } from "prop-types";
// import { fchown } from "fs";

const containerStyle = {
  height: "90vh",
};

const center = {
  lat: 534.96,
  lng: -113.5,
};
// const handleClick = () => {
//   console.log("click event")
//   this.setExpand(true)
// }

export default function Map(props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
  });
  const [map, setMap] = React.useState(null);
  const [expand, setExpand] = useState(false);

  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    setMap(map);
  }, []);

  const updatePoints = (truck) => {
    const array_copy = props.pins.map((element) => {      
      if (element.id === truck.id && element.expand === false) {
        element.expand = true;
      } else {      
        element.expand = false;
      }
      return element; 
      }   
    );
    props.setPoints(array_copy);
  };

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (        
    <GoogleMap
      id="map"
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <SideNav setUrl={props.setUrl} />
      {props.pins.map((truck) => {
        return (
          <Marker
            id="marker"
            key={truck.id}
            position={{ lat: truck.location_lat, lng: truck.location_lng }}
            icon={{
              url: "https://cdn-icons.flaticon.com/png/128/499/premium/499552.png?token=exp=1650338871~hmac=3225041d788bd32487c780d564d05aba",
              scaledSize: new window.google.maps.Size(42, 42)
            }}
            title={"truck.truck_name"}
            // onClick={this.handleClick()}
            onClick={() => {updatePoints(truck)}}
          >
            <InfoWindow
              id="info-window"
              key={truck.id}
              position={{
                lat: truck.location_lat + 0.002,
                lng: truck.location_lng + -0.0008,
              }}
              // onCloseClick={() => setInfoWindowVisible(false)}
            >
              <div key={truck.id} className="truck-card">
                <h3>{truck.truck_name}</h3>
                {truck.expand ? (
                  <div>
                    <p>{truck.info}</p>
                    <p>{truck.rating}</p>
                    <p>
                      {truck.location_lng}, {truck.location_lat}
                    </p>
                  </div>
                ) : null}
              </div>
            </InfoWindow>
          </Marker>
        );
      })}

      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

