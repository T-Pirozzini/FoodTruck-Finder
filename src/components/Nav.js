import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/foodtrucklogo.jpeg'

// styles
import './Nav.css'

export default function Nav(props) {
  return (    
    <div className="nav-container">
      <div className="nav-title">
      <Link to="/"><img className="logo" src={logo} alt="Food Truck Logo"></img></Link>        
        <div id="title" style={{color: "white"}}>Food Truck Finder</div>
      </div>
      
      <div id="nav-items">      
        {/* <div className="link">Favourites</div> */}
        <div><Link to="/signup">Add Truck</Link></div>
        <div><Link to="/login">Logout</Link></div>
      </div>           
    </div>
  )
}

