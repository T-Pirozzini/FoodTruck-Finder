import React, { useState, useEffect } from 'react'

// styles
import './TruckCard.css'

export default function TruckCard() {
  const [pins, setPins] = useState([])  

  useEffect(() => {
    fetch('http://localhost:3000/foodTrucks')
      .then(res => res.json())
      .then(json => setPins(json))
  }, [])

  console.log(pins)

  return (
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

  )
}


