import React, { useState, useEffect } from 'react'

import SignUpATruck from './SignUpATruck';

import { MapContainer, TileLayer, useMap, Marker, Tooltip, Popup, useMapEvents } from 'react-leaflet'
import L from 'leaflet';

import styles from "./Signup.module.css"

import 'leaflet/dist/leaflet.css';

const truckIcon = new L.Icon({
  iconUrl: "https://cdn-icons.flaticon.com/png/128/499/premium/499552.png?token=exp=1650510932~hmac=9bb9406da449bd57dffea26b0071cb39",
  // iconRetinaUrl: require("../assets/pointerIcon.svg"),  
  popupAnchor: [1, -1],
  iconSize: [55, 55],
  // shadowUrl: "https://cdn-icons-png.flaticon.com/128/7314/7314532.png",
  // shadowSize: [68, 95],
  // shadowAnchor: [20, 92]
});

// function LocationMarker() {
//   const [position, setPosition] = useState(null)
//   const map = useMapEvents({
//     click: (e) => {
//       const { lat, lng } = e.latlng;
//       L.marker([lat, lng], { truckIcon }).addTo(map);
//     }
//   });
//   return null;
// }



// const location = () => {
  
//   console.log("target")
// }

export default function MyTruckLocationMap() {

  // const [map, setMap] = React.useState(null)
  // const [cords,setCords] = React.useState({ 
  //   lat: 53.5461,
  //   lng: -113.4938}) 
 

  return (
    <>

    <>
    
      <MapContainer 
        center={[53.5456, -113.4903]} 
        zoom={13} 
        scrollWheelZoom={true} 
        // onClick={((e) => {console.log(e.target)})}
        eventHandlers={{ click: console.log("click")}}
       
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"         
          />
        {/* <LocationMarker /> */}
        <Marker
        position={[53.5456, -113.4903]}
        eventHandlers={{
          click: (e) => {
            {console.log(e)}
          },
        }}
        
        >
          
        </Marker>        
      </MapContainer>
    </>
    </>
  )
}




