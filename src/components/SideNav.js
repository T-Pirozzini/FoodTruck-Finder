// styles
import './SideNav.css'
import React from 'react'

import { FaDrumstickBite, FaCoffee, FaHotdog } from "react-icons/fa";
import { BsXLg, BsChevronDoubleLeft } from "react-icons/bs"; 

export default function SideNav(props) {

  /* Set the width of the side navigation to 100px */
function openNav() {
  document.querySelector(".side-nav-icons").style.width = "100px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.querySelector(".side-nav-icons").style.width = "0";
}

  return (
    <div className="side-nav-container">
      <span className="open-btn" onClick={openNav}><BsChevronDoubleLeft /> FILTER</span>         
      <div className="side-nav-icons">           
        <div className="close-btn" onClick={closeNav}><BsXLg /></div>
        <div onClick={()=> props.setUrl("http://localhost:3002/trucks/bbq")}><FaDrumstickBite /></div>
        <div onClick={()=> props.setUrl("http://localhost:3002/trucks")}><FaHotdog/></div>
        <div onClick={()=> props.setUrl("http://localhost:3002/trucks/coffee")}><FaCoffee /></div>
      </div>
      
    </div>    
  )
}
