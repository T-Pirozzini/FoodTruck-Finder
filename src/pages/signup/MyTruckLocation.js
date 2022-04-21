import React, { useState, useEffect } from 'react'

// components
import SignUpATruck from './SignUpATruck';

// Leaflet API
import { MapContainer, TileLayer, useMap, Marker, Tooltip, Popup, useMapEvents } from 'react-leaflet'
import L from 'leaflet';

// styles
import "./Signup.css"
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
    <div className="registration-container">  
      <MapContainer
        id="signup-map" 
        center={[53.5456, -113.4903]} 
        zoom={14} 
        scrollWheelZoom={true}          
      >
        <TileLayer
           attribution='&copy; "<a href=  `© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>`"
           );'
          url={"https://api.mapbox.com/styles/v1/tpirozzini/cl29e9qcl000115n0dxc7a0i7/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidHBpcm96emluaSIsImEiOiJjbDI5ZTVnbXAwZnUzM2tydGF6aW5xaHR3In0.tSzKVLnd-wE5MYRZ9Qfbhw"}         
          />        
        <Marker
        position={cords}
        icon={ truckIcon }       
        >          
        </Marker> 
        <LocationMarker />       
      </MapContainer>
      <SignUpATruck cords={cords} />
    </div>
    </>
  )
}




