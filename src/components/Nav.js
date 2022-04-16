import React from 'react'

// styles
import './Nav.css'

export default function Nav() {
  return (
    <div className="nav-container">
      <div className="nav-title">
        <h2>Foodtruck Finder</h2>
      </div>
      <div className="nav-items">      
        <div>Favourites</div>
        <div>Login</div>
      </div>           
    </div>
  )
}

