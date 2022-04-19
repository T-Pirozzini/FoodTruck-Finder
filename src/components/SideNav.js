// styles
import './SideNav.css'
import React from 'react'


export default function SideNav() {

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
      <span className="open-btn" onClick={openNav}>OPEN FILTER</span>         
      <div className="side-nav-icons">           
        <div className="close-btn" onClick={closeNav}>Close</div>
        <div>
          TACOS
        </div>      
        <div>BURGERS</div>
        <div>COFFEE</div>
      </div>
      
    </div>    
  )
}
