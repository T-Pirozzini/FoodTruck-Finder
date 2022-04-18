import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
// import client from '../../data/elephantSQL'

// styles
import "./TruckCard.css";

export default function TruckCard(props) {
  // const [url, setUrl] = React.useState(props.url);  
  console.log("PROPS", props)
  console.log("TEST", props.url + "/" + "BBQ")
  console.log("setURL", props.setUrl)
    
  return (
    <div className="main-container">
      <div className="cards-container">
        {props.pins &&
          props.pins.map((pin) => (
            <div key={pin.id} className="truck-card">
              <h3>{pin.truck_name}</h3>
              <p>{pin.info}</p>
              <p>{pin.rating}</p>
              <p>
                {pin.location_lng}, {pin.location_lat}
              </p>
            </div>
          ))}
      </div>
      <div className="filters">
        <button onClick={() => props.setUrl("http://localhost:3002/trucks")}>
          All
        </button>
        <button
          onClick={() =>
            props.setUrl("http://localhost:3002/trucks/potato")
          }
        >
          Spuds
        </button>
        <button
          onClick={()=> props.setUrl("http://localhost:3002/trucks/bbq")          }
        >
          BBQ
        </button>
      </div>
    </div>
  );
}
