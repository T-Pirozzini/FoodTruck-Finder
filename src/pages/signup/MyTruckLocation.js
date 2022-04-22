import React, { useState, useEffect } from 'react'

// components
import SignUpATruck from './SignUpATruck';

// MUI components
import { Pagination, Typography, Stack } from '@mui/material';

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


let week = ["err", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]


export default function MyTruckLocationMap() {
  const [cords, setCords] = useState([53.5456, -113.4903]) 
  const [location, setLocation] = useState("monday")  
  const [valueInt, setValueInt] = useState(1)
  const [dayLocation, setDayLocation] = useState({1:{},2:{},3:{},4:{},5:{},6:{}, 7:{}})
  console.log("DAYLOCATION:", dayLocation)
  let week = ["err", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

const updateDay = ((e, value) =>
 {
  console.log("currentDay", value)
  console.log("Day of Week:", week[value])
  setLocation(week[value])
  setValueInt(value)
 })
  
  
  const LocationMarker = () => {  
    const map = useMapEvents({
      click: (e) => {      
        const { lat, lng } = e.latlng;
        console.log("value:", valueInt)
        // setCords([lat,lng])
        console.log("cords", cords)  
        // dayLocation[valueInt - 1] = [lat,lng]
        setDayLocation({...dayLocation, [valueInt]:{lat,lng}})                    
      }
    });
    return;
  }
  // console.log("day array ", dayLocation)
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
      <SignUpATruck cords={cords} dayLocation={dayLocation}/>
      <div className="signup-schedule">
        <Stack spacing={1}>
          <Typography>{location.toUpperCase()}</Typography>         
          <Pagination count={7} value={location} onChange={updateDay} size='medium' variant="outlined" color="primary" />      
        </Stack>
      </div>
    </div>
    </>
  )
}




