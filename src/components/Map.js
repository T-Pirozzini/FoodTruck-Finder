import React from "react";
import { useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Tooltip, Popup } from 'react-leaflet'
import L from 'leaflet';
import SideNav from "./SideNav";
import Schedule from "./Schedule";
import ControlledCarousel from "./Carousel"


//styles
import "./Map.css";

import 'leaflet/dist/leaflet.css';

const truckIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  // iconRetinaUrl: require("../assets/pointerIcon.svg"),  
  popupAnchor: [1, -1],
  iconSize: [55, 55],
  // shadowUrl: "https://cdn-icons-png.flaticon.com/128/7314/7314532.png",
  // shadowSize: [68, 95],
  // shadowAnchor: [20, 92]
});


export default function Map(props) {
  const [expand, setExpand] = useState(false);
                
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
  
  return (
    <>
    <MapContainer center={[53.5456, -113.4903]} zoom={13} scrollWheelZoom={true}>
        
        <TileLayer
          attribution='&copy; "<a href=  `© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>`"
);'
          url={"https://api.mapbox.com/styles/v1/tpirozzini/cl29e9qcl000115n0dxc7a0i7/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidHBpcm96emluaSIsImEiOiJjbDI5ZTVnbXAwZnUzM2tydGF6aW5xaHR3In0.tSzKVLnd-wE5MYRZ9Qfbhw"}
          />
          {props.pins.map((truck) => {
            return (
                <Marker
                  key={truck.id}
                  position={[truck.location_lat, truck.location_lng ]}            
                    icon={ truckIcon }
                    eventHandlers={{
                      click: (e) => {
                       {updatePoints(truck)}
                      },
                    }}
                  >                                        
                    <Tooltip direction="right" offset={[20, 5]} permanent>
                      {truck.truck_name}
                    </Tooltip> 
                    <Popup>
                    
                    <h3>{truck.truck_name}</h3>
                      
                      <div className="image-container">
                        <ControlledCarousel />
                        
                      </div>
                               <div>
                                 <p>{truck.info}</p>
                                 <p>{truck.rating}</p>
                                 <p>
                                   {truck.location_lng}, {truck.location_lat}
                                 </p>
                               </div>
                      {truck.truck_name}
                    </Popup>
                  </Marker>
                    );
                  })}              
      </MapContainer>
      <SideNav setUrl={props.setUrl} />
      </>

)}

