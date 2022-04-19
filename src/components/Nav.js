import React from 'react'

import { Link } from 'react-router-dom';


// styles
import './Nav.css'

export default function Nav() {
  return (
    <div className="nav-container">
      <div className="nav-title">
        <h2>FoodTruck Finder</h2>
      </div>
      <div className="nav-items">      
        <div>Favourites</div>

        <div><Link to="/signup">Signup</Link></div>
        <div><Link to="/login">Login</Link></div>

      </div>           
    </div>
  )
}

