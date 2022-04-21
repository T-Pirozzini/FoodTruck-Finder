import React from "react";
import { useState } from "react";

import { MapContainer, TileLayer, useMap, Marker, Tooltip, Popup } from 'react-leaflet'
import L from 'leaflet';


import SideNav from "./SideNav";
import Schedule from "./Schedule";

//styles
import "./Map.css";
// import { func } from "prop-types";
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
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />        
          {props.pins.map((truck) => {
            return (
              
                <Marker
                  // id="marker"
                  key={truck.id}
                  position={[truck.location_lat, truck.location_lng ]}
                  // icon={{
                  //     iconUrl: "https://cdn-icons.flaticon.com/png/128/499/premium/499552.png?token=exp=1650338871~hmac=3225041d788bd32487c780d564d05aba"                      
                  //   }}
                  //   title={"truck.truck_name"}
                    // onClick={this.handleClick()}
                    // onClick={(e) => console.log("clicked",e)}
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
        {/* <Marker position={[53.496, -113.5]}>
           <Popup>
          //   A pretty CSS3 popup. <br /> Easily customizable.
          // </Popup>
        </Marker> */}       
      </MapContainer>
      <SideNav setUrl={props.setUrl} />
      </>

)}

//   return isLoaded ? (        
  //     <GoogleMap
  //       id="map"
  //       mapContainerStyle={containerStyle}
  //       center={center}
  //       zoom={13}
  //       onLoad={onLoad}
  //       onUnmount={onUnmount}
  //     >
  //       <SideNav setUrl={props.setUrl} />
  
  //       {props.pins.map((truck) => {
    //         return (
      //           <Marker
      //             id="marker"
      //             key={truck.id}
      //             position={{ lat: truck.location_lat, lng: truck.location_lng }}
      //             icon={{
        //               url: "https://cdn-icons.flaticon.com/png/128/499/premium/499552.png?token=exp=1650338871~hmac=3225041d788bd32487c780d564d05aba",
        //               scaledSize: new window.google.maps.Size(42, 42)
        //             }}
        //             title={"truck.truck_name"}
        //             // onClick={this.handleClick()}
        //             onClick={() => {updatePoints(truck)}}
        //           >
        //             <InfoWindow
        //               id="info-window"
        //               key={truck.id}
        //               position={{
          //                 lat: truck.location_lat + 0.002,
          //                 lng: truck.location_lng + -0.0008,
          //               }}
          //               // onCloseClick={() => setInfoWindowVisible(false)}
          //             >
          //               <div key={truck.id} className="truck-card">
          //                 <h3>{truck.truck_name}</h3>
          //                 {truck.expand ? (
            //                   <div>
            //                     <p>{truck.info}</p>
            //                     <p>{truck.rating}</p>
            //                     <p>
            //                       {truck.location_lng}, {truck.location_lat}
            //                     </p>
            //                   </div>
            //                 ) : null}
            //               </div>
            //             </InfoWindow>
            //           </Marker>
            //         );
            //       })}
            
            //       <></>
            //     </GoogleMap>
            //   ) : (
              //     <></>
              //   );
              // }
              
