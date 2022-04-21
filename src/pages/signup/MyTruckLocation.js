import React, { useState, useEffect } from 'react'

// components
import SignUpATruck from './SignUpATruck';

// Leaflet API
import { MapContainer, TileLayer, useMap, Marker, Tooltip, Popup, useMapEvents } from 'react-leaflet'
import L from 'leaflet';

// styles
import styles from "./Signup.module.css"
import 'leaflet/dist/leaflet.css';


const truckIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",  
  iconSize: [30, 30],  
});

export default function MyTruckLocationMap() {
  const [cords, setCords] = useState([53.5456, -113.4903])   
  const LocationMarker = () => {  
    const map = useMapEvents({
      click: (e) => {      
        const { lat, lng } = e.latlng;        
        setCords([lat,lng])        
      }
    });
    return null;
  }

  return (
    <>
    <>    
    <SignUpATruck cords={cords} />
      <MapContainer 
        center={[53.5456, -113.4903]} 
        zoom={13} 
        scrollWheelZoom={true}          
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"         
          />        
        <Marker
        position={cords}
        icon={ truckIcon }       
        >          
        </Marker> 
        <LocationMarker />       
      </MapContainer>
    </>
    </>
  )
}




