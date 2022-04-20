import React from 'react'

import { Link } from 'react-router-dom';
import Schedule from './Schedule';

// styles
import './Nav.css'

export default function Nav() {
  return (
    
    <div className="nav-container">      
      <div className="nav-title">
        <h2><Link to="/">FoodTruck Finder</Link></h2>
      </div>
      <Schedule />
      <div className="nav-items">      
        <div className="link">Favourites</div>

        <div><Link to="/signup">Signup</Link></div>
        <div><Link to="/login">Login</Link></div>

      </div>           
    </div>
  )
}

