// styles
import './SideNav.css'
import React from 'react'

import { FaDrumstickBite, FaCoffee, FaHotdog, FaHamburger, FaIceCream } from "react-icons/fa";
import { BsXLg, BsChevronDoubleDown } from "react-icons/bs";
import { GiPotato, GiNachos } from "react-icons/gi";

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
      <div className="filter-wrapper">
        <span className="open-btn" onClick={openNav}>FILTER BY</span>
        <span className="open-btn" onClick={openNav}>CATEGORY</span>
        <span className="open-btn arrow" onClick={openNav}><BsChevronDoubleDown /></span>
      </div>         
      <div className="side-nav-icons">         
        <div onClick={()=> props.setUrl(`http://localhost:3002/trucks/${props.day}/bbq`)}><FaDrumstickBite /></div>       
        <div onClick={()=> props.setUrl(`http://localhost:3002/trucks/${props.day}/coffee`)}><FaCoffee /></div>
        <div onClick={()=> props.setUrl(`http://localhost:3002/trucks/${props.day}/burgers`)}><FaHamburger /></div>
        <div onClick={()=> props.setUrl(`http://localhost:3002/trucks/${props.day}/potato`)}><GiPotato /></div>
        <div onClick={()=> props.setUrl(`http://localhost:3002/trucks/${props.day}/nachos`)}><GiNachos /></div>
        <div onClick={()=> props.setUrl(`http://localhost:3002/trucks/${props.day}/dessert`)}><FaIceCream /></div>
        <span className="close-btn" onClick={closeNav}><BsXLg /></span>
      </div>
      
    </div>    
  )
}
