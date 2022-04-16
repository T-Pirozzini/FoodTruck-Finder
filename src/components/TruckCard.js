import React, { useState, useEffect } from 'react'

// styles
import './TruckCard.css'

export default function TruckCard() {
  const [pins, setPins] = useState([])
  const [url, setUrl] = useState(['http://localhost:3000/foodTrucks']) 

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setPins(json))
  }, [url])

  console.log(pins)

  return (
    <div className="main-container">
      <div className="cards-container">        
        {pins.map(pin => (
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


