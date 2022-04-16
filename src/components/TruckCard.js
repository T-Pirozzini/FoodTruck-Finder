import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
// import client from '../../data/elephantSQL'

// styles
import './TruckCard.css'

export default function TruckCard() {  
  const [url, setUrl] = useState(['http://localhost:3000/foodTrucks'])
  // const [url, setUrl] = useState([client])
  const { data: pins } = useFetch(url)  

  console.log(pins)

  return (
    <div className="main-container">
      <div className="cards-container">        
        {pins && pins.map(pin => (
          <div key={pin.id} className="truck-card">
            <h3>{pin.truck_name}</h3>
            <p>{pin.info}</p>
            <p>{pin.rating}</p>
            <p>{pin.location_lng}, {pin.location_lat}</p>
          </div>        
        ))}
      </div>    
      <div className="filters">
        <button onClick={() => setUrl("http://localhost:3000/foodTrucks")}>
          All
        </button> 
        <button onClick={() => setUrl("http://localhost:3000/foodTrucks?category=potato")}>
          Spuds
        </button>
        <button onClick={() => setUrl("http://localhost:3000/foodTrucks?category=coffee")}>
          Coffee
        </button>        
      </div>
    </div>      
  )
}


