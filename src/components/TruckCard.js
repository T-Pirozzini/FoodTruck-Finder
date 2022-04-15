import React from 'react'
// import { Link } from 'react-router-dom'

// styles
import './TruckCard.css'


export default function TruckCard( foodTrucks ) {
  return (
    <div className="cards-container">
      <div className="truck-card">
        <h3>Spuddies</h3>
        <p>Come on down, get some spuds!</p>
        <p>4/5 stars</p>
      </div>
      <div className="truck-card">
        <h3>Taco & Turkey</h3>
        <p>The combo of all combos!</p>
        <p>3/5 stars</p>
      </div>
      <div className="truck-card">
        <h3>Eat For Fuel!</h3>
        <p>Granola and whey powder anyone?</p>
        <p>2/5 stars</p>
      </div>
    </div>

//USE DATA TO GENERATE RESULTS
  //   <div className="cards-container">
  //     {foodTrucks.map(truck => (
  //       <div key={truck.id} className="truck-card">
  //         <h3>{truck.title}</h3>
  //         <p>{truck.info}</p>
  //         <p>{truck.rating} stars</p>
  //         <Link to={`/order/${truck.id}`}>Place An Order</Link>
  //       </div>
  //     ))}
  //   </div>
  )
}


